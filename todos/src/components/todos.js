 import React, { useState } from 'react';
 import { TextInput, Button} from 'evergreen-ui';
 import Todo from './todo';

 const Todos = () => {

    const [todos, setTodos] = useState(['the dog walk over the moon', 'cat are crazy']);
    const [input, setInput] = useState('');
    
    const addTodo = (event) => {
        setTodos([...todos, input]);
        setInput('')
    }
    
     return (
       <div>
        <TextInput value={input} onChange={event => setInput(event.target.value)} />
         <Button onClick={addTodo}>sent</Button>
         <div style={{textAlign: 'center'}}>
             <div style={{width:300}}>
             {todos.map(list => (
                <Todo todo={list} />
            ))}
             </div>
         </div>
       </div>
     );
 }

 export default Todos;