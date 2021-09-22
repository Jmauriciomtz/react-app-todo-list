import React from 'react';

class Task extends React.Component {
    render () {
      const { task, onDelete, onComplete } = this.props;
      const { id, content, completed } = task;
      return (
        <div className="row mb-4">
            <div className="col d-flex flex-row">
                <p>{content}</p>
                <button
                    className="mx-4"
                    onClick={() => onDelete(id)}
                >Delete</button>
                <input
                    className="mt-2 mx-2"
                    type="checkbox"
                    onChange={() => onComplete(id, completed)}
                    checked={completed}
                />
            </div>
        </div>
      )
    }
}

export default Task;

