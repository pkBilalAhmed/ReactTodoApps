import React, { useState } from 'react';
import './style.css'
import Todo from './Todo';

const TodoList = () => {
    const [inputValue, setInputValue] = useState('')
    const [todoList, setTodoList] = useState([])

    const handleValue = (e) => {
        setInputValue(e.target.value)
    }

    const addTodo = () => {
        if (inputValue.trim()) {
            const data = { name: inputValue, id: todoList.length + 1, completed: false }
            setTodoList([...todoList, data])
            setInputValue('')
            console.log(todoList);
        }
    }
    const isCompleteFun=()=>{}
    return (
        <div className='container'>
            <div className='subContainer'>
                <input type='text' onChange={handleValue} value={inputValue} />
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <div className='subContianer2'>
                {
                    todoList.map((item) => (
                        <Todo key={item.id} name={item.name} isCompleteFun={isCompleteFun}/>
                    ))
                }
            </div>
        </div>
    );
};

export default TodoList;