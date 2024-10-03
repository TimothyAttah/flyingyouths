import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Layout from './components/Layout';
import About from './pages/about/About';
import Faqs from './pages/faqs/Faqs';
import Fees from './pages/fees/Fees';
import Contact from './pages/contact/Contact';
import RegisterAndLogin from './pages/registerAndLogin/RegisterAndLogin';
import Programs from './pages/programs/Programs';
import Tech from './pages/tech/Tech2';
import Payment from './pages/payment/Payment';
import ScrollFromTop from './components/ScrollFromTop';

const App = () => {
  return (
    <>
      <ScrollFromTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about_us' element={<About />} />
          <Route path='/faqs' element={<Faqs />} />
          <Route path='/programs' element={<Programs />} />
          <Route path='/tech-skills' element={<Tech />} />

          <Route path='/contact' element={<Contact />} />
          <Route path='/students/register' element={<RegisterAndLogin />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/payment/:course' element={<Payment />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
