import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Product = () => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to="">
        <Card.Img src="" variant='top' />
      </Link>

      <Card.Body>
        <Link to="">
          <Card.Title as='div'>
            <strong></strong>
          </Card.Title>
        </Link>

        <Card.Text as='div'>
          
        </Card.Text>

        <Card.Text as='h3'></Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
