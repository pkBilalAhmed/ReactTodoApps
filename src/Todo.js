import React from 'react';
import './style.css'

const Todo = ({ id, name, completed }) => {
    return (
        <div className='innercontainer'>
            
            <h2>
            <span className='spanid'>{id}</span>
                {name}

                {console.log(completed)}
                {/* <span className='spanclass'>{completed}</span> */}

            </h2>
        </div>
    );
};

export default Todo;