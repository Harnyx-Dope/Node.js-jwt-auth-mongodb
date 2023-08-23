import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

import axios from 'axios';

function OrderDetailsPage() {
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('jwt');
        if (!token) {
          console.error('Token not found');
          return;
        }

        const response = await axios.get('http://localhost:9090/order/get-order', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response.data.orders);
        setOrders(response.data.orders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    
    fetchOrders();
  }, []);

  return (
    <Container>
      <h1>Your Order Details</h1>
      {orders.length > 0 ? (
        <ul>
          {orders.map(order => (
            <li key={order._id}>
              <h3>Order ID: {order._id}</h3>
              <p>Subtotal: {order.subTotal}</p>
              <p>Name: {order.name}</p>
               
              {/* Add more order details here */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No orders available.</p>
      )}
    </Container>
  );
}

export default OrderDetailsPage;
