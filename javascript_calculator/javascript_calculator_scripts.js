function pushNumber(n){
    if (window.currentOperation.operatorJustPushed){
        document.getElementById("numberDisplay").innerText = "";
    }
    window.currentOperation.operatorJustPushed = false;
    document.getElementById("numberDisplay").innerText += n;
}

function pushDecimal(){
    if (!document.getElementById("numberDisplay").innerText.includes('.')){
        document.getElementById("numberDisplay").innerText += '.'
    }
}

function pushOperator(operator){
    pushEquals();
    window.currentOperation.operator = operator;
}

function pushEquals(){

    if(window.currentOperation.operator == '+'){
        window.currentOperation.num1 += Number(document.getElementById("numberDisplay").innerText);
    }
    else if(window.currentOperation.operator == '-'){
        window.currentOperation.num1 -= Number(document.getElementById("numberDisplay").innerText);
    }
    else if(window.currentOperation.operator == '*'){
        window.currentOperation.num1 *= Number(document.getElementById("numberDisplay").innerText);
    }
    else if(window.currentOperation.operator == '/'){
        window.currentOperation.num1 /= Number(document.getElementById("numberDisplay").innerText);
    }
    else if(window.currentOperation.operator == '='){
        window.currentOperation.num1 = Number(document.getElementById("numberDisplay").innerText);
    }

    window.currentOperation.operator = '=';

    document.getElementById("numberDisplay").innerText = window.currentOperation.num1;
    window.currentOperation.operatorJustPushed = true;
}

function clearCalculator(){
window.currentOperation = {num1:0, operator:'+', operatorJustPushed:false}
window.currentOperation.operatorJustPushed = true;
document.getElementById("numberDisplay").innerText = 0;
}