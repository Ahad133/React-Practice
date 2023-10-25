import React from "react";
import "./index.css";
import AboutImage from "../../assets/about-img.png";
export default function AboutComponent() {
  return (
    <div className="about-section">
      <div className="about-us">
        <div className="about-image">
          <img src={AboutImage} alt="About Us" />
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            DatLand Technologies, Inc. is a leader in sales, repairs and
            technical support of tape back-up drives. We are a progressive
            company with considerable product knowledge on all 4mm , 8mm ,
            Travan , AIT , DLT , SDLT , LTO , Libraries and Autoloaders. We sell
            and repair all of the top brands of tape back-up drives including:
            Quantum, HP, Compaq, Exabyte, Sony, Archive, Conner, Seagate ,
            WangDat, WangTek, and many more. We also buy (as is) and sell
            refurbished tape back-up drives at significant savings to you.
            <br />
            <br />
            DatLand Technologies, Inc. is recognized in the industry as a
            quality resource with a large client base. Our knowledgeable
            technical support team offers free troubleshooting services to help
            you diagnose and correct problems with your tape back-up drive. We
            hope that the quality of our free troubleshooting on minor problems
            today will bring you back to Datland Technologies, Inc. tomorrow.
          </p>
          <button className="button123">
            Learn More<i className="fa fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
