//rest or spread depends on which case you use, here it is rest- returns array of the elements given as intupt

function calculatecartprice(...num1){
return num1

}

// console.log(calculatecartprice(200,400,500))

//--------------------------------------------------------------------------------------------------------------------------

// how to handle obj in function:

const user = {
    username: "pratha",
    price: 200
}
// function handleobj(anyobject){

//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
// }

// handleobj(user)
// handleobj({username:"sam",
//     price:100
// })

//--------------------------------------------------------------------------------------------------------------------------

// how to handle array in function:

const newarray = [100, 200, 300, 400]

function getarray(anyarray){

    return anyarray[2]
}

// console.log(getarray(newarray));
// console.log(getarray([100,200,20,39]))


