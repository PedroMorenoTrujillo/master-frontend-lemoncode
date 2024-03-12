import type { TodoItem } from "~/types";

export const useTaskList = defineStore(
  "taskList",
  () => {
    const taskList = ref<TodoItem[]>([{
      taskId: Date.now().toString(),
      task: "Learn Nuxt 3",
      completed: false,
    }]);

    const getTaskList = () => {
      return taskList.value;
    }
    const addTask = (task: string) => {
      taskList.value.push({
        taskId: Date.now().toString(),
        task,
        completed: false,
      });
    };

    const removeTask = (taskId: string) => {
      taskList.value = taskList.value.filter((task) => task.taskId !== taskId);
    }

    const changeTaskStatus = (taskId: string) => {
      taskList.value = taskList.value.map((task) => {
        if (task.taskId === taskId) {
          task.completed = !task.completed;
        }
        return task;
      });
    }
    return {
        taskList,
        getTaskList,
        addTask,
        removeTask,
        changeTaskStatus
    };
  },
  { persist: true }
);
