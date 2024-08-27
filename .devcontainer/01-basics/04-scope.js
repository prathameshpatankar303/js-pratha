// let a = 2
// const b = 3 
// var c = 4 --it will run outside the scope aswell 

if (true) {
     let a = 2
    const b = 3
    var c = 4
    
}

// console.log(a);
// console.log(b);
//console.log(c);


//scope in if statement is block scope
// scope ouside is called global scope
// scopes are diff when run in browser and code space


//-----------------------------------------------------------------------------------------------------------------------
//closure - child can access parent elements but not vise versa


function one(){

    const username = "pratha"

    function two(){

        const website = "youtube"
        console.log(username);
        
    }
    two()
}

one()


//-----------------------------------------------------------------------------------------------------------------------
//two types of how to declare a function:
//first type: can give the result even if the function is called before even declaring it


function addone(num){

    return num + 1

}

console.log(addone(3))


//second type:  cannot give the result if the function is called before even declaring it


const addTwo = function(num){

    return num + 2
}

console.log(addTwo(4));



