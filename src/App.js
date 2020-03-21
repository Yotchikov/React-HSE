import React from 'react';
import Task from './Task.js'
import NewTask from './NewTask.js'
import './App.css';

class App extends React.Component {
  state = {
    idCounter: 0,
    tasks: []
  }

  handleSubmit = (name, description, priority) => {
    this.setState(state => {
      let newTasks = state.tasks;
      newTasks.push({ id: ++state.idCounter, name: name, description: description, priority: priority });
      return { tasks: newTasks };
    });
  }

  sortByName = () => {
    console.log('Sorting by name');
    this.setState(state => {
      let newTasks = state.tasks;
      newTasks.sort((a, b) => {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      return { tasks: newTasks };
    });
  }

  sortByPriority = () => {
    console.log('Sorting by priority');
    this.setState(state => {
      let newTasks = state.tasks;
      newTasks.sort((a, b) => {
        return a.priority - b.priority;
      });
      return { tasks: newTasks };
    });
  }

  render() {
    const listTasks = this.state.tasks.length > 0 ? this.state.tasks.map((task) =>
      <Task
        key={task.id}
        id={task.id}
        name={task.name}
        description={task.description}
        priority={task.priority} />) : <h1>Задач пока нет!</h1>;

    return (
      <div className="main" >
        <NewTask handleSubmit={this.handleSubmit} />
        <button className="btn btn-primary btn-block" onClick={this.sortByName}>Отсортировать по имени</button>
        <button className="btn btn-primary btn-block" onClick={this.sortByPriority}>Отсортировать по приоритету</button>
        <div className="mt-3">{listTasks}</div>
      </div>
    );
  }
}

export default App;
