 import React, { useState } from 'react';
 import { TextInput, Button} from 'evergreen-ui';
 import Todo from './todo';

 const Todos = () => {
    const [todos, setTodos] = useState(['the dog walk over the moon', 'cat are crazy']);
    const [input, setInput] = useState('');
    console.log(input)

    const addTodo = (event) => {
        setTodos([...todos, input]);
        setInput('')
    }
     return (
       <div>
        <TextInput value={input} onChange={event => setInput(event.target.value)} />
         <Button onClick={addTodo}>sent</Button>
         <div style={{alignItems: 'center'}}>
            {todos.map(list => (
                <Todo todo={list} />
            ))}
         </div>
       </div>
     );
 }

 export default Todos;