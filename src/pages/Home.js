import React from 'react';
import Navigation from "../components/Navbar"
import HomeCarousel from '../components/HomeCarousel';
import Footer from '../components/Footer';
import MovieList from '../components/MovieList';
import './Home.css'
import CategoryState from '../context/CategoryState';

function Home() {
    return (
        <CategoryState>
            <Navigation />
            <HomeCarousel />
            <MovieList/>
            <Footer />
        </CategoryState>
    )
}

export default Home;
