<template>
  <div class="main-container">
    <TopHeader />
    <div class="main-container__content">
      <TaskCreator />
    </div>
    <div class="main-container__list">
      <TodoList />
    </div>
  </div>
</template>


<style scoped lang="scss">
.main-container {
  &__content {
    margin: 2rem 0;
  }
}
</style>
