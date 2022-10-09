<template>
  <v-container class="fill-height" fluid>
    <AddTodoDialog />
    <TodoDetailsDialog />

    <v-col>
      <v-row>
        <span align="left" v-if="isMobile()"> <AddTodoBtn /> </span>
      </v-row>
      <v-row>
        <FilterTodos align="center" class="mt-2" v-if="isMobile()" />
      </v-row>
    </v-col>

    <v-row align="center" justify="center" v-if="!isMobile()">

      <span class="ml-3"> <AddTodoBtn /> </span>
    </v-row>

    <v-container class="my-3">
      <div align="right" v-if="!isMobile()">
        <FilterTodos />
      </div>
      <v-layout row wrap>
        <!-- eslint-disable-next-line no-unused-vars -->
        <Todo
          v-for="(todo, index) in todosToShow"
          :key="todo.id"
          :todo="todo"
          :index="index"
        />
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import Todo from "./Todo";
import AddTodoBtn from "./AddTodoBtn";
import AddTodoDialog from "./AddTodoDialog";
import TodoDetailsDialog from "./TodoDetailsDialog";
import FilterTodos from "./FilterTodos";
export default {
  name: "TodosGrid",
  computed: {
    todosToShow() {
      let allTodos = this.$store.getters.allTodos;

      let priorityFilter = this.$store.getters.getPriorityFilter;
      if (priorityFilter == 0) {
        return allTodos;
      } else {
        let l = allTodos.length;
        let filteredTodos = [];
        for (let i = 0; i < l; i++) {
          let currTodo = allTodos[i];
          if (currTodo.priority == priorityFilter) {
            currTodo["index"] = i;
            filteredTodos.push(currTodo);
          }
        }
        return filteredTodos;
      }
    },
  },
  components: {
    Todo,
    AddTodoBtn,
    AddTodoDialog,
    TodoDetailsDialog,
    FilterTodos,
  },
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped>
.addTodoBtn {
  position: absolute;
  bottom: 0px;
  right: 0px;
}

.legend {
  text-align: right;
}

.priority_legend {
  font-size: 45px;
}
</style>
