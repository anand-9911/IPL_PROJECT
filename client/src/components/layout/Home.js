import React from 'react';
import './Home.css';
import Footer from './Footer';

const Home = (props) => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        <i class='fas fa-stroopwafel fa-spin'></i>
        Welcome to IPL by Anand Gautam
        <i class='fas fa-stroopwafel fa-spin'></i>
      </h1>
      <section className='landing'>
        <div></div>
      </section>
      <Footer />
    </>
  );
};

Home.propTypes = {};

export default Home;
