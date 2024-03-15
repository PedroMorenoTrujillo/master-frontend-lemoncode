import type { TodoItem } from "~/types";

export const useTaskList = defineStore(
  "taskList",
  () => {
    const taskList = ref<TodoItem[]>([]);

    const getTaskList = () => {
      return taskList.value;
    };
    
    const addTask = (task: string) => {
      taskList.value.push({
        taskId: Date.now().toString(),
        task,
        completed: false,
      });
    };

    const removeTask = (taskId: string) => {
      taskList.value = taskList.value.filter((task) => task.taskId !== taskId);
    };

    const changeTaskStatus = (taskId: string) => {
      taskList.value = taskList.value.map((task) => {
        if (task.taskId === taskId) {
          task.completed = !task.completed;
        }
        return task;
      });
    };

    const changeTaskName = (task: TodoItem) => {
      taskList.value = taskList.value.map((t) => {
        if (t.taskId === task.taskId) {
          t.task = task.task;
        }
        return t;
      });
    };
    return {
      taskList,
      getTaskList,
      addTask,
      removeTask,
      changeTaskStatus,
      changeTaskName
    };
  },
  { persist: true }
);
