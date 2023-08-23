import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AuthForm from '../components/Authform';

function LoginSignupPage ( onLogin ) {
  // Define a function to handle user registration (signup)
  const handleSignup = async (formData) => {
    try {
      console.log(formData);
        const response = await fetch('http://localhost:9090/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      
        if (!response.ok) {
          throw new Error('Request failed with status: ' + response.status);
        }
      
        const data = await response.json();
        console.log(data);
        // Handle successful response
      } catch (error) {
        console.error('Error making fetch request:', error.message);
      }
      
  };
  const handleLogin = async (formData) => {
    try {
      const response = await fetch('http://localhost:9090/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Request failed with status: ' + response.status);
      }

      const data = await response.text();
      console.log(data);
      const tokenData = JSON.parse(data);
       localStorage.setItem('jwt',tokenData.token);
       
    } catch (error) {
      console.error('Error making fetch request:', error.message);
    }
  };
  
  return (
    <Container>
      <Row>
        <Col>
          <h1>Sign Up</h1>
          {/* Pass the handleSignup function to the AuthForm */}
          <AuthForm isSignup onSubmit={handleSignup} />
        </Col>
        <Col>
          <h1>Login</h1>
          <AuthForm onSubmit={handleLogin} />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginSignupPage;
