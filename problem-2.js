function sumOfPositiveNum(numbers) {
    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
        const number = numbers[i];
        
        if(number > 0){
            sum += number;
        }
    }
    return sum;
}

const numbers = [2, -5, 10, -20, 45]
const result = sumOfPositiveNum(numbers);
console.log(result);