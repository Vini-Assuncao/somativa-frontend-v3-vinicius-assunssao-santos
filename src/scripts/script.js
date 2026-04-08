// Boas-vindas Literárias

const data = new Date()
const hora = data.getHours()
const saudacaoParagrafo = document.querySelector("#saudacao-livraria")

if (hora < 12) {
    saudacaoParagrafo.textContent = "Boa leitura matinal!"
}
else if (hora <= 18) {
    saudacaoParagrafo.textContent = "Aproveite a tarde para ler!"
}
else {
    saudacaoParagrafo.textContent = "Uma boa história antes de dormir?"
}


// Tema de leitura

const bannerCultura = document.querySelector("#banner-cultura")

bannerCultura.addEventListener("mouseover", () => {
    bannerCultura.classList.add("tema-sepia")
})

bannerCultura.addEventListener("mouseout", () => {
    bannerCultura.classList.remove("tema-sepia")
})


// Calculadora de coleção

const inputQtdLivros = document.querySelector("#qtd-livros")
const totalPreco = document.querySelector("#total-pagar")

inputQtdLivros.addEventListener("input", () => {
    totalPreco.textContent = (Number(inputQtdLivros.value)*42).toFixed(2)
})


// Lista de desejos

const botaoLista = document.querySelector("#btn-lista")
const inputLista = document.querySelector("#nome-livro")
const divLista = document.querySelector("#lista-leitura")

botaoLista.addEventListener("click", () => {
    if (inputLista.value == "") {
        console.warn("Digite um valor válido!")
    }
    else {
        divLista.innerHTML += `<article class="card-leitura"><h3>📖 Título: ${inputLista.value}</h3></article`
    }
})


// Arquivar lista

const botaoLimparLista = document.querySelector("#btn-limpar")

botaoLimparLista.addEventListener("click", () => {
    divLista.innerHTML = ""
    window.alert("Sua lista foi arquivada com sucesso!")
    inputLista.focus()
})