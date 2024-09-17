document.getElementById('bt_tarefa').addEventListener('click', addTarefa)


function addTarefa(){
     //pegar o valor de dentro do input e armanezar em uma variavel
     const inputTarefa = document.getElementById('input_tarefa').value

     //verificar o input e dar um alerta se estiver vazio
     if(!inputTarefa){
        alert('o input esta vazio')
     }
     //criar um elemento(li)
     const elemento_tarefa = document.createElement('li')
     elemento_tarefa.className = 'item_tarefa'

     //adicionar o texto do input no novo <li>
     const conteudoTarefa = document.createElement('p')
     conteudoTarefa.textContent = inputTarefa

     //adicionar um botão para deletar tarefa no novo <li>
     const botaoDeletar = document.createElement('button')
     botaoDeletar.textContent = 'Deletar Tarefa'
     botaoDeletar.addEventListener('click', () =>{
        elemento_tarefa.remove()
     })

     //adicionar um botão para completar a tarefa no <li>
     const botaoCompletar = document.createElement('button')
     botaoCompletar.textContent = 'Completar Tarefa'
     botaoCompletar.addEventListener('click', ()=>{
        conteudoTarefa.classList.toggle('completada')
     })

     //adicionar o novo elemento <li> a tag <ul>
     elemento_tarefa.appendChild(conteudoTarefa)
     elemento_tarefa.appendChild(botaoDeletar)
     elemento_tarefa.appendChild(botaoCompletar)
     document.getElementById('lista_tarefa').appendChild(elemento_tarefa)
}


//inicializar uma lista vazia

//verificar se existe uma lista no local storage

//fazer um laço for para cada tarefa, chamar a func addTarefa

//quando add uma tarefa, add no local storage também

// quando remover uma tarefa. remover do local storage também
function addTarefa(){

}