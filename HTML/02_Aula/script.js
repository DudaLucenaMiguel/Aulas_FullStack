const perguntas = 
[
    {
        pergunta: "Em um local de descobertas, onde a luz queima com precisão, quem manipula o poder com olhos de fogo?",
        crimeLocation: "Laboratório de pesquisa",
        weapon: "laser dos olhos",
        supe: "capitão patria"
    },
    {
        pergunta: "Em uma sala de decisões, um brilho oculta guarda um líquido azul que transforma vida, quem é essa estrela?",
        crimeLocation: "sala de conferência",
        weapon: "composto z",
        supe: "Luz Estrela"
    },
    {
        pergunta: "No coração da organização, onde decisões são explosivas, quem se esconde nas sombras com um toque mortal?",
        crimeLocation: "Escritório",
        weapon: "C4",
        supe: "Black-NoIr"
    },
    {
        pergunta: "em meio ao arsenal, onde o poder do dinheiro compra a vitória, quem carrega o peso da riqueza?",
        crimeLocation: "Armazem",
        weapon: "maço de dinheiro",
        supe: "Maeve"
    }
]
    document.addEventListener("DOMContentLoaded", ()=>{
    const perguntaAleatoria = gerarPerguntaAleatoria()
    document.getElementById("pergunta").textContent = perguntaAleatoria.pergunta
})

function gerarPerguntaAleatoria()
{
    const indiceAleatorio = Math.floor(Math.random()*perguntas.length)
    return perguntas[indiceAleatorio]
}

function verificarResposta(){
    const crimeLocationInput = document.getElementById("crimeLocation").value.trim()
    const weaponInput = document.getElementById("weapon").value.trim()
    const supeInput = document.getElementById("supe").value.trim()
    const perguntaAtual = document.getElementById("pergunta").textContent
    const perguntaObjeto = perguntas.find(perg => perg.perguntas === perguntaAtual)

    if(
        crimeLocationInput.toLowerCase() === perguntaObjeto.crimeLocation.toLowerCase() &&  
        weaponInput.toLowerCase() === perguntaObjeto.weapon.toLowerCase() && 
        supeInput.toLowerCase() === perguntaObjeto.supe.toLowerCase()
    ){
        document.getElementById("resultado").textContent = "correto! O culpado é " + perguntaObjeto.supe + "."
    }
    else{
        document.getElementById("resultado").textContent = "errado! O culpado é " + perguntaObjeto.supe + "."
    }
}
