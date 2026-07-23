import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaArrowRight
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-purple-900 text-white p-5">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Column 1: About Company */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">ABOUT COMPANY</h3>
            <p className="text-sm text-white/80 leading-relaxed mb-4">
              Premium clothing store offering the latest fashion trends with quality and style.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-white/80">
                <FaMapMarkerAlt className="text-purple-300 flex-shrink-0" />
                <span>3rd Street, LA, California</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <FaPhone className="text-purple-300 flex-shrink-0" />
                <span>+1 (088) 456 888 (24/7)</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <FaEnvelope className="text-purple-300 flex-shrink-0" />
                <span>info@shopverse.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Our Services / Brands */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">OUR BRANDS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/brands/nike" className="text-white/80 hover:bg-white hover:text-black hover:px-2 hover:py-0.5 hover:rounded transition-all duration-300">
                  Nike
                </Link>
              </li>
              <li>
                <Link to="/brands/adidas" className="text-white/80 hover:bg-white hover:text-black hover:px-2 hover:py-0.5 hover:rounded transition-all duration-300">
                  Adidas
                </Link>
              </li>
              <li>
                <Link to="/brands/puma" className="text-white/80 hover:bg-white hover:text-black hover:px-2 hover:py-0.5 hover:rounded transition-all duration-300">
                  Puma
                </Link>
              </li>
              <li>
                <Link to="/brands/zara" className="text-white/80 hover:bg-white hover:text-black hover:px-2 hover:py-0.5 hover:rounded transition-all duration-300">
                  Zara
                </Link>
              </li>
              <li>
                <Link to="/brands/hm" className="text-white/80 hover:bg-white hover:text-black hover:px-2 hover:py-0.5 hover:rounded transition-all duration-300">
                  H&M
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Customer Support */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">CUSTOMER SUPPORT</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="text-white/80 hover:bg-white hover:text-black hover:px-2 hover:py-0.5 hover:rounded transition-all duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/knowledge-base" className="text-white/80 hover:bg-white hover:text-black hover:px-2 hover:py-0.5 hover:rounded transition-all duration-300">
                  Knowledge Base
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-white/80 hover:bg-white hover:text-black hover:px-2 hover:py-0.5 hover:rounded transition-all duration-300">
                  Online Support
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-white/80 hover:bg-white hover:text-black hover:px-2 hover:py-0.5 hover:rounded transition-all duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/80 hover:bg-white hover:text-black hover:px-2 hover:py-0.5 hover:rounded transition-all duration-300">
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Useful Links */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">USEFUL LINKS</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/men" className="text-white/80 hover:bg-white hover:text-black hover:px-2 hover:py-0.5 hover:rounded transition-all duration-300">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/women" className="text-white/80 hover:bg-white hover:text-black hover:px-2 hover:py-0.5 hover:rounded transition-all duration-300">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/kids" className="text-white/80 hover:bg-white hover:text-black hover:px-2 hover:py-0.5 hover:rounded transition-all duration-300">
                  Kids
                </Link>
              </li>
              <li>
                <Link to="/jewellery" className="text-white/80 hover:bg-white hover:text-black hover:px-2 hover:py-0.5 hover:rounded transition-all duration-300">
                  Jewellery
                </Link>
              </li>
              <li>
                <Link to="/accessories" className="text-white/80 hover:bg-white hover:text-black hover:px-2 hover:py-0.5 hover:rounded transition-all duration-300">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Logo & Social */}
          <div className="col-span-1">
            <div className="mb-4">
              <img 
                src="/src/assets/logo-white.png" 
                alt="ShopVerse"
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<span className="text-2xl font-bold text-white">ShopVerse</span>';
                }}
              />
            </div>
            <p className="text-sm text-white/80 mb-4">
              Premium clothing store for modern fashion.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                <FaFacebook size={16} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                <FaTwitter size={16} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                <FaInstagram size={16} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="#"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-purple-900 transition-all duration-300"
              >
                <FaYoutube size={16} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-sm text-white/60">
              © {currentYear} ShopVerse. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link to="/about" className="text-white/60 hover:bg-white hover:text-black hover:px-2 hover:py-0.5 hover:rounded transition-all duration-300">
                About Us
              </Link>
              <Link to="/pricing" className="text-white/60 hover:bg-white hover:text-black hover:px-2 hover:py-0.5 hover:rounded transition-all duration-300">
                Pricing
              </Link>
              <Link to="/reviews" className="text-white/60 hover:bg-white hover:text-black hover:px-2 hover:py-0.5 hover:rounded transition-all duration-300">
                Reviews
              </Link>
              <Link to="/blog" className="text-white/60 hover:bg-white hover:text-black hover:px-2 hover:py-0.5 hover:rounded transition-all duration-300">
                Blog
              </Link>
              <Link to="/community" className="text-white/60 hover:bg-white hover:text-black hover:px-2 hover:py-0.5 hover:rounded transition-all duration-300">
                Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;