import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardTile({ inventery}) {
  return <>
    <Card style={{ width: '15rem' }}>
      {/* <Card.Img variant="top" src={inventery.imageUrl} /> */}
      
      <Card.Body>
      <Card.Text>
          {inventery.title}
        </Card.Text>
        <Card.Text>
          {inventery.category}
        </Card.Text>
        <Card.Text>
          {inventery.imageUrl}
        </Card.Text>
        <Card.Text>
          {inventery.price}
        </Card.Text>
        <Card.Text>
          {inventery.stock}
        </Card.Text>
      </Card.Body>
    </Card>
  </>
}

export default CardTile