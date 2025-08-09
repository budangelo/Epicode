const calcbtn = document.querySelectorAll (".calc-key")
console.log (calcbtn)
const calcDisplay = document.querySelector (".output")
console.log (calcDisplay)
const percentBtn = document.querySelector ('button[data-value="%"]')
console.log (percentBtn) 

function actScreen(value) {
    if (calcDisplay.innerText === "0") {
        calcDisplay.innerText = value
    } else {
        calcDisplay.innerText += value
    }
}

calcbtn.forEach(button => {
    button.addEventListener ("click", () => {
        const calcbtnValue = button.innerText

        if (calcbtnValue === 'C') {
            calcDisplay.innerText = '0'
        } else if (calcbtnValue === '=') {
            try {
                const total = calcDisplay.innerText 
                calcDisplay.innerText = eval(total)
            } catch (error) {
                calcDisplay.innerText = 'Error!!!'
            }
        } else {
            if (calcDisplay.innerText === '0') {
                calcDisplay.innerText = calcbtnValue
            } else {
                calcDisplay.innerText += calcbtnValue
            }
        }
    })
})

percentBtn.addEventListener('click', () => {  
    const num = paserFloat(calcDisplay.innerText) || 0
    const percent = num / 100
    calcDisplay.innerText= percent
})