"using strict";

console.log("HEJ Med dug");

let someVarToDelete = "Variable";
delete someVarToDelete;

{
    // this is a new scope
    let scopedVariable = "abc";
    {
        scopedVariable = 123;
    }
    // console.log(scopedVariable);
}

{
    let scopedVariable = "abc";
    {
        let scopedVariable = 123;
        console.log(scopedVariable);
    }
    console.log(scopedVariable);
}

for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}