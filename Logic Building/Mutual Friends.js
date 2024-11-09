
const friends = (mapping, person) => {

    let friendsList = mapping[person];

    if(friendsList && friendsList.length > 0) {
        let finalFriendsList = [...friendsList];
        for(let friend of friendsList) {
            const mutualFriends = friends(mapping, friend);
            finalFriendsList.push(...mutualFriends);
        }
        return finalFriendsList;
    }
    return [];
}

const mapping = {
  a: ['b', 'c'],
  b: ['d', 'g'],
  d: ['p', 'q'],
  l: ['x', 'y']
};

console.log(friends(mapping, 'a'));