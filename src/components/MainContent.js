import React from 'react';
import TodoItem from './TodoItem';
import tasksData from './TasksData';
import DateToday from './Date';

class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: tasksData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTasks = prevState.tasks.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item;
      });
      return {tasks: updatedTasks};
    });
  }

  render() {
    const taskComponents = this.state.tasks.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />);

    return (
      <div className="content">
        <h1><DateToday /></h1>
        <div className="todo-list">
          {taskComponents}
        </div>
      </div>
    );
  };

};

export default MainContent;
