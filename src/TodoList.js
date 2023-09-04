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
            // const data = { name: inputValue, id: todoList.length + 1, completed: false }
            // const data = todoList.concat({ name: inputValue, id: todoList.length + 1, completed: false })
            // setTodoList(data)
            // todoList.push({name: inputValue, id: todoList.length + 1, completed: false})// if you set 
            //the push method at todoList State its working fine wihout updating state in setTodoList state updating method
            // const upDatedList = [...todoList, {name: inputValue, id: todoList.length + 1, completed: false}]
            // setTodoList(upDatedList)
            // todoList.unshift({ name: inputValue, id: todoList.length + 1, completed: false })
            const data = { name: inputValue, id: todoList.length + 1, completed: false }
            todoList.splice(todoList.length, 0, data)
            // setTodoList()
            setInputValue('')
            // console.log(todoList);
        }

    }
    function checkTodo() {
        // const updatedTodoList = todoList.map((item) => console.log(item.completed))
        console.log(todoList.map((item) => console.log(item.completed + " Hello" + item.id)))
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
                            isCompleteFun(item.id)} completed={item.completed} deleteItem={() => deleteItem(item.id)} item={item} />
                    )

                }
            </div>
        </div>
    );
};

export default TodoList;