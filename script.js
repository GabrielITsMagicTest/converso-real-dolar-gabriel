api_Real = 5.48

// chamando a api
fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_LhPKeH5T9zutKCbSLUHjtCtyCuE7FOfJ7HwOiaNW")
.then( (res) => res.json()) 
.then( (data) => {
    api_Real = data.data.BRL
})
.catch(error => {
    console.error('Ocorreu um erro:', error);
});

function calculGetDolar() {
    let real = document.getElementById("input-valor").value
    let valor = document.getElementById("valor")

    let resultado = real / api_Real
    valor.textContent = "$ " + resultado.toFixed(2)
}
function calculGetReal() {
    let dolar = document.getElementById("input-valor").value
    let valor = document.getElementById("valor")

    let resultado = dolar * api_Real
    valor.textContent = "$ " + resultado.toFixed(2)
}