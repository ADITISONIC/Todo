import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Create from './Create';

function Home() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/get') // Ensure you use http
            .then(result => setTodos(result.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h2>Todo List</h2>
            <Create />
            {
                todos.length === 0 ?
                    <div><h2>No record</h2></div> :
                    todos.map((todo, index) => (
                        <div key={index}>
                            {todo.task}
                        </div>
                    ))
            }
        </div>
    );
}

export default Home;