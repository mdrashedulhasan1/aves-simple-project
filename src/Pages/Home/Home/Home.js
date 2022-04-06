import React from 'react';
import Footer from '../../Footer/Footer';
import About from '../About/About/About';

import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import ShopNow from '../ShopNow/ShopNow';
const Home = () => {
    return (
        <div>
           <Navigation></Navigation>
           <Header></Header>
           <About></About>
           <ShopNow></ShopNow>
           <Footer></Footer>
        </div>
    );
};

export default Home;