import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Aos from 'aos';
import Home from './pages/home/Home';
import RegistrationSuccess from './pages/RegistrationSuccess';
import Dashboard from './pages/Dashboard';
import { RequireAuth, RequireConfirmation } from './components/Authentication';
import VerifyPayment from './pages/payment/VerifyPayment';
import Layout from './components/Layout';
import Payment from './pages/payment/Payment';
import ConfirmPayment from './pages/payment/ConfirmPayment';
import Tutorial from './pages/tutorials/Tutorial';
import About from './pages/about/About';
import Faqs from './pages/faqs/Faqs';
import Fees from './pages/fees/Fees';

const App = () => {
  useEffect(() => {
    Aos.init({duration: 3000});
  }, []);
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about_us' element={<About />} />
          <Route path='/faqs' element={<Faqs />} />
          <Route path='/fees' element={<Fees />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
