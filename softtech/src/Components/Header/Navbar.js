import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import FormModal from './FormModal';
 


export default function TopNavbar() {
    
    const [modalStatus,setModalStatus]=useState(false)

    const handleClose=()=>{
          setModalStatus(false)
    }

  return (
    <div>
     <Navbar expand='lg' className='bg-info' >
        <Container>
        <Navbar.Brand className=' col text-center fw-bold ' href="#home">Blog-Website</Navbar.Brand><br/>
        <Button type='button' onClick={()=>setModalStatus(true)} variant='primary' className='text-light' >Add a new Blog</Button>
        {modalStatus?<FormModal  handleClose={handleClose} modalStatus={modalStatus}  />:null}
        </Container>
     </Navbar>


    </div>
  )
}
