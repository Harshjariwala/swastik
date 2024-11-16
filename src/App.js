import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Loading from './components/Loading';
import LoginPage from './pages/LoginPage';  // Assuming you have a LoginPage component
import CustomerDetailPage from './pages/CustomerDetailPage';
import ProductDetailPage from './pages/ProductDetailPage';
import  PartDetailPage  from './pages/PartDetailPage';
import ServiceDetailPage from './pages/ServiceDetailPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/customerDetail" element={<CustomerDetailPage />} />
        <Route path="/productDetail" element={<ProductDetailPage />} />
        <Route path="/partDetail" element={<PartDetailPage />} />
        <Route path="/serviceDetail" element={<ServiceDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
