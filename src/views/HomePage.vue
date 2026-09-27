<template>
  <div class="show-products content">
    <header>
      <p>Manage Products</p>
      <router-link to="/add" class="btn">+ Add product</router-link>
    </header>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Task</th>
          <th>From</th>
          <th>To</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <TodoItem
          v-for="(todo, i) in todoList"
          :key="todo.id"
          :id="todo.id"
          :index="i"
          :from="new Date(todo.from).toLocaleDateString()"
          :to="new Date(todo.to).toLocaleDateString()"
          :name="todo.name"
          :is-completed="todo.isCompleted"
          @delete-task="deleteTask"
          @change-status="changeStatus"
        />
      </tbody>
    </table>
  </div>
</template>
<script setup>
import TodoItem from '@/components/TodoItem.vue'
import todoFn from '@/mixins/todolist'

const { todoList } = todoFn()
const deleteTask = (index) => {
  todoList.value.splice(index, 1)
}
const changeStatus = (index, status) => {
  todoList.value[index].isCompleted = status
}
</script>
<style>
header {
  margin-bottom: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  p {
    /* margin-bottom: 10px; for responsive*/
    font-weight: 700;
    font-size: 28px;
  }
  .btn {
    text-decoration: none;
  }
}
table {
  width: 100%;
  border-radius: 8px;
  border: 0.6px solid #d5d5d5;
  background-color: white;
  border-collapse: collapse;
  thead tr {
    border-bottom: 0.6px solid #d5d5d5;
  }
  tbody tr:not(:last-of-type) {
    border-bottom: 0.4px solid #979797;
  }
  tbody tr td,
  thead tr th {
    text-align: center;
    padding: 30px;
  }
}

/* Responsive styles */
@media (max-width: 768px) {
  .content table {
    border: none;
    background-color: transparent;
    thead {
      display: none;
    }
    tbody tr {
      display: block;
      margin-bottom: 30px;
      td {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        border: 1px solid #d5d5d5;
      }
      td::before {
        content: attr(data-label);
        font-weight: bold;
        margin-right: 10px;
      }
    }
  }
}
</style>
