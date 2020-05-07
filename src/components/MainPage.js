import React from 'react';
import AddProject from './AddProject';
import ProjectList from './ProjectList';
import { connect } from 'react-redux';
import { addProject, initProjects } from '../actions';
import '../styles/main.scss';

const mapStateToProps = (state) => ({
  projects: state.projects,
});

const mapDispatchToProps = (dispatch) => ({
  addProject: (name) => dispatch(addProject(name)),
  initProjects: () => dispatch(initProjects()),
});

class MainPage extends React.Component {
  componentDidMount() {
    this.props.initProjects();
  }

  render() {
    return (
      <div className="main-wrapper">
        <div>
          <h1 className="title">Проекты</h1>
          <div className="container">
            <div className="header">
              <AddProject add={this.props.addProject} />
            </div>
          </div>
          <div className="container">
            <ProjectList projects={this.props.projects} />
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
