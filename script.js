const km = parseInt(prompt("Quanti km devi fare?"));
const age = parseInt(prompt("Quanti anni hai?"))
let sales = 0
let price = parseFloat(km * 0.21)

if (age < 18) {
    sales = parseFloat(price * 0.20)
    console.log("giovincello hai diritto al 20% di sconto")
} else if (age > 65) {
    sales = parseFloat(price * 0.40)
    console.log("vecchietto hai diritto al 40% di sconto")
}
console.log (price)
console.log ("il prezzo da pagare è: ", parseFloat(price - sales).toFixed(2))