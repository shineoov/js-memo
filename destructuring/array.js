
// , "Thu", "Fri", "Sat", "Sun"
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

// before
// const mon = days[0];
// const tue = days[1];
// const wed = days[2];

//after
const [mon, tue, wed, thu = "Thu"] = days;
console.log(mon, tue, wed, thu);
