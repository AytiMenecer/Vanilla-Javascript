const changeBtn = document.querySelector('button');

changeBtn.addEventListener('click', () => {
    let x = Math.floor(Math.random() * 256)
    let y = Math.floor(Math.random() * 256)
    let z = Math.floor(Math.random() * 256)

    let bgColor = "rgb(" + x + "," + y + "," + z + ")"

    document.body.style.background = bgColor
})