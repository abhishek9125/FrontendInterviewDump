const str = "Ultimate JavaScript / FrontEnd Guide";
const keywords = ["Front", "End", "JavaScript"];

const highlight = (str, keywords, caseInsensitive) => {

    if(caseInsensitive) {
        keywords = keywords.map((word) => word.toLowerCase());
    }

    const uniqueWords = new Set(keywords);

    const words = str.split(" ");

    const hasWord = (word) => {
        word = caseInsensitive ? word.toLowerCase() : word;
        return uniqueWords.has(word);
    }

    let result = words.map((word) => {
        let output = "";

        if(hasWord(word)) {
            output = `<strong>${word}</strong>`;
        } else {
            for(let i = 0; i < word.length; i++) {
                let prefix = word.slice(0, i + 1);
                let suffix = word.slice(i + 1);

                if(hasWord(prefix) && hasWord(suffix)) {
                    output = `<strong>${word}</strong>`;
                } else if(hasWord(prefix)) {
                    output = `<strong$>${prefix}</strong${suffix}`;
                } else if(hasWord(suffix)) {
                    output = `${prefix}<strong>${suffix}</strong>`;
                }
            }
        }

        return output !== "" ? output : word;
    });
    return result.join(" ");
}

console.log(highlight(str, keywords, true));