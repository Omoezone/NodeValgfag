Documentations of NodeJS course:

Variables: 
    We mainly use 3 different types of variable containers:
        - Var (mutable)
        - let (mutable, with smaller scope than var)
        - const (immutable, cant change value after initialization, like "final" in Java)

scope: 
    Scope is the extend of the range of the program our data is "valid". When can the program see the different values and when can it not. 
        - There is file wide scope, which is data that is usable in the entire file and all of its functions.
        - Then there is local scope, which is only available in the current area of the file that it is initialized, as for example an function.

    let value1 = 5;  // (3)
    function myFunction(value1, Value2){
        let stringValue = "Hello World!";
        console.log(stringValue);   // (1)
        console.log(value1);        // (5)
    }
    console.log(stringValue);   // (2)
    console.log(value1);        // (4)

    // He is there a local scope inside the function, so the let "stringValue" can print in the log inside of the function (1), but not outside the function (2).
    // But the let "value1" is declared outside the functions scope and transfered by parameters(3), which basicly means that it lives both places and is therefore usable outside the scope (4) of the functions aswel as inside its scope (5)

Objects: 
    - Objects works in such a way, that you create them with the {} and it is made up of 2 parts, the keys (Java fields) and values, that is connected to the keys. Then if you want the value, you just need to call on the keys, (like hashmap in Java)

    const objectStudent = {name: "William", age: 22}; 
    // Then if you want the objects name or age you just call it on the object, like: objectStudent.name

Array: 
    - Array works just like in Java, where you have an list with elements surounded by []. It does not use the keyword: New
    - To get data from Array you just type name of array[index]

    const arrayNumber = [1,2,3,4,5,6,7,8,9];
    console.log(arrayNumber[4])




-----
Arrow functions

Errors er objects¨

Undefined er ikke et true value, ligesom false, 0 osv.

const value = require("./filenameOfJSON"); // If no ./ it will look in node_modules

app.use(express.static('folderName')) // Bruges til at definere en folder som værende static, hvilket betyder at 
// clienten har adgang til at se indholder i den mappe, i modsætning til at det kun vil være serveren der skal have adgang til en gien
// folder. Hvis ikke clienten har adgang til en folder, vil indholdet ikke kunne blive vist på en hjemmeside. 

PUT and PATCH: 
    put replaces the entire resource
    patch replace part of the rescource
 

 Mandatory: 

    
Scripts kan også blive puttet i package.json. De tager et object. 

"scripts": {
    "scriptName" : "do something in terminal"
}
to run it do "npm run scriptName"

"touch" create a new file
"mkdir" create a new folder
lsof -i med mere

process.env.PORT    

Cross-env for npm


CHANGE FOR HEROKU

module.export = { Data indsættes her}

Nodemailer
SCEMAs