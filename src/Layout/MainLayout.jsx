import React from 'react';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import CollectionBrowse from '../components/CollectionBrowse';
import ProductCarousel from '../components/ProductCarousel';
import PopularProduct from '../components/PoularProduct';
import Footer from '../components/Footer';
import LatestNewsBlog from '../components/LatestNewsBlog';
import CustomerTestimonial from '../components/CustomerTestimonial';

const MainLayout = () => {
    return (
        <div >
       <Navbar/>
        <Home/>
        <CollectionBrowse/>
        <ProductCarousel/>
        <PopularProduct/>
       <CustomerTestimonial/>
        <LatestNewsBlog/>
        <Footer/>
        </div>
    );
};

export default MainLayout;