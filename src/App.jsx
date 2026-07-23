// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './context/CartContext';

// Import pages
import Home from './pages/Home';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import KidsPage from './pages/KidsPage';
import CartPage from './pages/CartPage';  // ✅ Add this import
import { CategoryPage, Men, SubcategoryPage } from './pages/Men';
import Topwear from './pages/Men/Topwear';
import Bottomwear from './pages/Men/Bottomwear';
import FestiveWear from './pages/Men/FestivalWear';
import { Fusionwear, Jewellery, SubcategoryWomen, Westernwear, Women } from './pages/Women';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer/Footer';
import Overview from './pages/Overview';
import ViewPage from './pages/ViewPage';
import Buy from './pages/Buy';
import SubcategoryView from './pages/Men/SubcategoryPage';
import ShopNow from './pages/ShopNow';
import Contact from './pages/Contact';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import ForgotPassword from './components/Auth/ForgotPassword';



function App() {
  return (
    
      <CartProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<MenPage />} />
            <Route path="/women" element={<WomenPage />} />
            <Route path="/kids" element={<KidsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />     
            <Route path="/forgot-password" element={<ForgotPassword />} /> 

            <Route path="/men" element={<Men />} />
            <Route path="/men/topwear" element={<Topwear />} />
            <Route path="/men/bottomwear" element={<Bottomwear />} />
            <Route path="/men/festive-wear" element={<FestiveWear />} />
            <Route path="/men/:categoryId/:subcategoryId" element={<SubcategoryView />} />
             

            <Route path="/women" element={<Women />} />
            <Route path="/women/fusionwear" element={<Fusionwear />} />
            <Route path="/women/jewellery" element={<Jewellery />} />
            <Route path="/women/westernwear" element={<Westernwear />} />
            <Route path="/women/:categoryId/:subcategoryId" element={<SubcategoryWomen />} />

            <Route path="/footer" element={<Overview/>} />
            <Route path="/product/:id" element={<ViewPage />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/shopnow" element={<ShopNow />} />

          </Routes>
          <ToastContainer 
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </CartProvider>
    
  );
}

export default App;