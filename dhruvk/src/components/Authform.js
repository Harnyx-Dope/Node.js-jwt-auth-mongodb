import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function AuthForm ({ isSignup, onSubmit })  {
  const [formData, setFormData] = useState({ name:'',phoneNumber: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
          <Form.Group controlId="Name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData,  name: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="phoneNumber">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        />
      </Form.Group>
      <Button type="submit">{isSignup ? 'Sign Up' : 'Login'}</Button>
    </Form>
  );
};

export default AuthForm;
