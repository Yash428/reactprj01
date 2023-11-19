function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function divide(a,b){
    return a/b;
}
function multiply(a,b){
    return a*b;
}

function arith(s){
    let a = parseInt(s[0]);
    let b = parseInt(s[2]);
    let c = s[1];
    let d;
    switch(c){
        case '+':
            d = a+b;
            break;
        case '*':
            d = a*b;
            break;
        case '-':
            d = a-b;
            break;
        case '/':
            d = a/b;
            break;
        default:
            d = 0;
            break;
    }
    return d;
}

let p= arith('3+4');
console.log(p);