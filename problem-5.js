function simpleCalculator(num1, num2, operator){
    if(operator === '+'){
        return num1 + num2;
    }
    else if(operator === '-'){
        return num1 - num2;
    }
    else if(operator === '*'){
        return num1 * num2;
    }
    else if(operator === '/'){
        return num1 / num2;
    }
    return "Invalid operator. Please provide (+, -, *, /) these operator";
}

const result = simpleCalculator(5, 10, '*');
console.log(result);