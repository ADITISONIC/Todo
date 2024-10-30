import React,{useEffect, useState} from 'react'
import Create from './Create'

function Home(){
    const [todos,setTodos] = useState([])
    useEffect(()=>{
     axios.get('https://localhost:3001/get')
     .then(result=>setTodos(result.data))
     .catch(err=>console.log(err))
    },[])
    return(
        <div>
            <h2>Todo List</h2>
            <Create/>
            {
                todos.length===0?
                <div><h2>No record</h2></div>:
                todos.map(todo=>(
                    <div>
                        {todo}
                    </div>
                ))
            }
        </div>
    )
}
export default Home