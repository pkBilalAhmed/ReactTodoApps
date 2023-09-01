import React, { useState } from 'react';
import Todo from './Todo';
import './style.css'
// import Todo from './Todo';


const TodoList = () => {
    const [newValue, setValue] = useState('')
    const [todos, setTodos] = useState([])
    const changeVal = (e) => {
        const newVal = e.target.value
        setValue(newVal)
    }
    const addTodo = () => {
        if (newValue.trim()) {
            // const data = { name: newValue, id: todos.length = +1, completed: false }
            setTodos([...todos, { name: newValue, id: todos.length + 1, completed: false }])
            setValue('')
            console.log(todos);

        }
        console.log(todos.length);
    }
    return (
        <div className='container'>
            <input type='text' value={newValue} onChange={changeVal} />
            <button onClick={addTodo}>Add Todo</button>
            {
                todos.map((todo) => (
                    <Todo id={todo.id} name={todo.name} completed={todo.completed} key={todo.id} />
                ))
            }
        </div>
    );
};

export default TodoList;