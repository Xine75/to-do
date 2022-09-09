<script setup lang="ts">
const {data} = useFetch("/api/todo")

</script>

<template>
  <div>
    <h1> {{ data}}</h1>
  </div>
</template>
