import React from 'react';
import Task from './Task.js';
import NewTask from './NewTask.js';
import styles from './App.module.scss';
import classnames from 'classnames/bind';
import { addTodo, sortTodos } from './actions/index.js';
import { connect } from 'react-redux';

const cx = classnames.bind(styles);

const mapStateToProps = state => ({
  todos: state
});

const mapDispatchToProps = dispatch => ({
  addTodo: (name, description, priority) =>
    dispatch(addTodo(name, description, priority)),
  sortTodos: param => dispatch(sortTodos(param))
});

class App extends React.Component {
  render() {
    const listTasks =
      this.props.todos.length > 0 ? (
        this.props.todos.map(task => (
          <Task
            key={task.id}
            id={task.id}
            name={task.name}
            description={task.description}
            priority={task.priority}
          />
        ))
      ) : (
        <h1>У вас нет ни одной задачи</h1>
      );

    return (
      <div className={cx('container')}>
        <div className={cx('tasks')}>
          <NewTask handleSubmit={this.props.addTodo} />
          <div className={cx('task-list')}>{listTasks}</div>
        </div>
        <div className={cx('buttons')}>
          <button
            onClick={() => this.props.sortTodos('byName')}
            disabled={this.props.todos.length == 0}
          >
            Отсортировать по имени
          </button>
          <button
            onClick={() => this.props.sortTodos('byPriority')}
            disabled={this.props.todos.length == 0}
          >
            Отсортировать по приоритету
          </button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
