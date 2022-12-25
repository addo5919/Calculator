function add(a,b) {
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b) {
    return a*b;
}

function div(a,b) {
    return a/b;
}

function operate(operator,a,b) {
    let res;
    if(operator=="+") {
        res=add(a,b);
    }
    else if(operator=="-") {
        res=sub(a,b);
    }
    else if(operator=="x") {
        res=mul(a,b);
    }
    else if(operator=="/") {
        res=div(a,b);
    }
    return res;
}

let num1;
let operator;
let input=document.querySelector(".display");
let keys=document.querySelectorAll(".key");
keys.forEach((key)=>{
    key.addEventListener("click",(e)=>{
        let temp=e.target.innerText;
        if(temp=="+" || temp=="-" || temp=="x" || temp=="/") {
            num1=Number(input.value);
            operator=temp;
            input.value="";
        }
        else if(temp=="=") {
            num1=operate(operator,num1,Number(input.value));
            input.value=num1;
        }
        else if(temp=="C") {
            input.value="";
            num1=undefined;
            operator=undefined;
        }
        else {
            input.value+=temp;
        }
    });
});