//Pegar ps elementos a serem mudados (as perguntas)
let perguntas = document.querySelectorAll('.pergunta')



//adicionar click
perguntas.forEach(li => {
    li.addEventListener('click', function(){

        const ativo = li.classList.contains('ativa')

        perguntas.forEach(pergunta =>
            pergunta.classList.remove('ativa'))
       //verificar se esta ou nao ativo 
        if(!ativo){
            li.classList.add('ativa')
        } else {
            li.classList.remove('ativa')
        }
    })
});