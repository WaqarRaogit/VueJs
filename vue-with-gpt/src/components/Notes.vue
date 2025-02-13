<script>

// const count = ref(10)

// function increment(){
//       count.value++;
// }

// REACTIVE is not preferred for arrays especially for dynamic arrays , one should use ref

// const Todo = reactive([
//   {
//     task : "Day 1 of learning Vue",
//     completed : true
//   },
//   {
//     task : "Learn all the basics and build todo app",
//     completed: true
//   }
// ]);

// const todo = ref([
//   {
//     task : "Day 1 of learning Vue",
//     completed : true
//   },
//   {
//     task : "Learn all the basics and build todo app",
//     completed: true
//   },
//   {
//     task : "Learn",
//     completed: false
//   },
//   {
//     task : "code",
//     completed: false
//   }
// ]);

  // const firstName = ref("Waqar");
  // const lastName = ref("Rao");

  // const fullName = computed(() => `${firstName.value} ${lastName.value}`);


  // watch(count, (newValue, oldValue) => {
  //     console.log(`Count changed from ${oldValue} to ${newValue}`);

  //   });

  //   const user = reactive({
  //     name : "Waqar",
  //      age : "21"
  //   })

    // watch(user, (oldValue, newValue) => {
    //   console.log(`${oldValue.name} is  ${oldValue.age} years old to ${newValue.name} is ${newValue.age} years old journey`);
    //   console.log(`Age:  ${newVal.age}`);
    // }, {deep: true})

    // function changeAge(){
    //     Object.assign(user, {age: "30"})
    // } 

    // const users = ref([]);

    // onMounted(async () => {
    //     const response = await fetch("https://jsonplaceholder.typicode.com/users")
    //     console.log(response);
        
    //     users.value = await response.json();
    // });

    // const timer = ref(0)

    // onMounted(() => {
    //   let interval = setInterval(()=> timer.value++, 1000)
    // })
   

      // onBeforeUnmount(() => {
      //   clearInterval(interval);
      // })
      // onUnmounted(() => {
      //   clearInterval(interval);
      // }) 
      </script>


  <template>
    <h1>
       <!-- count:  {{count}}  -->
    </h1>
    <!-- <button @click="increment">Increment</button>

    <button @click="changeAge">Changing Age</button> -->

    <!-- <h3>tasks : {{refTodo}}</h3> -->

    <!-- <ul>
      <li v-for="todo in todo" :key="todo.task">
          {{todo.task}} ---- {{ todo.completed ? "Completed" : " " }}
      </li>
    </ul> -->

    <!-- <h2>Full Name : {{fullName}}</h2> -->

    <!-- <h4>users: </h4>
    <ul>
      <li v-for="user in users" :key="user.id">
          Name: {{ user.name }} <br>
          Email: {{ user.email }}
          <br>
      <br>
      <br>
      </li>
    </ul> -->

    <!-- <h3>Timer : {{ timer }}</h3> -->

</template>
