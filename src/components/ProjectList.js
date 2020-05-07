import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/list.scss';

const ProjectList = ({ projects }) => {
  if (projects.length > 0) {
    return (
      <table className="projects">
        <thead>
          <tr>
            <th>#</th>
            <th>Название</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id}>
              <th>
                <Link to={'/' + project.id}>{project.id}</Link>
              </th>
              <td>
                <Link to={'/' + project.id}>
                  {project.name ? project.name : '-'}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  return (
    <div className="empty-message">
      <h3>Пока нет ни одного проекта...</h3>
    </div>
  );
};

export default ProjectList;
