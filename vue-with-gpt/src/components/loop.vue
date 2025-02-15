<script setup>
import { ref } from 'vue';

const tasks = ref([]);
const newTask = ref('');

const addTask = () => {
    if (newTask.value.trim() !== '') {
        tasks.value.push({ text: newTask.value, completed: false });
        newTask.value = '';
    }
};

const removeTask = (index) => {
    tasks.value.splice(index, 1);
};

const toggleComplete = (index) => {
    tasks.value[index].completed = !tasks.value[index].completed;
};
</script>

<template>
    <div class="todo-container">
        <h1>🔥 My To-Do List</h1>
        
        <div class="input-container">
            <input type="text" placeholder="Enter your task..." v-model="newTask" />
            <button @click="addTask">Add</button>
        </div>

        <ul>
            <li 
                v-for="(task, index) in tasks" 
                :key="index" 
                :class="{ completed: task.completed }"
            >
                {{ task.text }}
                <div class="buttons">
                    <button @click="toggleComplete(index)" class="complete-btn">
                        {{ task.completed ? "Undo" : "Complete" }}
                    </button>
                    <button @click="removeTask(index)" class="delete-btn">Delete</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<style scoped>
/* Main Container */
.todo-container {
    width: 400px;
    margin: 50px auto;
    background: #f8f9fa;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    text-align: center;
}

/* Heading */
h1 {
    font-size: 22px;
    color: #333;
    margin-bottom: 15px;
}

/* Input Field */
.input-container {
    display: flex;
    gap: 10px;
    margin-bottom: 15px;
}

input {
    flex: 1;
    padding: 10px;
    border: 2px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
}

button {
    padding: 10px 15px;
    background: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: 0.3s;
}

button:hover {
    background: #218838;
}

/* Task List */
ul {
    list-style: none;
    padding: 0;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background: white;
    margin: 5px 0;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: 0.3s;
}

/* Completed Task (Only Affects Clicked Task) */
.completed {
    text-decoration: line-through;
    color: #d9534f;
    background: #fff3f3;
}

/* Buttons */
.buttons {
    display: flex;
    gap: 5px;
}

.complete-btn {
    background: #007bff;
}

.complete-btn:hover {
    background: #0056b3;
}

.delete-btn {
    background: #dc3545;
}

.delete-btn:hover {
    background: #c82333;
}
</style>