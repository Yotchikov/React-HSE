import React from 'react';
import styles from './NewTask.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

class NewTask extends React.Component {
  state = {
    buttonDisabled: false,
    name: '',
    description: '',
    priority: ''
  };

  submit = () => {
    this.props.handleSubmit(
      this.state.name,
      this.state.description,
      this.state.priority
    );
  };

  handleOnChange = event => {
    const valueName = event.target.name;
    const newValue = event.target.value;
    this.setState(state => {
      const newState = state;
      newState[valueName] = newValue;
      const validateForm =
        newState.name !== '' &&
        newState.description !== '' &&
        newState.priority !== '';
      return { buttonDisabled: validateForm, [valueName]: newValue };
    });
  };

  render() {
    return (
      <div className={cx('form')}>
        <input
          type="text"
          name="name"
          className={cx('el')}
          onChange={this.handleOnChange}
          placeholder="Исполнитель"
        />
        <input
          type="text"
          name="description"
          className={cx('el')}
          onChange={this.handleOnChange}
          placeholder="Краткое описание"
        />
        <input
          type="number"
          name="priority"
          className={cx('el')}
          onChange={this.handleOnChange}
          placeholder="Приоритет"
        />
        <button
          className={cx('el')}
          onClick={this.submit}
          disabled={!this.state.buttonDisabled}
        >
          Добавить
        </button>
      </div>
    );
  }
}

export default NewTask;
