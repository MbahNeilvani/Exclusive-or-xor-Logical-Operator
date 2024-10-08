// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

function xor(){
    let a = 15
    let b = 20
    if (a && b % 5){
        return true 
    }else{
        return false
    }
}

// Solution

function xor(a, b) {
    return (a || b) && !(a && b);
}

// Another

function xor(a, b) {
    if ((a === true) && (b !== true)){
    return true
    } else if ((a !== true) && (b === true)){
    return true
    } else {
    return false
    }
}