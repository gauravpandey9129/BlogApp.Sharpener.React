import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useBlogContext } from '../../ContextApi/Context';

export default function Blogs() {

    const {blogs,setBlogs}=useBlogContext()

    const handleOnDelete=(id)=>{
      setBlogs(blogs.filter((elements)=> elements.id!==id )) ;
        

    }
     
    

  return (
    <>
     <div className='row'>
       { blogs.map(elements=> <Card  className='mt-5 ms-5 col-sm-6'  key={elements.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={elements.img} />
        <Card.Body>
            <Card.Title> {elements.title} </Card.Title>
            <Card.Text>
             {elements.decription}
            </Card.Text>
            <Button onClick={() => handleOnDelete(elements.id)} variant="primary">Delete</Button>
            <Button  className='ms-3'  variant="primary">Edit</Button>
        </Card.Body>
        </Card>)}
        </div>

    </>
  )
}

