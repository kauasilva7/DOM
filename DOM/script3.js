document.getElementById('bt_tarefa').addEventListener('click', addTarefa)

//inicializar uma lista vazia

//verificar se existe uma lista no local storage

//fazer um laço for para cada tarefa, chamar a func addTarefa

//quando add uma tarefa, add no local storage também
// quando remover uma tarefa. remover do local storage também

let listaTarefas = JSON.parse( localStorage.getItem('tarefas'))|| []

listaTarefas.forEach(element => {
   criarElemento(element)
});

function addTarefa(){
   console.log(0)
     //pegar o valor de dentro do input e armanezar em uma variavel
     const inputTarefa = document.getElementById('input_tarefa').value
     console.log(inputTarefa)

     
     //verificar o input e dar um alerta se estiver vazio
     if(!inputTarefa){
        alert('o input esta vazio')
        return
     }
     if(listaTarefas.includes(inputTarefa)){
      alert('nao pode repitir')
      return
   }

     //adiciona tarefa no array de tarefas
     listaTarefas.push(inputTarefa)


     //transforma o array em string e coloca a lista de tarefas no local Storage 
     localStorage.setItem('tarefas', JSON.stringify(listaTarefas))
   
     criarElemento(inputTarefa)

     inputTarefa.textContent()
   
   }
  


   function criarElemento(inputTarefa){
      document.getElementById('input_tarefa').value = ''
      
      {
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
      //remove o elemento tarefa da tela
        elemento_tarefa.remove()
        //filtra a tarefa a ser removida
        listaTarefas = listaTarefas.filter((tarefa) => tarefa !== inputTarefa)
        //salva novamente a lista de tarefas no local-storage
        localStorage.setItem('tarefas', JSON.stringify(listaTarefas))
       
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


     inputTarefa.textContent ()
}
   }
   

