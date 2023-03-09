import React, { useEffect, useState } from 'react'
import { Button, Form, Table } from 'react-bootstrap'


let CreateStudent=()=>{
  //1. Hooks Area
  const[teacher,setTeacher]=useState([])
  useEffect(()=>{
    fetch('http://localhost:1337/api/teachers')
    .then(res=>res.json())
    .then(data=>{
      console.log(data.data)
      setTeacher(data.data)
    })
    .catch()
  },[])
  //2. Function definition area
  let createNewStudent=()=>{
    //alert("Hello")
    let payload={
      "data": {
        "name": document.getElementById('student_name').value,
        "teachers": [parseInt(document.getElementById('teacher').value)]
      }
    }
    fetch(`http://localhost:1337/api/students`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then((data)=>{
      alert("New Student Created Successfully...")
      console.log(data)
    })
    .catch()
    console.log(payload)
  }
  //3. Return statement
  return (
    <div className='container'>
      <div className='container mt-5'>
      <h1 className='text-center'>Creating a Form</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Select Teacher's Name:</Form.Label>
        <Form.Select id="teacher" aria-label="Default select example">
        {
          teacher.map((cv,idx,arr)=>{
            return <option key={idx} value={cv.id}>{cv.attributes.name}</option>
          })
        }
          
        </Form.Select>
          <Form.Label>Student's Name:</Form.Label>
          <Form.Control id="student_name" type="text" placeholder="Enter name" />
        </Form.Group>
      <Button variant="primary" type="button" onClick={createNewStudent}>Submit</Button>
    </Form>
    <br />
    <hr />
    <br />
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Devanand</td>
          <td>
            <button className='btn btn-primary btn-sm me-1'>View</button>
            <button className='btn btn-warning btn-sm me-1'>Edit</button>
            <button className='btn btn-danger btn-sm me-1'>Delete</button>
          </td>
        </tr>
      </tbody>
    </Table>
      </div>
    </div>
    
  )
}
export default CreateStudent;
