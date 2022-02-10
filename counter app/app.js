const number = document.getElementById('number');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');
const resetBtn = document.getElementById('resetBtn');


plus.addEventListener('click', () => {
    number.innerText++;

})

minus.addEventListener('click', () => {
    number.innerText--;

})

resetBtn.addEventListener('click', () => {
    number.innerText = 0;

})

number.addEventListener("dblclick", () => {
    let howMany = prompt('How many?', `${number.innerText}`)

    if (howMany === null) {
        number.innerText;
    } else {
        number.innerText = howMany
    }
})