import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useBlogContext } from '../../ContextApi/Context';

export default function Blogs() {

    const {blogs,setBlogs}=useBlogContext()

  return (
    <>

       { blogs.map(elements=> <Card key={elements.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={elements.img} />
        <Card.Body>
            <Card.Title> {elements.title} </Card.Title>
            <Card.Text>
             {elements.description}
            </Card.Text>
            <Button variant="primary">Delete</Button>
            <Button variant="primary">Edit</Button>
        </Card.Body>
        </Card>)}

    </>
  )
}

