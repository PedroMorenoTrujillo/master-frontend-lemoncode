<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input
        class="form-control"
        type="text"
        placeholder="Task..."
        aria-label="Task"
        v-model="task"
      />
      <button type="submit" class="btn btn-primary btn-sm">Add Task</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useTaskList } from "../composables/task-store";
import type { TodoItem } from "~/types";
const { addTask } = useTaskList();
let task = ref("");

const onSubmit = () => {
  addTask(task.value);
  task.value = "";
};
</script>

