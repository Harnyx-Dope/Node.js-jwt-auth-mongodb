import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginSignupPage from './pages/loginpage'
import OrderDetailsPage from './components/Orderform'
import AddOrderForm from './components/OrderList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignupPage />} />
        <Route path="/orders/:userId" element={<OrderDetailsPage />} />
        <Route path="/orders/add" element={<AddOrderForm />} />
      </Routes>
    </Router>
  );
}

export default App;
