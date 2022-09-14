<script setup lang="ts">

const {data: todos, refresh} = useAsyncData("todo", () => {
  return $fetch("api/todo");
})

const input = ref("")

const addToDo = async () => {
  if(!input) return;
  await $fetch("/api/todo", {method: "POST", body: { item: input.value }});
  refresh()
};
const updateTodo = async (id) => {
  await $fetch(`/api/todo/${id}`, {method: "PUT", });
  refresh()
}

const deleteTodo = async (id) => {
  await $fetch(`/api/todo/${id}`, {method: "DELETE", });
  refresh()
}
</script>

<template>
  <div class="container">
    <NCard class="cards">
     <h1>My To-Dos</h1>
      <div class="add-todo">
        <input type="text" placeholder="Add a new to-do" v-model="input"  />
        <NButton @click="addToDo">Add</NButton>
      </div>

      <NCard
              @click="() => updateTodo(todo.id)"
              class="card"
             v-for="todo in todos"
             :key="todo.id">
        <h4 :class="todo.completed ? 'complete' : null">{{ todo.item }}</h4>
        <p
            @click="() => deleteTodo(todo.id)"
        >x</p>
      </NCard>

    </NCard>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem;
  margin: 0 auto;
  max-width: 50%;
}
.cards {
  padding: 2rem;
}
.add-todo {
  display: flex;
  justify-content: space-between;
}
input {
  outline: none;
}
.card {
  padding: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
}
.complete {
  text-decoration: line-through;
}
</style>
