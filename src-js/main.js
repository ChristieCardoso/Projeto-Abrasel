function calculate() {
    var valor1 = parseInt(document.querySelector('#renda').value, 10);
    var valor2 = parseInt(document.querySelector('#dependentes').value, 10);
    var nome = document.querySelector('#nome');
    let resultado = valor1 / valor2;
    document.querySelector('#resultado').value = resultado;
    document.querySelector('#nomeres').innerHTML = nome.value  
    
}

const cep = document.querySelector("#cep")

const showData = (result) => {
    for (const campo in result) {
        if (document.querySelector("#" + campo)) {
            document.querySelector("#" + campo).value = result[campo]
        }
    }
}
cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "")
    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
        .then(response => {
            response.json()
            .then(data => showData(data))
        })
        .catch(e => console.log('Deu Erro: ' + e, message))
})
