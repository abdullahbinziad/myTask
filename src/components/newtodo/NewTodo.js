import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./newtodo.css";
import Button from "react-bootstrap/Button";

const NewTodo = (props) => {

const [todo,setTodo]= useState({author:"",desc:""});
const{author,desc}= todo;

//submitting the form
const handleSubmit =(e)=>{
props.onAddTodo(todo);

setTodo({author:"",desc:""})




e.preventDefault();
}
//onchange handle
const handleChange=(e)=>{
const name= e.target.name;
setTodo((oldTodo)=>{
    return{...oldTodo,[name]: e.target.value}
})

}


  return (
    <div className="newtodo">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Author Name</Form.Label>
          <Form.Control type="text" value={author} onChange={handleChange} name="author" placeholder="Enter The Author name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <textarea value={desc} onChange={handleChange} name="desc" className="form-control"  rows="3"></textarea>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default NewTodo;
