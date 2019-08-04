
let display = document.getElementById("display");
display.disabled = true;
let buttons = document.getElementsByTagName("button")
buttons = Array.from(buttons)
let acButton = document.firstElementChild.children[1].children[0].children[1]
let plus = document.getElementById("plus");
let sum = document.getElementById("sum")
sum.disabled = true;



buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.target.innerText === '=') {
            return;
        }

        if (display.value === "" && event.target.innerText === '+' ||
            display.value === "" && event.target.innerText === '-' ||
            display.value === "" && event.target.innerText === '/' ||
            display.value === "" && event.target.innerText === '*' ||
            display.value === "" && event.target.innerText === '.' ||
            display.value === "" && event.target.innerText === '='

        ) {
            return
        } else {
            sum.disabled = false
        }
        const writtenValue = event.target.innerText
        display.value += writtenValue;

    })
})


acButton.addEventListener('click', () => {
    display.value = "";
    sum.disabled = true;
})


sum.addEventListener('click', () => {
    return display.value = eval(display.value)

})