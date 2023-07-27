function romanToInteger(roman) {
    const upperRoman = roman.toUpperCase();
    const numbers = [];
    let finalInt = 0;

    for (let i = 0; i < upperRoman.length; i++) {
        const char = upperRoman[i];

        switch (char) {
            case 'I':
                numbers.push(1)
                break;
            case 'V':
                numbers.push(5)
                break;
            case 'X':
                numbers.push(10)
                break;
            case 'L':
                numbers.push(50)
                break;
            case 'C':
                numbers.push(100)
                break;
            case 'D':
                numbers.push(500)
                break;
            case 'M':
                numbers.push(1000)
                break;
            default:
                numbers.push(0)
        }
    }

    for (let i = 0; i < numbers.length; i++) {
        const left = numbers[i];
        const right = numbers[i + 1];

        if(left < right){
            finalInt -= left;
        }
        else{
            finalInt += left;
        }
    }
    return finalInt;
}

const result = romanToInteger('MCMLXXI'); //1971
console.log(result);