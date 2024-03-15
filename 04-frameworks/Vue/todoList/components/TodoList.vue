<template>
  <div class="list-container">
    <div v-if="todoList.length > 0">
      <span class="list-container__title">List</span>
      <ul class="list-container__list">
        <li
          class="list-container__list__item"
          v-for="item in todoList"
          :key="item.taskId"
        >
          <ItemList :item="item" />
        </li>
      </ul>
    </div>
    <div v-else class="list-container__title--no-tasks">No tasks</div>
  </div>
</template>

<script setup lang="ts">
const { getTaskList } = useTaskList();
let todoList = computed(() => getTaskList());
</script>

<style scoped lang="scss">
.list-container {
  margin: 0 auto;
  border-radius: 0.5rem;
  background-color: lightgrey;
  padding: 1rem 3rem;
  width: max-content;
  &__title {
    font-size: 1.8rem;
    display: block;
    margin-bottom: 1rem;
    text-align: left;
    &--no-tasks {
      font-size: 1.4rem;
      color: red;
    }
  }
  &__list {
    padding-left: 0;
    &__item {
      padding: 0.8rem 1rem;
      padding-left: 0;
    }
  }
}
</style>
