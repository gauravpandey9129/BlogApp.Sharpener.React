import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useBlogContext } from '../../ContextApi/Context';


export default function FormModal( ) {
    
    const {modalStatus,setModalStatus,blogs,setBlogs}=useBlogContext()
    const[imgUrl,setImgUrl]=useState('')
    const[title,setTitle]=useState('');
    const[description,setDescription]=useState('')


 
    const handleOnClose=()=>{
      setModalStatus(false);
    }
   
    const handleOnAdd=()=>{
      let blog={
        id:Date.now(),
        img: imgUrl,
        title:title,  
        decription:description, 
      }
      
      setBlogs([...blogs,blog]);
    }



  return (
    <>
    <Modal show={modalStatus} onHide={handleOnClose}       >
            <Modal.Header closeButton>
              <Modal.Title>Add New Blogs</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3"  >
                  <Form.Label>Image Url</Form.Label>
                  <Form.Control
                    type="string"
                    placeholder="image url"
                    autoFocus
                    value={imgUrl}
                    onChange={(e)=>setImgUrl(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Blog Title</Form.Label>
                  <Form.Control
                   value={title} 
                   as="textarea" 
                   rows={3} 
                   onChange={(e)=>setTitle(e.target.value)}
                   />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Discription</Form.Label>
                  <Form.Control 
                  value={description}
                  as="textarea" 
                  rows={3} 
                  onChange={(e)=>setDescription(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleOnClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleOnAdd}>
                Add
              </Button>
            </Modal.Footer>
          </Modal> 
    </>
    
  )
}
