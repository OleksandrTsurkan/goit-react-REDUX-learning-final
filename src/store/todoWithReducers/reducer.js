import { nanoid } from "nanoid";
import { initialState } from "./initialState";
import { createReducer } from "@reduxjs/toolkit";
import { createTodoAction } from "./actions";

export const reducerTodo = createReducer(initialState, {
	[createTodoAction]: (state, { type, payload }) => {
    return {
      ...state,
      todo: state.todo
        ? [
            ...state.todo,
            {
              ...payload,
              id: nanoid(),
              completed: false,
            },
          ]
        : [
            {
              ...payload,
              id: nanoid(),
              completed: false,
            },
          ],
    };
  },
});
