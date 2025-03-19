document.addEventListener('DOMContentLoaded', function() {

    const inputElement = document.getElementById("input-box");
    const resultsContainer = document.getElementById("results");
    const debounceTime = 300;
    const cache = new Map();

    const fetchMockData = (query) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(data.filter((item) => item.toLowerCase().includes(query)));
            }, 500)
        })
    }

    const debounce = (cb, delay) => {
        let timer = null;
        return function(...args) {
            clearTimeout(timer);
            timer = setTimeout(() => cb(...args), delay);
        } 
    }

    const appendResult = (results) => {
        if(results.length > 0) {
            resultsContainer.innerHTML = results.map((result) => `<div class="result-item">${result}</div>`).join("");
        } else {
            resultsContainer.innerHTML = `<div class="no-result-found">No results found</div>`
        }
    }

    const handleInputChange = async (e) => {
        const query = e.target.value.trim().toLowerCase();
        
        if(query.length === 0) {
            resultsContainer.innerHTML = ``;
            return;
        }

        resultsContainer.innerHTML = "<div>Loading Data....</div>";

        if(cache.has(query)) {
            appendResult(cache.get(query));
            return;
        }

        const results = await fetchMockData(query);
        cache.set(query, results);
        appendResult(results);
    }

    const handleItemClick = (e) => {
        if(e.target.className === 'result-item') {
            inputElement.value = e.target.textContent;
            resultsContainer.innerHTML = ``;
        }
    }

    function initialiseSearch() {
        inputElement.addEventListener("input", debounce(handleInputChange, debounceTime));
        resultsContainer.addEventListener("click", handleItemClick)
    }

    initialiseSearch();
});