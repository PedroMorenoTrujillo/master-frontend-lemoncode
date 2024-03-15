<template>
  <div class="item-container">
    <span class="item-container__name">{{ item.task }}</span>
    <div class="item-container__actions">
      <div class="item-container__actions__status">
        <span class="item-container__actions__status__text">{{
          item.completed ? "Completed" : "Not Completed"
        }}</span>
        <input
          class="item-container__actions__status__checkbox"
          type="checkbox"
          v-model="item.completed"
          @input="onCheck"
        />
      </div>
      <button class="item-container__actions__button" @click="updateName">
        Edit
      </button>
      <button
        class="item-container__actions__button delete"
        @click="removeItem"
      >
        Delete
      </button>
    </div>
  </div>
  <div v-if="editingName" class="item-container__task-editor">
    <form @submit.prevent="changeName" class="item-container__task-editor__form">
      <input
        class="item-container__task-editor__form__input"
        type="text"
        placeholder="Task..."
        aria-label="Task"
        v-model="renameTask"
      />
      <button type="submit" class="item-container__task-editor__form__button">Rename Task</button>
      <button @click="cancelEdition" class="item-container__task-editor__form__button cancel">Cancel Task</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import type { TodoItem } from "~/types";

const props = defineProps<{
  item: TodoItem;
}>();

const editingName = ref(false);
const renameTask = ref("");

const { removeTask, changeTaskStatus, changeTaskName } = useTaskList();

const removeItem = () => {
  removeTask(props.item.taskId);
};

const onCheck = () => {
  changeTaskStatus(props.item.taskId);
};

const updateName = () => {
  editingName.value = true;
};

const changeName = () => {
  changeTaskName({ ...props.item, task: renameTask.value });
  editingName.value = false;
};

const cancelEdition = () => {
  editingName.value = false;
  renameTask.value = ""
}
</script>

<style scoped lang="scss">
.item-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
  &__name {
    font-size: 1.4rem;
    font-weight: bold;
    text-transform: capitalize;
    min-width: 7rem;
    text-align: left;
  }
  &__actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    &__status {
      display: flex;
      align-items: center;
      &__checkbox {
        margin-left: 0.5rem;
      }
      &__text {
        font-size: 1.1rem;
      }
    }
    &__button {
      margin-left: 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      background-color: lightgreen;
      color: white;
      font-size: 1rem;
      border: none;
      cursor: pointer;
      &:hover {
        background-color: darkgreen;
      }
      &.delete {
        background-color: red;
        &:hover {
          background-color: darkred;
        }
      }
    }
  }
  &__task-editor {
    text-align: left;
    margin-top: 1rem;
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
        &.cancel {
          background-color: red;
        }
      }
    }
  }
}
</style>
