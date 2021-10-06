import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

    state = {
        todos: [
          {
            id: 1,
            title: 'Take out the trash',
            completed: false
          },
          {
            id: 2,
            title: 'Dinner with wife',
            completed: false
          },
          {
            id: 3,
            title: 'Meeting with boss',
            completed: false
          }
        ]
      }

    markComplete = (id) => {
       this.setState({
           todos: this.state.todos.map(todo => {
               if (todo.id === id) {
                   todo.completed = !todo.completed;
               }
               return todo;
           })
       })
    }

    delTodo = (id) => {
       this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
    }

    render() {
        return this.state.todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} markComplete={this.markComplete}
            delTodo={this.delTodo}
            />
        ));
    }
}


export default Todos