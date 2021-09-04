 import React, { useState } from 'react';
 import { TextInput, Button} from 'evergreen-ui';
 import Todo from './todo';

 const Todos = () => {
    const [todos, setTodos] = useState(['hi', 'hello']);
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
         <div style={{paddingLeft:400, paddingRight: 400}}>
            {todos.map(list => (
                <Todo todo={list} />
            ))}
         </div>
       </div>
     );
 }

 export default Todos;