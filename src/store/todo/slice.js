import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { createObjectTodo } from "./helpers";

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodoAction: {
      prepare: createObjectTodo,
      reducer: (state, { payload }) => {
        state.todo ? state.todo.push(payload) : (state.todo = [payload]);
      },
    },
    deleteTodo: (state, { payload }) => {
      state.todo = state.todo.filter((el) => el.id !== payload);
    },
    updateTodo: (state, { payload }) => {
      state.todo = state.todo.map((el) =>
        el.id === payload
          ? {
              ...el,
              completed: !el.completed,
            }
          : el
      );
    },
  },
});
export const todoReducer = todoSlice.reducer;
export const { createTodoAction, deleteTodo, updateTodo } = todoSlice.actions;
