const title = document.getElementById("title")
console.log(title)
const changeColorbBtn = document.getElementById("changeColor")
console.log(changeColorbBtn)
const changeAddress = document.getElementById("address") 
console.log(changeAddress)
const firstAddress ="Via Giuseppe Verdi 123, 00184 Roma, Italia"
const secondAddress = "Via Mario Rossi 321, 00481 Milano, Italia"
const productLinkBtn = document.querySelectorAll ("main .product-link")
console.log(productLinkBtn)
const toggleImagesBtn = document.querySelectorAll ("main .btn-toggle")
console.log(toggleImagesBtn)
const productsImgs = document.querySelectorAll (".product-images")
console.log(productsImgs)
const priceColorBtn = document.getElementById ("priceColor")
console.log(priceColorBtn)
const prices = document.querySelectorAll (".price-product")
console.log (prices)

function switchTittle (){
    title.innerText = "Grazie! per te 50$ di buono sconto"
}

function changeColor (){
    document.body.classList.add("dark-mode")
}
console.log ("changeColorBtn")



changeAddress.addEventListener("mouseenter", function () { // qua ho una domanda!!!
changeAddress.innerText = secondAddress
})

changeAddress.addEventListener("mouseleave", function () {
changeAddress.innerText = firstAddress

})

function changePriceColors (){
    let randomColor = "#" + Math.floor (Math.random() * 16777215).toString(16)
    prices.forEach(function (price) {
        price.style.color = randomColor
    })
}

priceColorBtn.addEventListener("click", changePriceColors)

function colorLinkChange (){
    productLinkBtn.forEach (link => {
        link.addEventListener ("mouseenter", () => {
            link.classList.add ("link-amazon-green")
        })
        link.addEventListener ("mouseleave", () => {
            link.classList.remove ("link-amazon-green")
        })
    })
}
colorLinkChange ()

toggleImagesBtn.forEach(function (button){
    button.addEventListener("click",function () {
        productsImgs.forEach(function (image) {
            image.classList.toggle("invisible-img")
        })
    })

})

changeColorbBtn.addEventListener("click", () => {
    changeColor()
})
console.log("changeColorbtn")

changeAddress.addEventListener("mouseenter", function (){
changeAddress.innerText = secondAddress;
})

changeAddress.addEventListener("mouseleave", function (){
changeAddress.innerText = firstAddress;
})
