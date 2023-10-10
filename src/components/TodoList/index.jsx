import { useState } from 'react';
import { Todo } from '../Todo';
import FormCreateTodo from '../Forms/FormCreateTodo';
import FormFilterTodo from '../Forms/FormFilterTodo';
import { useSelector, useDispatch } from 'react-redux';
import {
  createTodoAction,
  deleteTodo,
  updateTodo,
} from '../../store/todo/slice';
import { getAllProducts } from 'store/products/slice';

const TodoList = () => {
  const { todo } = useSelector(store => store.todo);

  const dispatch = useDispatch();

  const [filteredTodo, setFilteredTodo] = useState(null);

  const handleDelete = id => {
    dispatch(deleteTodo(id));
  };

  const createTodo = dataByForm => {
    dispatch(createTodoAction(dataByForm));
  };

  const filterTodo = filterQuery => {
    setFilteredTodo(
      todo.filter(el =>
        el.title.toLowerCase().includes(filterQuery.toLowerCase())
      )
    );
  };

  const handleCheck = id => {
    dispatch(updateTodo(id));
  };
  const handleClick = second => {
    dispatch(getAllProducts());
  };
  return (
    <div className="container">
      <button onClick={handleClick}>thunk</button>
      <FormCreateTodo createTodo={createTodo} />
      <FormFilterTodo filterTodo={filterTodo} />
      {todo && (
        <ul className="list-group">
          {(filteredTodo ?? todo).map(el => (
            <Todo
              todo={el}
              key={el.id}
              handleDelete={handleDelete}
              handleCheck={handleCheck}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
