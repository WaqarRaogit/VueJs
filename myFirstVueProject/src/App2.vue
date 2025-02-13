<script setup>
import { ref, onMounted } from 'vue';

       const tasks = ref(["object1", "object2", "object3"]);

      const newTask = ref('bb');

      const addTask = () => {
          if(newTask.value.trim() !== ''){
             tasks.value.push(newTask.value);
             newTask.value = '';
          }
      }
      const deleteTask = (index) => {
        tasks.value.splice(index, 1)
      }

      onMounted(async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            tasks.value = data.slice(0, 10).map((task, index) => `Task ${index + 1}: ${task.title}`);
          } catch (error) {
            console.log(error);
            
          }
      })

</script>

<template>

    <form @submit.prevent="addTask">
      <label for="newTask">Add Tasks</label>
      <input type="text" id="newTask" name="newTask" v-model="newTask">
      <button type="submit">submit</button>
      
    </form>

    <ul>
      <li v-for="(task, index) in tasks" :key="task">
        <span>
          {{task}}
        </span>
        <button @click="deleteTask(index)">x</button>
      </li>
    </ul>
</template>