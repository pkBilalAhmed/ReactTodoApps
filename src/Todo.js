import React from 'react';

const Todo = ({ name, isCompleteFun, isComplete, deleteItem }) => {
    return (
        <div className='item' >
            {name}
            <button onClick={isCompleteFun}>{isComplete ? "Done" : "Do"}</button>
            <button onClick={deleteItem}>Delete This Item</button>
        </div>
    );
};

export default Todo;