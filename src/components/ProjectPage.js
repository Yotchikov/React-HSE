import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import { addTodo, sortTodos, toggleTodo, initTodos } from '../actions';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import '../styles/main.scss';

const mapStateToProps = (state) => ({
  projects: state.projects,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  initTodos: (projectId) => dispatch(initTodos(projectId)),
  addTodo: (projectId, todo) => dispatch(addTodo(projectId, todo)),
  toggleTodo: (projectId, todo) => dispatch(toggleTodo(projectId, todo)),
  sortTodos: (param) => dispatch(sortTodos(param)),
});

class ProjectPage extends React.Component {
  state = {
    projectId: this.props.match.params.projectId,
    project: this.props.projects.find(
      (project) => project.id.toString() === this.props.match.params.projectId
    ),
  };

  componentDidMount() {
    if (this.state.project) {
      this.props.initTodos(this.state.projectId);
    }
  }

  render() {
    if (!this.state.project) {
      return <Redirect to="/" />;
    }

    return (
      <div className="main-wrapper">
        <div>
          <h1 className="title">
            <Link to="/">{'<'}</Link> {this.state.project.name}
          </h1>
          <div className="container">
            <div className="header">
              <AddTodo
                add={(todo) => this.props.addTodo(this.state.projectId, todo)}
              />
            </div>
          </div>
          <div className="container">
            <TodoList
              todos={this.props.todos}
              toggle={(todo) =>
                this.props.toggleTodo(this.state.projectId, todo)
              }
              sort={this.props.sortTodos}
            />
          </div>
        </div>

        <div className="footer">
          <hr />
          <p>
            <b>Антон Переплетчиков</b>, 2020
          </p>
          <a href="https://github.com/Yotchikov">@Yotchikov</a>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
