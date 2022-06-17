import React from "react";
import styles from "./Footer.module.css";
const AboutUs = () => {
  return (
    <div className={styles.footer1}>
      {/* <h4 className={styles.h4}>About Us</h4> */}

      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne"  style={{backgroundColor: 'rgb(5, 65, 79)'}}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
             
            >
              <p style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', fontSize: '20px'}}>About Us</p>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className={styles.aboutus} >
                <div>
                  <a href="https://www.zoomcar.com/about" style={{color: 'black'}}>Zoomcar Team</a>
                </div>
                <div>
                  <a href="https://www.zoomcar.com/zap/subscribe" style={{color: 'black'}}>
                    Zoomcar Subscription
                  </a>
                </div>
                <div>
                  <a href="https://www.zoomcar.com/careers" style={{color: 'black'}}>
                    Careers @ Zoomcar
                  </a>
                </div>
                <div>
                  <a href="https://www.zoomcar.com/mumbai/" style={{color: 'black'}}>Self Drive Cars</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
