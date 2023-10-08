import { Component } from "react";

export class Todo extends Component {
  render() {
    const {
      todo: { id, title, completed },
      handleCheck,
      handleDelete,
    } = this.props;
    return (
      <li className="list-group-item d-flex justify-content-between">
        <h5>title:{title}</h5>
        <div className="d-flex">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id={id}
              checked={completed}
              onChange={() => handleCheck(id)}
            />
            <label className="form-check-label" htmlFor={id}>
              completed
            </label>
          </div>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={() => handleDelete(id)}
          ></button>
        </div>
      </li>
    );
  }
}

export default Todo;
