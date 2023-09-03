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
    function checkTodo() {
        // const updatedTodoList = todoList.map((item) => console.log(item.completed))
        console.log(todoList.map((item) => console.log(item.completed)))
        // setTodoList(updatedTodoList)
    }
    const isCompleteFun = (id) => {
        const updatedTodoList = todoList.map((item) => {
            return item.id === id ? { ...item, completed: !item.completed } : item
        })
        setTodoList(updatedTodoList)
    }
    const deleteItem = (i) => {
        const updatedTodoList = todoList.filter((item) => item.id !== i)
        setTodoList(updatedTodoList)
    }
    return (
        <div className='container'>
            <div className='subContainer'>
                <input type='text' onChange={handleValue} value={inputValue} />
                <button onClick={addTodo}>Add Todo</button>
            </div>
            <div className='subContianer2'>
                <button onClick={checkTodo}>checkTodo</button>
                {
                    todoList.map((item) =>
                        <Todo key={item.id} name={item.name} isCompleteFun={() =>
                            isCompleteFun(item.id)} completed={item.completed} deleteItem={() => deleteItem(item.id)} />
                    )

                }
            </div>
        </div>
    );
};

export default TodoList;