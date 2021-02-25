const failures = ["mislick", "falling down", "skateboard accident", "tiktok fail"];
//Prints the entire array
console.log(failures.map(fruit => fruit));
//Prints the individual elements in the array
failures.map((failDesc,index) => {
    console.log({Index: index+1,failDesc})
});
// Does the same, but on one line
failures.map((failDesc,index) => console.log({Index: index+1,failDesc}));
// Print individual elements without it being a JSON and without Strings
failures.map((failDesc,index) => console.log(index+1,failDesc));

