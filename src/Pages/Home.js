import React from 'react'
import { Button, Form, Table } from 'react-bootstrap'


export default function Home() {
  return (
    <div className='container mt-5'>
       <h1 className='text-center'>Creating a Form</h1> 
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Student's Name:</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
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
          <td>Mark</td>
          <td>
            <button className='btn btn-primary btn-sm me-1'>View</button>
            <button className='btn btn-warning btn-sm me-1'>Edit</button>
            <button className='btn btn-danger btn-sm me-1'>Delete</button>
          </td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}
