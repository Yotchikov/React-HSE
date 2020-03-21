import React from 'react';

class NewTask extends React.Component {
  state = {
    buttonDisabled: false,
    name: '',
    description: '',
    priority: ''
  }

  submit = () => {
    this.props.handleSubmit(this.state.name, this.state.description, this.state.priority);
  }

  handleOnChange = event => {
    const valueName = event.target.name;
    const newValue = event.target.value;
    this.setState(state => {
      const newState = state;
      newState[valueName] = newValue;
      const validateForm = newState.name !== '' && newState.description !== '' && newState.priority !== '';
      return { buttonDisabled: validateForm, [valueName]: newValue }
    });
  }

  render() {
    return (
      <div className="form-row m-3">
        <div className="col">
          <input type="text" className="form-control" name="name" onChange={this.handleOnChange} placeholder="Имя" />
        </div>
        <div className="col">
          <input type="text" className="form-control" name="description" onChange={this.handleOnChange} placeholder="Описание" />
        </div>
        <div className="col">
          <input type="number" className="form-control" name="priority" onChange={this.handleOnChange} placeholder="Приоритет" />
        </div>
        <button className="btn btn-primary" onClick={this.submit} disabled={!this.state.buttonDisabled}>Добавить задачу</button>
      </div>
    );
  }
}

export default NewTask;