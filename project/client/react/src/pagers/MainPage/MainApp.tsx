//import React from 'react';
import Header from './components/Header';
import SubHeader from './components/Sub-header';
import BookingForm from './components/Booking-form';
import Carousel from './components/Carousel';
import Carousel2 from './components/Carousel2';
import MainInfo from './components/Main-info';
import EventsPoster from './components/Event';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function AppMainPage() {
  return (

      <div className="App">
        <Header />
        <SubHeader />
        <BookingForm />
        <Carousel />
        <div className='Menu'>
          <Carousel2 />  
        </div>
        <MainInfo />
        <EventsPoster />
        <Reviews />
        <Footer />

      </div>

  );
}

export default AppMainPage;
