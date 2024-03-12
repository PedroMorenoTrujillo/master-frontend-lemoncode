import { TodoItem } from "../.nuxt/types/item.model";

<template>
    <div>
        <span>{{ item.task }}</span>
        <input type="checkbox" v-model="item.completed" @input="onCheck"> Completed
        <button @click="removeItem">Delete</button>
    </div>
</template>

<script setup lang="ts">
import type { TodoItem } from "~/types";
const props = defineProps<{
    item: TodoItem
}>();

const { removeTask, updateTask } = useTodoList();

const removeItem = () => {
    removeTask(props.item.taskId);
};

const onCheck = () => {
    updateTask(props.item);
};

</script>