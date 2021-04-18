import React from 'react';
import Navigation from "../components/Navbar"
import Footer from '../components/Footer';
import BannerDetail from '../components/BannerDetail';
import MainDetailOverview from '../components/MainDetailOverview';
import './DetailOverview.css'

const DetailOverview = () => {

    return(
        <div>
            <Navigation/>
            <BannerDetail/>
            <MainDetailOverview/>
            <Footer/>
        </div>
    );
}

export default DetailOverview;