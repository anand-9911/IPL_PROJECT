import React from 'react';

const Footer = () => {
  return (
    <>
      <div class='card'>
        <div class='card-header'> My favorite Quote</div>
        <div class='card-body'>
          <blockquote class='blockquote mb-0'>
            <p>
              Take care to get what you like or you will be forced to like what
              you get
            </p>
            <footer class='blockquote-footer'>Captain Vikram Batra(PVC)</footer>
          </blockquote>
        </div>
      </div>
      <div class='card text-center'>
        <div class='card-header'>This website is made by Anand Gautam</div>
        <div class='card-body'>
          <h5 class='card-title'>Github Repository</h5>
          <p class='card-text'>
            Click on the link to check the code for this application, do like
            and fork my projects
          </p>
          <a
            href='https://github.com/anand-9911/IPL_CRICBUZZ_API'
            class='btn btn-primary'
            target='_blank'>
            <i class='fab fa-github'></i> GitHub
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
