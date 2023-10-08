import { useState } from "react";

const FormCreateTodo = ({ createTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = ({ target: { value, name } }) => {
    if (name === "title") setTitle(value);
    else setDescription(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return setIsValid(false);

    createTodo({ title, description, isValid });

    setTitle("");
    setDescription("");
    setIsValid(true);
  };

  return (
    <form className="mb-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputTodo" className="form-label">
          Todo title
        </label>
        <input
          name="title"
          type="text"
          onChange={handleChange}
          className={`form-control ${!isValid && "is-invalid"}`}
          id="exampleInputTodo"
          value={title}
        />
        <div className="invalid-feedback">Please input title.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputTodoDescription" className="form-label">
          Todo Description
        </label>
        <input
          name="description"
          type="text"
          onChange={handleChange}
          className={`form-control ${!isValid && "is-invalid"}`}
          id="exampleInputTodoDescription"
          value={description}
        />
        <div className="invalid-feedback">Please input description.</div>
      </div>
      <button type="submit" className="btn btn-primary">
        Create todo
      </button>
    </form>
  );
};

export default FormCreateTodo;
