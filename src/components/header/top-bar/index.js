import './index.css'

function TopBar() {
  return (
    <div className='top-bar'>
      <div className="left-content">
          <i className="fa fa-clock-o"></i>
          <span className="text">Mon-Thu: 9:00 AM - 5:30 PM</span>
      </div>
      <div className="center-content">
        <p>Loremipsum dolor sit,amet.</p>
      </div>
      <div className="right-content">
      <p>Social Media:</p>
        <div className="social-links">
          <a href="https://www.facebook.com" className="social-link">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com" className="social-link">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopBar;