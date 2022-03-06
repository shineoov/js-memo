const settings = {
    color: {
        test_color: "dark"
    }
};



const {
    color: { test_color = "light"}
} = settings;

// before
// const testColor = settings.color.test_color || "light";

// after
const {
    color: { test_color: testColor = "light"}
} = settings;
console.log(testColor);


let choseColor;
({
    color : {
        test_color: choseColor = "light"
    }
} = settings);

console.log(choseColor);




