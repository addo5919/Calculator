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
let digits=document.querySelectorAll(".digit");
let operators=document.querySelectorAll(".operator");
let clear=document.querySelector(".clear");
let result=document.querySelector("#result");

digits.forEach((digit)=>{
    digit.addEventListener("click",(e)=>{
        input.value+=e.target.innerText;
    });
});

operators.forEach((op)=>{
    op.addEventListener("click",(e)=>{
        if(num1==undefined) {  
            num1=Number(input.value);
            operator=e.target.innerText;
            input.value="";
        }
        else if(num1!=undefined) {
            let res=operate(operator,num1,Number(input.value));
            input.value="";
            num1=res;
            operator=e.target.innerText;
            result.innerText="result: "+res+", currect active operator: "+operator;
        }
       
        
    });
});

clear.addEventListener("click",(e)=>{
    input.value="";
    num1=undefined;
    operator=undefined;
    result.innerText="";
});