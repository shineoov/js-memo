//const friends = ["kim", "oh", "su"];
const friends = Array.of("kim@naver.com", "oh@gmail.com", "su@naver.com");

// find
const findFriend = friends.find(friend => friend.includes("@gmail.com"));

console.assert(findFriend === "oh@gmail.com", "error - 1");

// findIndex
let findIndexNumber = friends.findIndex(friend => friend.includes("@naver.com"));
console.assert(findIndexNumber === 0, "error - 2");

findIndexNumber = friends.findIndex(friend => friend.includes("@yahoo.co.kr"));
console.assert(findIndexNumber < 0, "error - 3");

// includes
const isInclude = friends.includes("kim@naver.com");
console.assert(isInclude, "error - 4");

// fill
console.log("=========== Array.fill ===========");
let numbers;
numbers = [1, 2, 3].fill(4, 1); // [1, 4, 4]
console.log(numbers);

numbers = [1, 2, 3, 4].fill(0, 2, 4); // -> [1, 2, 0, 0]
console.log(numbers);

numbers = [1, 2, 3].fill(4, -3); // -> [4, 4, 4]
console.log(numbers);

numbers = [1, 2, 3].fill(4, -3, -1); // -> [4, 4, 3]
console.log(numbers);