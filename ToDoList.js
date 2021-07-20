import React from 'react'

function ToDoList(props) {
  return (
    <div className="todo-item">
      <input type="checkbox" />
      <ul>
        <h3 className = "header">My ToDo-List</h3>
        <li>{props.list1}</li>
        <li>{props.list2}</li>
        <li>{props.list3}</li>
        <li>{props.list4}</li>
      </ul>
    </div>
  )
}

export default ToDoList