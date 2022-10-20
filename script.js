const km = parseInt(prompt("Quanti km devi fare?"));
const age = parseInt(prompt("Quanti anni hai?"))
let sales = 0
let price = parseFloat(km * 0.21)

if (age < 18) {
    let sales = parseFloat(price * 0.20) 
} else if (age > 65) {
    let sales = parseFloat(price * 0.40)
}

console.log ("il prezzo da pagare è: ", parseFloat(price - sales))