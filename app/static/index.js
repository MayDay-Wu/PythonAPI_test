const numbers = document.querySelectorAll('.numbers')
const result  = document.querySelector('.result span')
const signs = document.querySelectorAll('.signs')
const others = document.querySelectorAll('.item1')
console.log(others)
let firstValue ='';
let isFirstValue = false;
let secondValue = '';
let isSecondValue = false;
let sign = '';
let resultValue = 0;

for(let i = 0; i<numbers.length; i++ ){
    numbers[i].addEventListener('click',(e)=>{
        let atr = e.target.getAttribute('value');
        if(isFirstValue == false){
            getFirstValue(atr)
        }
        if(isSecondValue == false){
            getSecondValue(atr)
        }
    })
}

function getFirstValue(el){
    result.innerHTML = '';
    firstValue += el;
    result.innerHTML = firstValue;
    
}

function  getSecondValue(el){
    if (firstValue != '' && sign != ''){
        secondValue += el;
        result.innerHTML = secondValue
        
    }
}

for(let i = 0; i<signs.length; i++){
    signs[i].addEventListener('click',(e)=>{
        firstValue =  parseFloat(firstValue)
        
        if (sign =='+' && isFirstValue == true){
            secondValue =  parseFloat(secondValue)
            resultValue =(firstValue + secondValue).toPrecision(4); 

            console.log(resultValue)
        }else if(sign == '-' && isFirstValue == true){
            resultValue = firstValue - secondValue;
        }else if(sign == '*' && isFirstValue == true){
            resultValue = firstValue * secondValue
        }else if(sign == '/' && isFirstValue == true){
            resultValue = firstValue / secondValue
        }
        sign = e.target.getAttribute('value');
        if (isFirstValue == true){
            result.innerHTML = '';
            result.innerHTML = resultValue;
            firstValue = resultValue;
            secondValue = ''
        }else{
            isFirstValue = true;
        } 
    })
}


for (i = 0 ;i < others.length ; i++ ){
    others[i].addEventListener('click',(e)=>{
        other = e.target.getAttribute('value');
        if (other == 'AC'){
            firstValue = '';
            secondValue = '';
            sign = '';
            isFirstValue=false;
            result.innerHTML='0';
        }else if(other == '+/-'){
            if (isFirstValue == false){
                firstValue = -firstValue
                result.innerHTML = firstValue
            }else{
                secondValue = -secondValue
                result.innerHTML = secondValue
            }
            
        }else if(other == '%'){
            if (isFirstValue == false){
                firstValue = firstValue/100
                result.innerHTML = firstValue
            }else if (sign == '='){
                resultValue = resultValue/100
                result.innerHTML = resultValue
            }
            else{
                secondValue = secondValue/100
                result.innerHTML = secondValue
            }
        }
    }) 
}