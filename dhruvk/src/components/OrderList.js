import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

function AddOrderForm() {
  const [name, setName] = useState('');
  const [subTotal, setSubTotal] = useState('');

  const handleAddOrder = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('jwt');
      if (!token) {
        console.error('Token not found');
        return;
      }

      const response = await axios.post(
        'http://localhost:9090/order/add-order',
        {
          name: name,
          subTotal: subTotal
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log('Order added:', response.data);
      // Handle success or update orders list
    } catch (error) {
      console.error('Error adding order:', error);
    }
  };

  return (
    <Container>
      <h1>Add New Order</h1>
      <Form onSubmit={handleAddOrder}>
        <Form.Group>
          <Form.Label>Order name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br />
          <Form.Label>Subtotal</Form.Label>
          <Form.Control
            type="number"
            value={subTotal}
            onChange={(e) => setSubTotal(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit">Add Order</Button>
      </Form>
    </Container>
  );
}

export default AddOrderForm;
