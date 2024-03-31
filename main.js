let interval=undefined;
let min=0;
let sec=0;
let questionNumber=0;
let count=0;
let op=['+','-','*','/','%'];

let qNum1=0;
let qNum2=0;
let selectedOp='';

let minElement=document.getElementById('min');
let secElement=document.getElementById('sec');

let countElement=document.getElementById('count');

const setCount=()=>{
    count++;
    countElement.innerHTML=count;
}

const manageQuestion=()=>{
    
}

const reset=()=>{
    if(interval){
        clearInterval(interval);
    }

    minElement.innerHTML='00';
    secElement.innerHTML='00';
}

const countdown = ()=>{
    if(interval){
        clearInterval(interval);
    }

    interval = setInterval(() => {
    
        sec++;
        
        if (sec<10) {
            secElement.innerHTML='0'+sec
        }else{
            secElement.innerHTML=sec
        }
        
        if(sec===59){
            min++;
                minElement.innerHTML=min
            sec=0;
        }


    }, 1000);
}

const start = ()=>{
    countdown();
}