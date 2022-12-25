
let currNum="";
let prevNum="";
let operator="";
let digits=document.querySelectorAll(".digit");
let operators=document.querySelectorAll(".operator");
let clear=document.querySelector(".clear");
let decimal=document.querySelector(".decimal");
let equalKey=document.querySelector(".equal");
let currScreen=document.querySelector(".display2");
let prevScreen=document.querySelector(".display1");

digits.forEach((digit)=>{
    digit.addEventListener("click",(e)=>{
        handleNumber(e.target.innerText);
    });
});

function handleNumber(num) {
    if(currNum.length<=11) {
    currScreen.innerText+=num;
    currNum+=num;
    }
}

operators.forEach((operator)=>{
    operator.addEventListener("click",(e)=>{
        handleOperator(e.target.innerText);
    });
});

function handleOperator(op) {
    operator=op;
    prevNum=currNum;
    prevScreen.innerText=prevNum+" "+operator
    currNum="";
    currScreen.innerText="";
}

equalKey.addEventListener("click",(e)=>{
    
});

