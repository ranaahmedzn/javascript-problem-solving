function reverseString(str) {
    let charArr = [];

    for (let i = str.length - 1; i >= 0; i--) {
        const char = str[i];
        charArr.push(char);
    }
    const reverseString = charArr.join("");
    return reverseString;
}

const result = reverseString('Hello World');
console.log(result);