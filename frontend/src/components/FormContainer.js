import React from 'react'
import { Container } from 'react-bootstrap'

const FormContainer = ({ children }) => {
  return (
    <Container className='mt-5'>
          {children}
    </Container>
  )
}

export default FormContainer
