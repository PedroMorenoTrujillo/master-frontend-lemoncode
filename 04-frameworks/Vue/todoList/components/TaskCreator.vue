<template>
  <div class="task-creator">
    <span class="task-creator__label">Add task to the TODO List</span>
    <form @submit.prevent="onSubmit" class="task-creator__form">
      <input
        class="task-creator__form__input"
        type="text"
        placeholder="Task..."
        aria-label="Task"
        v-model="task"
      />
      <button type="submit" class="task-creator__form__button">Add Task</button>
    </form>
  </div>
</template>

<script setup lang="ts">
const { addTask } = useTaskList();
let task = ref("");
const onSubmit = () => {
  addTask(task.value);
  task.value = "";
};
</script>

<style scoped lang="scss">
.task-creator {
  margin: 0 auto;
  border-radius: 0.5rem;
  background-color: lightgray;
  padding: 1rem;
  width: max-content;
  &__label {
    font-size: 1.2rem;
  }
  &__form {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    &__input {
      height: 2rem;
      border-radius: 0.5rem;
      border: none;
    }
    &__button {
      margin-left: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      background-color: peru;
      color: white;
      font-size: 1rem;
      border: none;
      &:hover {
        background-color: darkorange;
      }
    }
  }
}
</style>
