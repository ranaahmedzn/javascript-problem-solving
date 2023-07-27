function findSecondSmallest(numbers) {
    let firstSmallest = numbers[0];
    let secondSmallest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number < firstSmallest) {
            firstSmallest = number;
        }
    }

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]
        if (number < secondSmallest && number > firstSmallest) {
            secondSmallest = number;
        }
    }
    return secondSmallest;
}

const numbers = [7, 1, 12, 20, 5, 25, 2, 42];
const result = findSecondSmallest(numbers)
console.log(result);
