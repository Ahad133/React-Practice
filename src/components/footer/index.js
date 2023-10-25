import React from 'react';
import './index.css';
import bg_img from './images/1.jpg';

function Footer() {
  return (
    <footer>
      <div className="overlay-container">
        <img src={bg_img} alt="bg image" className='bg-img' />
        <div className='overlay1'></div>
        <div className="content">
          <div className='col-6'>
            <div className='col-text1'>
              <h2><b>Sign Up To Our Newsletter.</b></h2>
              <p><b>Be the first to hear about the latest offers.</b></p>
            </div>
          </div>
          <div className='col-6'>
            <div className='col-text2'>
            <form className="subs-box">
                <input type="text" placeholder="Your Email" className="subs-input" />
                <button type="submit" className="subs-button">Subscribe</button>
              </form>
            </div>
          </div>
      </div>
        <div className='random'>
        <div className='col-lg'>
            <p><b>Quick Links</b></p>
            <ul className='footer-list'>
              <li><i className="fa fa-chevron-right"></i>Lorem Ipsum Dolor</li>
              <li><i className="fa fa-chevron-right"></i>Lorem Ipsum Dolor</li>
              <li><i className="fa fa-chevron-right"></i>Lorem Ipsum Dolor</li>
              <li><i className="fa fa-chevron-right"></i>Lorem Ipsum Dolor</li>
            </ul>
          </div>
          <div className='col-lg'>
            <p><b>New Arrivals</b></p>
            <ul className='footer-list'>
              <li><i className="fa fa-chevron-right"></i>Lorem Ipsum Dolor</li>
              <li><i className="fa fa-chevron-right"></i>Lorem Ipsum Dolor</li>
              <li><i className="fa fa-chevron-right"></i>Lorem Ipsum Dolor</li>
              <li><i className="fa fa-chevron-right"></i>Lorem Ipsum Dolor</li>
            </ul>
          </div>
          <div className='col-lg'>
            <p><b>Information</b></p>
            <ul className='footer-list'>
              <li><i className="fa fa-chevron-right"></i>Lorem Ipsum Dolor</li>
              <li><i className="fa fa-chevron-right"></i>Lorem Ipsum Dolor</li>
              <li><i className="fa fa-chevron-right"></i>Lorem Ipsum Dolor</li>
              <li><i className="fa fa-chevron-right"></i>Lorem Ipsum Dolor</li>
            </ul>
          </div>
          <div className='col-lg'>
            <p><b>Other Links</b></p>
            <ul className='footer-list'>
              <li><i className="fa fa-chevron-right"></i>Lorem Ipsum Dolor</li>
              <li><i className="fa fa-chevron-right"></i>Lorem Ipsum Dolor</li>
              <li><i className="fa fa-chevron-right"></i>Lorem Ipsum Dolor</li>
              <li><i className="fa fa-chevron-right"></i>Lorem Ipsum Dolor</li>
            </ul>
          </div>
          <div className='col-lg'>
            <p><b>Contact Information</b></p>
            <ul className='footer-list'>
              <li><i className="fa fa-chevron-right"></i>Lorem Ipsum Dolor</li>
              <li><i className="fa fa-chevron-right"></i>Lorem Ipsum Dolor</li>
              <li><i className="fa fa-chevron-right"></i>Lorem Ipsum Dolor</li>
              <li><i className="fa fa-chevron-right"></i>Lorem Ipsum Dolor</li>
            </ul>
          </div>
        </div>
        <div className='random2'>
        <div className="social">
          <a href="https://www.facebook.com" className="social">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com" className="social">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
        <div className='copyright'>
          <p>Copyright © 2023 - All Right Reserved.</p>
        </div>
        <div className='payment'>
          <i class="fa fa-paypal"></i>
          <i class="fa fa-cc-visa"></i>
          <i class="fa fa-cc-mastercard"></i>
          <i class="fa fa-cc-discover"></i>
          <i class="fa fa-cc-amex"></i>
        </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
