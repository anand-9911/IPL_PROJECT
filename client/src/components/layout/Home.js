import React from 'react';
import './Home.css';
import homePage from '../../images/homePage.jpg';

const Home = (props) => {
  return (
    <>
      <img src={homePage} className='bg' alt='background image' />
    </>
  );
};

Home.propTypes = {};

export default Home;
