const rndNumber = document.getElementById('rndNumber'),
    lowerInput = document.getElementById('lower-lim'),
    upperInput = document.getElementById('upper-lim'),
    SubmitBtn = document.getElementById('SubmitBtn'),
    clearBtn = document.getElementById('clear');

eventListener()

function eventListener() {
    SubmitBtn.addEventListener('click', startRandom)
    clearBtn.addEventListener('click', clearInput)
}

function startRandom(e) {
    let inputValueLow = Number(lowerInput.value.trim()),
        inputValueUpp = Number(upperInput.value.trim())


    if (inputValueLow !== '' && inputValueUpp !== '') {
        random(inputValueLow, inputValueUpp)
    }
    e.preventDefault()
}

function random(min, max) {
    let reqem = Math.floor(Math.random() * (max - min + 1)) + min;
    rndNumber.innerText = reqem;
}

function clearInput() {
    lowerInput.value = '';
    upperInput.value = '';
}