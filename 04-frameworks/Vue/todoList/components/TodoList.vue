import { ItemList } from '../.nuxt/components';
<template>
  <div>
    <div v-if="todoList.length > 0">
      <h3>List</h3>
      <ItemList v-for="item in todoList" :key="item.taskId" :item="item" />
    </div>
    <div v-else>No tasks</div>
  </div>
</template>

<script setup lang="ts">
import { useTaskList } from "../composables/task-store";
import type { TodoItem } from "~/types";
const { getTaskList } = useTaskList();
let todoList: TodoItem[] = ref([]);

const list = computed(() => (todoList = getTaskList() || []));
</script>
