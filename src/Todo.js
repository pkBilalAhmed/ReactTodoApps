import React from 'react';
import './style.css'

const Todo = ({ id, name, completed, deleteTodo, isCompleted }) => {
    return (
        <div className='innercontainer'>

            <div>{name}
                <button onClick={isCompleted}>{completed ? 'Done' : "Do"}</button>
                {/* {console.log(completed)} */}
                <button onClick={deleteTodo}>Delete Todo</button>
                <input type='checkbox' checked={completed} onChange={isCompleted} />
            </div>



        </div>
    );
};

export default Todo;