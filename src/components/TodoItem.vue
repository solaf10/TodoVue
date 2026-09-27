<template>
  <tr scope="row" :class="{ completed: isCompleted }">
    <td data-label="#">{{ id }}</td>
    <td data-label="Task">{{ name }}</td>
    <td data-label="From">{{ from }}</td>
    <td data-label="To">{{ to }}</td>

    <td data-label="Actions">
      <div class="actions">
        <button class="edit">
          <input
            type="checkbox"
            :checked="isCompleted"
            @change="emits('changeStatus', index, $event.target.checked)"
          />
        </button>

        <button class="delete" @click="emits('deleteTask', index)">
          <Trash size="16px" />
        </button>
      </div>
    </td>
  </tr>
</template>

<script setup>
import { Trash } from '@lucide/vue'

defineProps({
  id: {
    type: Number,
  },
  index: {
    type: Number,
  },
  name: {
    type: String,
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  isCompleted: {
    type: Boolean,
  },
})

const emits = defineEmits(['deleteTask', 'changeStatus'])
</script>
<style scoped>
tr img {
  width: 56px;
  height: 60px;
  border-radius: 8px;
}
tr.completed {
  background-color: #f1f7f2;
}

tr.completed td {
  color: #7a8b7d;
}

tr.completed td[data-label='Task'] {
  text-decoration: line-through;
  text-decoration-thickness: 1.5px;
  text-decoration-color: #7a8b7d;
}
td .actions {
  display: flex;
  justify-content: center;
}
td button {
  padding: 9px 16px;
  border-radius: 20px;
  border: 0.6px solid #d5d5d5;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
td button.edit {
  border-right: none;
  border-radius: 8px 0px 0px 8px;
  accent-color: #014a5b;
}
td button.delete {
  border-radius: 0px 8px 8px 0px;
  color: #ef3c2a;
}
td button img {
  width: 15px;
  height: 15px;
  transition: 0.5s;
}
td button:hover img {
  transform: scale(1.1);
}
</style>
