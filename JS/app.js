var output = document.calculator.output;

function getNumber(num){
    document.calculator.output.value += num;
}

function getResult(){
    output.value = eval(output.value)
}

function clearEntry(){
    output.value = output.value.slice(0, (output.value.length - 1))
    
}

function getPercent(){    
    output.value = eval(output.value)/100
}