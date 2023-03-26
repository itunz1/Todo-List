import React from 'react'

function TodoList({todo, onChange, onDelete}) {
  return (
    <div>
        <label className={`${todo.complete === true}`}>
            <input type="checkbox" checked={todo.complete} onChange={(({target}) => {
                onChange({
                    ...todo,
                    complete: target.checked,
                })
            })}/>
            {todo.content}
        </label>
        {onDelete && (
            <button onClick={() => onDelete(todo.id)}></button>
        )}
    </div>
  )
}

export default TodoList