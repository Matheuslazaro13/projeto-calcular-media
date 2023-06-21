const form = document.getElementById('form-atividade')
const imgAprovado = '<img src="images/aprovado.png" alt="Emoji feliz"/>'
const imgReprovado = '<img src="images/reprovado.png" alt="Emoji triste"/>'
const atividades = []
const notas = []
let linhas = ''
const spanAprovado = '<span class = "resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class = "resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt('digitie a nota minima'))

form.addEventListener('submit', function(e){
    e.preventDefault()
    
    adicionaLinha()
    atualizaTabela()
    atualizaMedia()
})

function adicionaLinha(){
    const nomeDaAtividade = document.getElementById('nome-da-atividade')
    const notaDaAtividade = document.getElementById('nota-da-atividade')

    
    if(atividades.includes(nomeDaAtividade.value)){
        alert(`a atividade: ${nomeDaAtividade.value} ja foi listada anteriormente`)
    }else{
        atividades.push(nomeDaAtividade.value)
        notas.push(parseFloat(notaDaAtividade.value))
        let linha = `<tr>`
        linha += `<td>${nomeDaAtividade.value}</td>`
        linha += `<td>${notaDaAtividade.value}</td>`
        linha += `<td>${notaDaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`
        linha += `</td>`
        linhas += linha
        

    }

    
}

function atualizaTabela() { 
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMedia(){
   const mediaFinal = calcularMediaFinal()
   document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2)
   document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado
    
}


function calcularMediaFinal(){
    let somar = 0

    for (let index = 0; index < notas.length; index++) {
         somar += notas[index];
        
    }
    
    return media = somar / notas.length
}