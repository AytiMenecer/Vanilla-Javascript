const toggles = document.querySelectorAll('.toggle')
const lowercase = document.querySelector('#lowercase')
const uppercase = document.querySelector('#uppercase')
const numbers = document.querySelector('#numbers')
const symbols = document.querySelector('#symbols')
const range = document.querySelector('#slider')
const generateBtn = document.querySelector('#generateBtn')
const resultInput = document.getElementById('inputum')
const sliderLength = document.getElementById('slider-length')
const copyGen = document.getElementById('copyy')

copyGen.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultInput.value
 
    if (!password) {
        return
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard!');
})

range.addEventListener('change', () => {
    const length = range.value
    sliderLength.innerHTML = `length: ${length}`
})

generateBtn.addEventListener('click', () => {
    const length = range.value
    const hasLowerCase = lowercase.checked
    const hasUpperCase = uppercase.checked
    const hasNumbers = numbers.checked
    const hasSymbols = symbols.checked



    resultInput.value = generatePassword(hasLowerCase, hasUpperCase, hasNumbers, hasSymbols, length)

})

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol

    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])

    if (typesCount === 0) {
        return ''
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0]
            generatedPassword += randomFunc[funcName]()
        })
    }

    const finalPassword = generatedPassword.slice(0, length)

    return finalPassword
}

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}=<>/'

    return symbols[Math.floor(Math.random() * symbols.length)]
}
