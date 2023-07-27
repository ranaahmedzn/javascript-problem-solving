function generatePassword(length) {
    const charsStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*'
    let password = '';

    for (let i = 0; i < length; i++) {
        const char = charsStr[Math.floor(Math.random() * charsStr.length)]
        password += char;
    }
    return password;
}

const result = generatePassword(8);
console.log(result);