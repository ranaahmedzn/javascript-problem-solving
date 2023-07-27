function findMostFrequent(numbers) {
    const frequency = {}

    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i]

        if (frequency[number]) {
            frequency[number] += 1;
        }
        else {
            frequency[number] = 1;
        }
    }

    let mostFrequent;
    let highestFrequent = 0;

    for (key in frequency) {
        if (frequency[key] > highestFrequent) {
            mostFrequent = key;
            highestFrequent = frequency[key]
        }
    }
    return mostFrequent;
}

const numbers = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result = findMostFrequent(numbers);
console.log(result);