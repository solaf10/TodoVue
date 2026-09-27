<script setup>
import todoFn from '@/mixins/todolist'
import { ArrowLeft } from '@lucide/vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const { addTodo } = todoFn()
const task = ref({ id: null, name: '', from: '', to: '', isCompleted: false })
const handleSubmit = () => {
  addTodo(task.value)
  task.value = { id: null, name: '', from: '', to: '', isCompleted: false }
}
</script>

<template>
  <div class="control-tasks">
    <div class="title">
      <h1>Add Task</h1>
      <button @click="router.go(-1)">
        <span><ArrowLeft size="16px" /></span>
        <span style="margin-left: 8px">Back</span>
      </button>
    </div>
    <form @submit.prevent="handleSubmit">
      <div class="name">
        <label htmlFor="task-name">Task Name</label>
        <input type="text" id="task-name" placeholder="Task Name" required v-model="task.name" />
      </div>
      <div class="from">
        <label htmlFor="from">From</label>
        <input type="date" id="from" placeholder="From" required v-model="task.from" />
      </div>
      <div class="to">
        <label htmlFor="to">To</label>
        <input type="date" id="to" placeholder="To" :min="task.from" required v-model="task.to" />
      </div>
      <input className="btn" type="submit" value="Add" />
    </form>
  </div>
</template>
<style scoped>
.control-tasks .title {
  gap: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    color: var(--primary-color);
    border: 1px solid var(--primary-color);
    background-color: transparent;
    align-items: center;
    height: 34px;
    border-radius: 7px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    cursor: pointer !important;
  }
  h1 {
    margin-bottom: 41px;
    font-weight: 700;
    font-size: 28px;
    position: relative;
  }
}
.control-tasks h1::before,
.control-tasks h1::after {
  content: '';
  height: 3px;
  position: absolute;
  bottom: -10px;
  left: 0;
}
.control-tasks h1::before {
  background-color: white;
  width: 120px;
}
.control-tasks h1::after {
  background-color: black;
  width: 40px;
}
.control-tasks .holder {
  display: flex;
  justify-content: space-between;
  gap: 6.8vw;
  /* flex-wrap: wrap; */
}
.control-tasks form {
  /* width: 505px; */
  width: 50%;
}
.control-tasks form > div {
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.control-tasks label {
  font-weight: 600;
  font-size: 14px;
  letter-spacing: -0.06px;
}
.control-tasks form input:not(.btn) {
  padding: 13px 19px;
  border-radius: 6px;
  border: 1px solid #d8d8d8;
  caret-color: var(--primary-color);
}
.control-tasks form input::placeholder {
  color: #a6a6a6;
}
.control-tasks form input:focus {
  outline: none;
}
.control-tasks .product-image {
  position: relative;
  /* width: 475px; */
  width: 50%;
  height: 218px;
}
.control-tasks .product-image input {
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0;
  cursor: pointer;
}
.control-tasks .product-image .upload {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed #4880ff4d;
}
.control-tasks .product-image .upload img {
  width: 123px;
  height: 113px;
}
.control-tasks .loader-container {
  height: calc(100vh - 80px);
}
@media (max-width: 991px) {
  .control-tasks .holder {
    flex-wrap: wrap-reverse;
    gap: 40px;
  }
  .control-tasks .holder form,
  .control-tasks .holder .product-image {
    width: 100%;
  }
}
</style>
