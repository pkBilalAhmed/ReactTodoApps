import React from 'react';

const Todo = ({ name, isCompleteFun, completed, deleteItem, item }) => {
    return (
        <div className='item' >
            <button>{item.id}</button>
            {name}
            <button onClick={isCompleteFun}>{completed ? "Done" : "Do"}</button>
            <button onClick={deleteItem}>Delete This Item</button>

            <input type='checkbox' checked={completed} onChange={isCompleteFun} />
        </div>
    );
};

export default Todo;