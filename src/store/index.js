import Vue from "vue";
import Vuex from "vuex";

import { set, del, getAll, add, keys } from "../db.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoDetailsDialog: false,
    addTodoDialog: false,
    editTodo: false,
    currentTodo: {},
    currentTodoIndex: null,
    priorityColorMapping: { 1: "red", 2: "orange", 3: "blue" },
    priorityFilter: 0, // 0 -> All
    todos: [],
  },
  getters: {
    allTodos: (state) => state.todos,
    getTodoDetailsDialogStatus: (state) => state.todoDetailsDialog,
    getAddTodoDialogStatus: (state) => state.addTodoDialog,
    getCurrentTodo: (state) => state.currentTodo,
    getEditTodoStatus: (state) => state.editTodo,
    getPriorityColorMapping: (state) => state.priorityColorMapping,
    getPriorityFilter: (state) => state.priorityFilter,
  },
  mutations: {
    setTodoDetailsDialogStatus: (state, value) =>
      (state.todoDetailsDialog = value),
    setAddTodoDialogStatus: (state, value) => (state.addTodoDialog = value),
    setCurrentTodo: (state, value) => (state.currentTodo = value),
    setCurrentTodoIndex: (state, value) => (state.currentTodoIndex = value),
    setEditTodoStatus: (state, value) => (state.editTodo = value),
    setCurrentTodoBlankDesc: (state) => (state.currentTodo.description = ""),
    commitCurrentTodoToTodoInTodos(state, todo) {
      Object.assign(state.todos[state.currentTodoIndex], todo);
    },
    addTodo(state, todo) {
      state.todos.splice(0, 0, todo);
      state.currentTodo = {};
    },
    setPriorityFilter: (state, value) => (state.priorityFilter = value),
    deleteTodo: (state, id) =>
      (state.todos = state.todos.filter((elem) => elem.id != id)),
    setTodos: (state, value) => (state.todos = value)
  },

  actions: {
    getTodos({ commit }) {
      Promise.all([keys(), getAll()]).then((values) => {
        let keys = values[0];
        let todos = values[1];

        for(let i = 0; i < keys.length; i++) {
          todos[i].id = keys[i];
        }

        commit("setTodos", todos);
      });


    },

    addTodo({ commit }){
      let todo = {
        title: this.state.currentTodo.title,
        description: this.state.currentTodo.description,
        priority: this.state.currentTodo.priority,
      };

      add(todo).then((id) => {
        todo.id = id;
        commit("addTodo", todo);
      });

    },

    changeTodoDetails({ commit }) {
      let todo = {
        title: this.state.currentTodo.title,
        description: this.state.currentTodo.description,
        priority: this.state.currentTodo.priority,
      };

      set(this.state.currentTodo.id, todo).then(() => {
        commit("commitCurrentTodoToTodoInTodos", todo);
      });
    },

    deleteTodo({ commit }) {
      del(this.state.currentTodo.id).then(() => {
        commit("deleteTodo", this.state.currentTodo.id);
      });
    },
  },
  modules: {},
});
