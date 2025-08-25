const proceedBtn = document.getElementById ("btnproceed")
const clickCheck = document.getElementById ("disclaimer")

function validateProceed(){
    if (clickCheck.checked === true){
        window.location.href="./quiz.html"
    } else { alert("devi accetare prima il dislcaimer")}
}
proceedBtn.addEventListener("click", validateProceed)