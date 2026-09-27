import { ref, watch } from 'vue'
import { useToast } from 'vue-toastification'

const getTodos = () => {
  return JSON.parse(localStorage.getItem('todoList')) || []
}

const todoList = ref(getTodos())

watch(
  todoList,
  (newVal) => {
    localStorage.setItem('todoList', JSON.stringify(newVal))
  },
  { deep: true },
)

const todoFn = () => {
  const toast = useToast()

  const addTodo = (todo) => {
    todo.id = todoList.value.length + 1
    todoList.value.push(todo)
    toast.success('Task has been added successfully!')
  }

  return { todoList, addTodo, getTodos }
}

export default todoFn
