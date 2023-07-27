function findIndicesOfTwoSum(sortedArray, target) {
    
    for (let i = 0; i < sortedArray.length; i++) {
        const left = sortedArray[i];
        const right = sortedArray[i + 1];
        
        if(left + right === target){
            return [sortedArray.indexOf(left), sortedArray.indexOf(right)]
        }
    }
}

const numbers = [1, 3, 6, 8, 11, 15];
const result = findIndicesOfTwoSum(numbers, 14)
console.log(result);