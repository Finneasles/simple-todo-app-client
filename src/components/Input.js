import React, { Component } from "react";
import axios from "axios";

class Input extends Component {
  state = {
    action: "",
  };
  addTodo = () => {
    const task = { action: this.state.action };
    if (task.action && task.action.length > 0) {
      axios
        .post("/api/todos", task) //This is where proxy helps
        .then((res) => {
          if (res.data) {
            this.props.getTodos();
            this.setState({ action: "" });
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log("Input field is required");
    }
  };

  GetAll = () => {
    axios
      .get("/api/todos") //This is where proxy helps
      .then((res) => {
        if (res.data) {
          this.props.getTodos();
          this.setState({ action: "" });
        }
      })
      .catch((err) => console.log(err));
  };

  handleChange = (e) => {
    this.setState({
      action: e.target.value,
    });
  };

  render() {
    let { action } = this.state;
    let i = 0;
    if( i === 0 )(
      axios
      .post("/api/todos") //This is where proxy helps
      .then((res) => {
        if (res.data) {
          this.props.getTodos();
        }
      })
      .catch((err) => console.log(err))
    );

    return (
      <div>
        <input type="text" onChange={this.handleChange} value={action} />
        <button onClick={this.addTodo}>Add Entry</button>
      </div>
    );
  }
}
export default Input;
