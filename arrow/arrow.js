const names = ["kim", "oh", "lee"];

// before
const addSmileBefore = names.map(function (name) {
    return name + "😀";
});
console.log("before : ", addSmileBefore);

// after
const addSmileAfter = names.map(name => name + "😀");
console.log("after : ", addSmileAfter);

names.forEach((name, index) => console.log(`${index} : ${name}`));

// filter
const filterNames = names.filter(name => !name.includes("oh"));
console.log("filter : ", filterNames);

const emails = [
    "shineoov@naver.com",
    "test@naver.com",
    "shineoov88@gamil.com"
];

const objects = emails.map((email, index) => ({
    names : email.split("@")[0],
    index : index
}));

console.table(objects);