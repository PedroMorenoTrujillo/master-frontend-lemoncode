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
      <button class="item-container__actions__button" @click="removeItem">
        Delete
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TodoItem } from "~/types";

const props = defineProps<{
  item: TodoItem;
}>();

const { removeTask, changeTaskStatus } = useTaskList();

const removeItem = () => {
  removeTask(props.item.taskId);
};

const onCheck = () => {
  changeTaskStatus(props.item.taskId);
};
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
      background-color: red;
      color: white;
      font-size: 1rem;
      border: none;
      cursor: pointer;
      &:hover {
        background-color: darkred;
      }
    }
  }
}
</style>
