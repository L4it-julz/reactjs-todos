import React from 'react';
import './todo.css'

function Todo(props) {
    return(
        <div className='card'>
            <div className='content'>
                <h3>Dummy message</h3>
                <p>{props.todo}</p>
            </div>
        </div>
        
    );
}

export default Todo;