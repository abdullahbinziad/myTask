import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './todo.css'
import React from 'react';
import Button from 'react-bootstrap/Button';


const Todo = (props) => {
const {author,desc} = props.todo;
const {id}=props;
console.log(props)

const deleteClick=(id)=>{
    props.onDeleteTodo(id);
}
    return (
        <div className='todo'>
            <div >
            <h1>{author}</h1>
            <p>{desc}</p>
            </div>
            <div >
            <Button onClick={()=>{
                deleteClick(id)
            }}variant='danger' >
            <FontAwesomeIcon icon={faTrash} />
            </Button>
            </div>
        </div>
    );
};

export default Todo;