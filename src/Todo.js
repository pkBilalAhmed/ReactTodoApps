import React from 'react';

const Todo = ({ name, isCompleteFun, completed, deleteItem }) => {
    return (
        <div className='item' >
            {name}
            <button onClick={isCompleteFun}>{completed ? "Done" : "Do"}</button>
            <button onClick={deleteItem}>Delete This Item</button>
            
            <input type='checkbox' checked={completed} onChange={isCompleteFun}/>
        </div>
    );
};

export default Todo;