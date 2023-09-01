import React from 'react';
import './style.css'

const Todo = ({ id, name, completed, deleteTodo }) => {
    return (
        <div className='innercontainer'>

            <div>{name}
                {/* <button >{completed ? 'Done' : "Do"}</button> */}
                <button onClick={deleteTodo}>Delete Todo</button>
            </div>



        </div>
    );
};

export default Todo;