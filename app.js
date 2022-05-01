const todoContent = document.querySelector('form input[type=text]')
const todoButton = document.querySelector('form button[type=submit]')
const todoList = document.querySelector('#todo-list')

/**
 * Adiciona uma nova taerefa
 */
todoButton.addEventListener('click', event => {
  event.preventDefault()

  // Pega o conteúdo a ser adicionado a lista
  const content = todoContent.value

  // Não há nada a ser adicionado
  if (content.length === 0) {
    return
  }

  const newTask = document.createElement('li')
  const status = document.createElement('input')
  const label = document.createElement('label')

  status.setAttribute('type', 'checkbox')
  label.textContent = content

  newTask.appendChild(status)
  newTask.appendChild(label)
  todoList.appendChild(newTask)
})
