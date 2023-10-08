import { nanoid } from "nanoid";

export const createObjectTodo = (data) => {
  return {
    payload: {
      ...data,
      id: nanoid(),
      completed: false,
    },
  };
};
