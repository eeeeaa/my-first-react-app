/**
 * Older React codebase (before hook like useState, etc. exist)
 * would use class-based components instead of function
 * because it used to be that function component are stateless before hooks were introduced.
 *
 */

import { Component } from "react";
import "../styles/legacyExample.css";
import PropTypes from "prop-types";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editText: this.props.todo.text,
    };

    this.onChangeEditText = this.onChangeEditText.bind(this);
  }

  onChangeEditText(e) {
    this.setState((state) => ({
      ...state,
      editText: e.target.value,
    }));
  }

  render() {
    if (this.props.todo.isEdit) {
      return (
        <li>
          <div className="todo-item">
            <form
              onSubmit={(e) => {
                this.props.handleResubmit(
                  e,
                  this.props.todo,
                  this.state.editText
                );
              }}
            >
              <label htmlFor="edit-text">Text:</label>
              <input
                type="text"
                name="edit-text"
                id="edit-text"
                value={this.state.editText}
                onChange={this.onChangeEditText}
                className="todo-text"
              />
              <button type="submit">Resubmit</button>
            </form>
          </div>
        </li>
      );
    } else {
      return (
        <li>
          <div className="todo-item">
            <div className="todo-text">{this.props.todo.text}</div>
            <button
              type="button"
              onClick={() => {
                this.props.handleDelete(this.props.todo);
              }}
            >
              Delete
            </button>
            <button
              type="button"
              onClick={() => {
                this.props.handleEditToggle(this.props.todo);
              }}
            >
              Edit
            </button>
          </div>
        </li>
      );
    }
  }
}

class InputFrom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <label htmlFor="task-entry">Enter a task: </label>
        <input
          type="text"
          name="task-entry"
          value={this.props.inputVal}
          onChange={this.props.handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

class ClassInput extends Component {
  //pass props into constructor
  constructor(props) {
    super(props);

    //declare state as part of the constructor
    this.state = {
      todos: [],
      inputVal: "",
      count: 0,
    };

    //need to bind `this` of the method to the `this` of the class
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEditToggle = this.handleEditToggle.bind(this);
    this.handleResubmit = this.handleResubmit.bind(this);
  }

  handleInputChange(e) {
    //set state with new obj (just like with hooks)
    this.setState((state) => ({
      ...state,
      inputVal: e.target.value,
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.inputVal.length <= 0) return;
    this.state.todos.push({
      text: this.state.inputVal,
      isEdit: false,
    });
    const newList = new Set(this.state.todos);
    this.setState((state) => ({
      todos: [...newList],
      inputVal: "",
      count: state.todos.length,
    }));
  }

  handleResubmit(e, todo, newText) {
    e.preventDefault();
    if (newText.length <= 0) return;
    const newList = this.state.todos.map((item) => {
      if (item.text === todo.text) {
        return { ...item, text: newText, isEdit: false };
      } else {
        return item;
      }
    });
    this.setState(() => ({
      todos: [...newList],
    }));
  }

  handleEditToggle(todo) {
    const newList = this.state.todos.map((item) => {
      if (item.text === todo.text) {
        return { ...item, isEdit: true };
      } else {
        return item;
      }
    });
    this.setState((state) => ({
      ...state,
      todos: newList,
    }));
  }

  handleDelete(todo) {
    const filterList = this.state.todos.filter(
      (item) => item.text != todo.text
    );
    this.setState((state) => ({
      ...state,
      todos: filterList,
      count: filterList.length,
    }));
  }

  render() {
    return (
      <section className="class-input-container">
        <h1>Class based component</h1>
        <h3>{this.props.name}</h3>
        <InputFrom
          inputVal={this.state.inputVal}
          handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
        <h4>All the tasks! ({this.state.count})</h4>
        <ul>
          {this.state.todos.map((todo) => (
            <TodoItem
              key={todo}
              handleDelete={this.handleDelete}
              todo={todo}
              handleEditToggle={this.handleEditToggle}
              handleResubmit={this.handleResubmit}
            />
          ))}
        </ul>
      </section>
    );
  }
}

TodoItem.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    text: PropTypes.string,
    isEdit: PropTypes.bool,
  }).isRequired,
  handleEditToggle: PropTypes.func.isRequired,
  handleResubmit: PropTypes.func.isRequired,
};

InputFrom.propTypes = {
  inputVal: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

ClassInput.propTypes = {
  name: PropTypes.string,
};

export default ClassInput;
