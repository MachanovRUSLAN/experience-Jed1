import React from 'react'
import Header from '../components/header'
import MainContent from "../components/MainContent";
import HomeImg from '../components/homeImg';
import Choose from '../components/choose';
import Ameneties from '../components/Amenities';
import FloorPlan from '../components/Floor';
import Gallery from '../components/gallery';
import Chance from '../components/Chance';
import Questions from '../components/questions';
import Visit from '../components/visit';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
    <Header/>
    <MainContent/>
    <HomeImg/>
    <Choose/>
    <Ameneties/>
    <FloorPlan/>
    <Gallery/>
    <Chance/>
    <Questions/>
    <Visit/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home