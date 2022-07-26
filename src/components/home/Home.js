import React, { useEffect, useState } from 'react';
import NewTodo from '../newtodo/NewTodo';
import Todos from '../todos/Todos';
import './home.css';
import { v4 as uuidv4 } from 'uuid';

const Home = (props) => {

const [todos,setTodos]= useState([]);
//handleTodo
 const handleTodo =(todo)=>{



    fetch('http://localhost:5000/todos',{
        method:'post',
        headers:{
          'content-type' : 'application/json',
        },
        body: JSON.stringify(todo)
      })
      
      .then(res=>res.json())
      .then(data =>{
        
        const addedTodos = data;

        setTodos((prevTodos)=>{
            return [...prevTodos,{id:uuidv4(), addedTodos}]
        });
    
        
      })
      


  console.log(todos)
}
//handle Remove Todo
const handleDeleteTodo=(id)=>{
   const filteredTodo = todos.filter((todo)=>todo.id !== id);
   setTodos(filteredTodo);
};

useEffect(()=>{
    fetch('http://localhost:5000/todos')
    .then(res => res.json())
    .then(data => setTodos(data))
  },[])

    return (
        <div className='home'>

            <h1>My Todo </h1>
            <NewTodo onAddTodo={handleTodo}></NewTodo>
            <Todos todos={todos} onDeleteTodo={handleDeleteTodo}></Todos>
        </div>
    );
};

export default Home;