import React from 'react';
import DetailPageBanner from './Assets/DetailPageBanner.jpeg';
import {Button} from 'react-bootstrap';
import '../pages/DetailOverview.css'
import Star from './Assets/Star.png';
import Graystar from './Assets/Graystar.png';

const BannerDetail = () => {
    return(
        <div>
        <div className="d-block w-100">
            <img className="img-fluid image" src={DetailPageBanner} alt="" />      
            <div className="detailbanner-content">
                    <h1>SLAM DUNK</h1>
                <div className="rating">
                    <img src={Star}/><img src={Star}/><img src={Star}/><img src={Graystar}/><p>2200 reviews</p>
                </div>
                <div>
                    <p className="content-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu 
                    </p>
                </div>
                <div className="inline-button">
                    <Button className="trilerBtn" variant="danger">Watch Trailer</Button>
                    <Button className="watchlistBtn" variant="outline-danger">Add to Watchlist</Button>
                </div>
            </div>
        </div>
        </div>      
    );
}

export default BannerDetail;