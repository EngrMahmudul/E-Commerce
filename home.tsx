import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, ShoppingCart, Heart, User, Menu, X, ChevronDown, 
  MapPin, ShieldCheck, Zap, Repeat, Truck, CheckCircle2, 
  Star, ChevronRight, ChevronLeft, Lightbulb, Power, Cpu, 
  Wifi, Home as HomeIcon, Smartphone, Settings, Globe,
  ArrowRight, Shield, Award, Clock
} from 'lucide-react';

export default function RayOmniHome() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // Handle scroll effect for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Constants
  const colors = {
    primary: '#0D6EFD',
    red: '#FF3B30',
    yellow: '#FFC107',
    bg: '#F8FAFC',
    text: '#111827',
    textMuted: '#6B7280'
  };

  const categories = [
    { name: 'Lighting', icon: <Lightbulb size={24} /> },
    { name: 'Switches', icon: <Power size={24} /> },
    { name: 'Smart Home', icon: <HomeIcon size={24} /> },
    { name: 'Automation', icon: <Cpu size={24} /> },
    { name: 'Hubs & Sensors', icon: <Wifi size={24} /> },
    { name: 'Accessories', icon: <Settings size={24} /> }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Omni Pro Smart Hub V2',
      brand: 'Ray Omni',
      price: 149.99,
      oldPrice: 199.99,
      rating: 4.9,
      reviews: 342,
      image: 'https://images.unsplash.com/photo-1558089687-f282ffcbc126?auto=format&fit=crop&q=80&w=400',
      badge: 'Bestseller',
      discount: '-25%'
    },
    {
      id: 2,
      name: 'Quantum LED Smart Bulb (4-Pack)',
      brand: 'Philips Hue',
      price: 89.99,
      oldPrice: null,
      rating: 4.8,
      reviews: 128,
      image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400',
      badge: 'New',
      discount: null
    },
    {
      id: 3,
      name: 'AeroTouch Glass Smart Switch',
      brand: 'Ray Omni',
      price: 45.00,
      oldPrice: 60.00,
      rating: 4.7,
      reviews: 56,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=400',
      badge: null,
      discount: '-25%'
    },
    {
      id: 4,
      name: 'SecureCore Smart Socket 15A',
      brand: 'Schneider',
      price: 32.50,
      oldPrice: null,
      rating: 4.6,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=400',
      badge: null,
      discount: null
    }
  ];

  const flashSaleProduct = {
    name: "Complete Home Automation Kit",
    price: 399.00,
    oldPrice: 599.00,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800",
    endTime: "05:23:14:09" // D:H:M:S format representation for UI
  };

  const Header = () => (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      {/* Top Bar - Hidden on mobile */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 bg-gray-50 text-xs font-medium text-gray-600 border-b border-gray-100">
        <div className="flex space-x-6">
          <span className="flex items-center hover:text-blue-600 cursor-pointer transition-colors"><MapPin size={14} className="mr-1" /> Ship to: USA</span>
          <span className="flex items-center hover:text-blue-600 cursor-pointer transition-colors"><Globe size={14} className="mr-1" /> English (USD)</span>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-blue-600 transition-colors">Vendor Portal</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Track Order</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Support</a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="px-4 md:px-8 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          
          {/* Logo & Mobile Menu Toggle */}
          <div className="flex items-center">
            <button 
              className="md:hidden mr-4 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div className="flex items-center cursor-pointer group">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform duration-300">
                <Zap className="text-white" size={20} />
              </div>
              <span className="font-bold text-2xl tracking-tight text-gray-900" style={{fontFamily: 'Poppins, sans-serif'}}>
                Ray <span className="text-blue-600">Omni</span>
              </span>
            </div>
          </div>

          {/* Search Bar - Center */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8 relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-600 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-32 py-3.5 border-2 border-gray-100 rounded-2xl leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-600/10 transition-all duration-300 sm:text-sm"
              placeholder="Search for smart home devices, switches, lighting..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 right-2 flex items-center">
               <button className="bg-blue-600 text-white px-5 py-1.5 rounded-xl text-sm font-semibold hover:bg-blue-700 shadow-md shadow-blue-600/20 transition-all duration-300 transform active:scale-95">
                 Search
               </button>
            </div>
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-2 md:space-x-6">
            <button className="hidden md:flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
              <span className="mr-2">Register Vendor</span>
              <div className="bg-blue-50 text-blue-600 p-1.5 rounded-lg"><CheckCircle2 size={16} /></div>
            </button>
            
            <div className="flex space-x-1 md:space-x-3">
              <button className="p-2.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 relative">
                <User size={22} />
              </button>
              <button className="p-2.5 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-300 relative">
                <Heart size={22} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 relative group">
                <ShoppingCart size={22} />
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white group-hover:scale-110 transition-transform">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Categories Nav - Desktop */}
        <div className="hidden md:flex items-center max-w-7xl mx-auto mt-4 space-x-8 text-sm font-medium text-gray-600">
          <button className="flex items-center text-gray-900 bg-gray-100 px-4 py-2 rounded-xl hover:bg-gray-200 transition-colors">
            <Menu size={18} className="mr-2" /> All Categories
          </button>
          <a href="#" className="hover:text-blue-600 transition-colors">Best Deals <span className="text-red-500 ml-1 text-xs px-1.5 py-0.5 bg-red-50 rounded">Hot</span></a>
          <a href="#" className="hover:text-blue-600 transition-colors">Smart Lighting</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Home Automation</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Switches & Sockets</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Top Brands</a>
          <a href="#" className="hover:text-blue-600 transition-colors">New Arrivals</a>
        </div>
      </div>
    </header>
  );

  const HeroSection = () => (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 pr-0 lg:pr-12 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 border border-blue-100">
              ⚡ The Future of Living is Here
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight" style={{fontFamily: 'Poppins, sans-serif'}}>
              Premium <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Smart Home</span><br/>
              Ecosystem.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Discover the world's most advanced electrical switches, automated lighting, and intelligent hubs in one marketplace.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-gray-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-blue-600 shadow-xl shadow-gray-900/20 hover:shadow-blue-600/30 transition-all duration-300 flex items-center justify-center group">
                Shop Ecosystem 
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button className="bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-2xl font-semibold text-lg hover:border-gray-900 transition-all duration-300 flex items-center justify-center">
                Become a Vendor
              </button>
            </div>

            <div className="mt-10 flex items-center space-x-6 text-sm font-medium text-gray-500">
              <div className="flex items-center"><CheckCircle2 className="text-green-500 mr-2" size={18}/> 500+ Premium Brands</div>
              <div className="flex items-center"><CheckCircle2 className="text-green-500 mr-2" size={18}/> Global Warranty</div>
            </div>
          </motion.div>
        </div>

        {/* Right Illustration/Image Area */}
        <div className="w-full lg:w-1/2 mt-16 lg:mt-0 relative">
          {/* Abstract Background Shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-50 to-gray-50 rounded-full blur-3xl -z-10"></div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-square max-w-lg mx-auto"
          >
            {/* Main Center Piece (e.g., A sleek Smart Hub or Phone controlling house) */}
            <div className="absolute inset-0 bg-white rounded-[40px] shadow-2xl border border-gray-100 overflow-hidden flex items-center justify-center p-8">
               <img 
                 src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=800" 
                 alt="Smart Home Hub" 
                 className="object-cover w-full h-full rounded-2xl opacity-90 mix-blend-multiply"
               />
            </div>

            {/* Floating Elements (Products) */}
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center space-x-3 w-48"
            >
              <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center">
                <Lightbulb className="text-yellow-500" size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Smart Bulb</p>
                <p className="text-sm font-bold text-gray-900">Active</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-1/4 -right-10 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center space-x-3 w-52"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <Power className="text-blue-600" size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Living Room</p>
                <p className="text-sm font-bold text-gray-900">Switch ON</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-8 left-1/4 bg-white p-4 rounded-2xl shadow-xl border border-gray-50 flex items-center space-x-3"
            >
              <div className="flex -space-x-2 mr-2">
                {[1,2,3].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Trusted by</p>
                <p className="text-sm font-bold text-gray-900">10k+ Users</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );

  const TrustBar = () => (
    <div className="bg-white border-y border-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {[
            { icon: <Truck size={32} className="text-blue-600" />, title: "Free Global Delivery", desc: "On orders over $200" },
            { icon: <ShieldCheck size={32} className="text-blue-600" />, title: "Official Warranty", desc: "100% genuine products" },
            { icon: <Repeat size={32} className="text-blue-600" />, title: "Easy Returns", desc: "30-day return policy" },
            { icon: <Shield size={32} className="text-blue-600" />, title: "Secure Payments", desc: "256-bit SSL encryption" }
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-4 group cursor-pointer">
              <div className="bg-blue-50 p-3 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(item.icon, { className: 'transition-colors duration-300' })}
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm md:text-base">{item.title}</h4>
                <p className="text-xs md:text-sm text-gray-500 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const PopularCategories = () => (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900" style={{fontFamily: 'Poppins, sans-serif'}}>Explore Categories</h2>
            <p className="text-gray-500 mt-2">Find exactly what you need for your smart home.</p>
          </div>
          <button className="hidden md:flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            View All <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((cat, index) => (
            <motion.div 
              whileHover={{ y: -8 }}
              key={index} 
              className="bg-white p-6 rounded-[20px] shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-center border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4 text-gray-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {cat.icon}
              </div>
              <h3 className="font-semibold text-gray-900 text-sm md:text-base">{cat.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

  const FlashSale = () => (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-[32px] overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row items-center">
            
            <div className="p-10 md:p-16 md:w-1/2 flex flex-col items-start justify-center relative z-10">
              <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-6 flex items-center shadow-lg shadow-red-500/30">
                <Clock size={14} className="mr-1.5"/> Flash Sale Ending Soon
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight" style={{fontFamily: 'Poppins, sans-serif'}}>
                {flashSaleProduct.name}
              </h2>
              
              <div className="flex items-baseline space-x-4 mb-8">
                <span className="text-4xl font-bold text-white">${flashSaleProduct.price}</span>
                <span className="text-xl text-gray-400 line-through">${flashSaleProduct.oldPrice}</span>
              </div>

              {/* Countdown Timer */}
              <div className="flex space-x-4 mb-8">
                {flashSaleProduct.endTime.split(':').map((unit, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-xl font-bold text-white border border-white/20">
                      {unit}
                    </div>
                    <span className="text-[10px] text-gray-400 mt-2 uppercase tracking-wider">
                      {['Days', 'Hrs', 'Mins', 'Secs'][i]}
                    </span>
                  </div>
                ))}
              </div>

              <button className="bg-red-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-600 transition-colors shadow-lg shadow-red-500/30 w-full sm:w-auto">
                Grab Deal Now
              </button>
            </div>

            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-l from-transparent to-gray-900/90 z-10"></div>
              <img 
                src={flashSaleProduct.image} 
                alt="Flash Sale" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );

  const FeaturedProducts = () => (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{fontFamily: 'Poppins, sans-serif'}}>Trending Premium Gear</h2>
            <p className="text-gray-500">Highest rated products by smart home enthusiasts.</p>
          </div>
          
          {/* Category Tabs */}
          <div className="flex p-1.5 bg-gray-100 rounded-xl">
            {['All', 'New', 'Best Sellers', 'On Sale'].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveCategory(tab)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === tab 
                    ? 'bg-white text-gray-900 shadow-sm' 
                    : 'text-gray-500 hover:text-gray-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group bg-white border border-gray-100 rounded-[24px] p-4 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 relative flex flex-col">
              
              {/* Badges */}
              <div className="absolute top-6 left-6 z-10 flex flex-col gap-2">
                {product.badge && (
                  <span className="bg-gray-900 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                    {product.badge}
                  </span>
                )}
                {product.discount && (
                  <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide">
                    {product.discount}
                  </span>
                )}
              </div>

              {/* Action Buttons (Hover) */}
              <div className="absolute top-6 right-6 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <button className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 hover:bg-red-50 transition-colors">
                  <Heart size={18} />
                </button>
                <button className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-colors">
                  <Eye size={18} />
                </button>
              </div>

              {/* Image Area */}
              <div className="h-56 mb-4 rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col">
                <div className="text-xs text-blue-600 font-semibold mb-1">{product.brand}</div>
                <h3 className="font-bold text-gray-900 mb-2 leading-tight flex-1 line-clamp-2 hover:text-blue-600 cursor-pointer">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-2">
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                    <Star size={14} fill="currentColor" />
                  </div>
                  <span className="text-xs text-gray-500">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    {product.oldPrice && (
                      <span className="text-xs text-gray-400 line-through ml-2">${product.oldPrice.toFixed(2)}</span>
                    )}
                  </div>
                  <button className="w-10 h-10 bg-gray-900 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors shadow-lg shadow-gray-900/20">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const EcosystemSection = () => (
    <section className="py-24 bg-gray-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          
          <div className="lg:w-1/2 pr-0 lg:pr-16 mb-12 lg:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{fontFamily: 'Poppins, sans-serif'}}>
              One App. <br/>
              <span className="text-blue-400">Total Control.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Ray Omni isn't just a store. It's an ecosystem. Every device you buy connects seamlessly, controlled from our beautifully designed central application.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Smartphone />, title: "Unified Interface", desc: "Control lights, security, and climate from one dashboard." },
                { icon: <Zap />, title: "Energy Analytics", desc: "Monitor power consumption and reduce your bills." },
                { icon: <Shield />, title: "Bank-Grade Security", desc: "Your data is encrypted and never shared." }
              ].map((item, idx) => (
                <div key={idx} className="flex">
                  <div className="mt-1 bg-white/10 p-3 rounded-xl h-fit mr-4 text-blue-400">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative">
            <div className="aspect-[4/3] bg-gradient-to-tr from-gray-800 to-gray-700 rounded-[32px] p-4 md:p-8 shadow-2xl border border-gray-700 transform rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Mockup App Interface */}
              <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden shadow-inner flex flex-col">
                <div className="p-6 pb-2">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <p className="text-gray-400 text-sm">Good Evening,</p>
                      <h3 className="text-2xl font-bold">Alex</h3>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center border border-gray-700">
                      <Settings size={20} className="text-gray-400"/>
                    </div>
                  </div>
                  
                  {/* Weather Widget */}
                  <div className="bg-gradient-to-r from-blue-900/50 to-blue-800/50 rounded-2xl p-4 mb-6 border border-blue-500/20">
                     <p className="text-sm font-medium">Living Room • 72°F</p>
                     <p className="text-xs text-blue-300 mt-1">Air Quality: Excellent</p>
                  </div>
                </div>

                {/* Device Grid */}
                <div className="flex-1 bg-gray-800/50 rounded-t-3xl p-6 grid grid-cols-2 gap-4">
                   <div className="bg-blue-600 rounded-2xl p-4 shadow-lg shadow-blue-900/50 flex flex-col justify-between">
                     <div className="flex justify-between">
                       <Lightbulb size={24} className="text-white"/>
                       <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                     </div>
                     <div>
                       <p className="font-semibold mt-4">Main Lights</p>
                       <p className="text-xs text-blue-200">On • 80%</p>
                     </div>
                   </div>
                   
                   <div className="bg-gray-800 rounded-2xl p-4 border border-gray-700 flex flex-col justify-between">
                     <div className="flex justify-between text-gray-500">
                       <Wifi size={24} />
                     </div>
                     <div>
                       <p className="font-semibold mt-4 text-gray-300">Smart Hub</p>
                       <p className="text-xs text-gray-500">Online</p>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );

  const VendorCTA = () => (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="bg-blue-600 rounded-[40px] overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center p-10 md:p-20">
            <div className="md:w-3/5 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{fontFamily: 'Poppins, sans-serif'}}>
                Grow your brand with the world's premier smart home marketplace.
              </h2>
              <p className="text-blue-100 text-lg mb-8 max-w-xl">
                Join 500+ premium brands selling to millions of targeted customers globally. We provide the platform, logistics, and analytics.
              </p>
              
              <ul className="space-y-3 mb-10">
                {['0% Commission for first 3 months', 'Access to global logistics network', 'Premium brand positioning', 'Dedicated account manager'].map((item, i) => (
                  <li key={i} className="flex items-center text-blue-50">
                    <CheckCircle2 size={18} className="text-yellow-400 mr-3 shrink-0" /> {item}
                  </li>
                ))}
              </ul>

              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-colors shadow-xl w-full sm:w-auto">
                Register as Vendor
              </button>
            </div>
            
            <div className="md:w-2/5 flex justify-center">
               <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl w-full max-w-sm">
                 <div className="text-center mb-6">
                   <Award size={48} className="text-yellow-400 mx-auto mb-4" />
                   <h3 className="text-2xl font-bold text-white">Vendor Metrics</h3>
                 </div>
                 <div className="space-y-4">
                   <div className="bg-white/10 p-4 rounded-xl">
                     <p className="text-blue-200 text-sm">Active Buyers</p>
                     <p className="text-3xl font-bold text-white">2.4M+</p>
                   </div>
                   <div className="bg-white/10 p-4 rounded-xl">
                     <p className="text-blue-200 text-sm">Avg. Conversion Rate</p>
                     <p className="text-3xl font-bold text-white">4.8%</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-2">
                <Zap className="text-white" size={16} />
              </div>
              <span className="font-bold text-xl tracking-tight text-gray-900" style={{fontFamily: 'Poppins, sans-serif'}}>
                Ray <span className="text-blue-600">Omni</span>
              </span>
            </div>
            <p className="text-gray-500 mb-6 max-w-sm">
              The premier destination for premium smart home devices, electrical switches, and automation systems. 
            </p>
            <div className="flex space-x-4">
               {/* Social Icons Placeholders */}
               {[1,2,3,4].map(i => (
                 <a key={i} href="#" className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                   <div className="w-4 h-4 bg-current rounded-sm"></div>
                 </a>
               ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Marketplace</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Smart Home</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Best Deals</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Top Brands</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Vendor Registration</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Blog & News</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Warranty</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Track Order</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            © 2026 Ray Omni Marketplace. All rights reserved. Designed for the Future.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms of Service</a>
            <a href="#" className="hover:text-gray-900">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );

  // Helper Eye Icon component since it wasn't imported directly
  const Eye = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

  return (
    <div className="font-sans bg-gray-50 min-h-screen text-gray-900 selection:bg-blue-600 selection:text-white">
      
      {/* Dynamic Font Injection for Headings */}
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap');
        body { font-family: 'Inter', sans-serif; }
      `}} />

      <Header />
      
      <main>
        <HeroSection />
        <TrustBar />
        <PopularCategories />
        <FlashSale />
        <FeaturedProducts />
        <EcosystemSection />
        <VendorCTA />
      </main>

      <Footer />

    </div>
  );
}
