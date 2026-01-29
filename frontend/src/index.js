import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './landing_page/signup/Signup'
import Pricing from './landing_page/pricing/PricePage';
import Products from './landing_page/products/ProductPage';
import Support from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import AboutPage from './landing_page/about/AboutPage';
import NotFound from './landing_page/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      
      <Route path='/' element={<HomePage></HomePage>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
      <Route path='/pricing' element={<Pricing></Pricing>}></Route>
      <Route path='/products' element={<Products></Products>}></Route>
      <Route path='/support' element={<Support></Support>}></Route>
      <Route path='/about' element={<AboutPage></AboutPage>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
);
