import React from "react";
import { Link } from "react-router-dom";
import styles from "./Host.module.css";
const Host = () => {
  return (
    <div>
      <div>
        <div>
          <div className={styles.videostories1}>
            <div className={styles.bg}>
              <div className={styles.bgsubtext}>
                Share your car and earn
                <br />
                Up to ₹36000 per month!
                <div className={styles.bgsmalltext}>
                  <p> ₹10000 joining bonus. </p>
                  limited time offer!
                  <br />
                  <br />
                  <Link to="">
                    <button>START EARNING</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.hostmain}>
            <div>
              <h1 className={styles.hostbox1}>
                3 Simple steps to Start Earning with your car in 24 hours
              </h1>
            </div>

            <div className={styles.hostbox1grid}>
              <div>
                <h1 style={{ paddingBottom: "40px" }}>1. Sin up for Free!</h1>
                <spam>
                  Become part of the Zoomcar Host program for absolutely free by
                  filling up a short
                </spam>
                <spam>
                  after signup. It takes less than 2 mins to fill the form. No
                  hidden charges.
                </spam>
              </div>
              <div>
                <img
                  className={styles.hostbox1gridimg}
                  src="https://www.zoomcar.com/zap/subscribe/build/bb6776beb9b8bacdc711e5a43f401134.svg"
                  alt=""
                />
              </div>
            </div>

            <div className={styles.hostbox1grid}>
              <div>
                <img
                  className={styles.hostbox1gridimg}
                  src="https://www.zoomcar.com/zap/subscribe/build/29d798d8bc5d57bf22445ed3cc67cff1.svg"
                  alt=""
                />
              </div>
              <div>
                <h2>2. Get your Car Health Checked!</h2>
                <spam>
                  Once we receive your details, our expert visits your location
                  to assess your vehicle, and install safety devices in it to
                  ensure complete safety of your car. It all happens in 24
                  hours.
                </spam>
              </div>
            </div>

            <div className={styles.hostbox1grid}>
              <div>
                <h1 style={{ paddingBottom: "40px" }}>3. Share and Earn</h1>
                <spam>
                  Share your car through the Zoomcar Host app whenever you are
                  not using it. Flexibility in sharing, share as much or as less
                  as you like. Your
                </spam>
                <strong>weekly</strong>
                <spam>
                  {" "}
                  earnings get credited directly to your bank account!
                </spam>
              </div>
              <div>
                <img
                  className={styles.hostbox1gridimg}
                  src="https://www.zoomcar.com/zap/subscribe/build/fc0cb48e9b85b44423a6660ba79ad43e.svg"
                  alt=""
                />
              </div>
            </div>

            <div className={styles.hostmainbox2}>
              <div className={styles.hostmainbox2flex}>
                <div className={styles.hostmainbox2m}>
                  <img
                    className={styles.hostmainbox2img}
                    src="https://www.zoomcar.com/zap/subscribe/build/e2bfa54a9b46567921c3f14e1276c68e.svg"
                    alt=""
                  />
                  <div>
                    <h3>100% damage cover and repair</h3>
                    <p className={styles.hostmainbox2color}>
                      Zoomcar provides damage cover and repair handling incase
                      of an unlikely incident of an accident during the sharing
                      period/ when your car is on a booking.
                    </p>
                  </div>
                </div>

                <div className={styles.hostmainbox2m}>
                  <img
                    className={styles.hostmainbox2img}
                    src="https://www.zoomcar.com/zap/subscribe/build/1f4b5b69d928bbf104735bdea4914f79.svg"
                    alt=""
                  />
                  <div>
                    <h3>Your Car Stays in Safe Hands!</h3>
                    <p className={styles.hostmainbox2color}>
                      All our renters are verified individuals with valid
                      Driving license, and have excellent driving stats in the
                      past on our platform. We have complete contact and address
                      details of all our renters.
                    </p>
                  </div>
                </div>

                <div className={styles.hostmainbox2m}>
                  <img
                    className={styles.hostmainbox2img}
                    src="https://www.zoomcar.com/zap/subscribe/build/eb002ff59dd838a60fd664d21539d877.svg"
                    alt=""
                  />
                  <div>
                    <h3>Contactless sharing</h3>
                    <p className={styles.hostmainbox2color}>
                      Our Keyless technology enables contactless pickup & drop
                      of your car.
                    </p>
                  </div>
                </div>

                <div className={styles.hostmainbox2m}>
                  <img
                    className={styles.hostmainbox2img}
                    src="https://www.zoomcar.com/zap/subscribe/build/584189ee6116aeef9f0bfad788813be1.svg"
                    alt=""
                  />
                  <div>
                    <h3>Flexibility in sharingr</h3>
                    <p className={styles.hostmainbox2color}>
                      Share your car whenever you want, as per your usage and
                      convenience
                    </p>
                  </div>
                </div>

                <div className={styles.hostmainbox2m}>
                  <img
                    className={styles.hostmainbox2img}
                    src="https://www.zoomcar.com/zap/subscribe/build/d43c29ab6f2dcd27507de6aa29c8219b.svg"
                    alt=""
                  />
                  <div>
                    <h3>24 x 7 customer support</h3>
                    <p className={styles.hostmainbox2color}>
                      Call us, Chat with us, drop an Email to us, we've got your
                      back round the clock!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                className={styles.hostbox3img}
                src="	https://www.zoomcar.com/zap/subscribe/build/ab733857113e21f38f0cab7a44293464.webp"
                alt=""
              />
            </div>

            <div className={styles.hostbox4}>
              <h1 style={{ paddingBottom: "100px" }}>
                Share your XUV and earn upto 28,500 per month!
              </h1>
              <ls className={styles.hostbox4font}>
                Earn fixed amount per sharing hour{" "}
              </ls>
              <div>
                <button className={styles.hostbox4button}>Start Earning</button>
              </div>
              <div className={styles.hostbox4font1}>
                <Link to="">How do we estimate your earning?</Link>
              </div>
            </div>

            <div className={styles.hostbox5}></div>
            <div className={styles.hostbox5grid}>
              <div>
                <h1 className={styles.cpadding}>You Earn 7,500/</h1>
                <h1 className={styles.cpadding}>Your Friend Get 10,000/</h1>
                <div className={styles.cpadding}>You Both Win</div>
                <div>
                  <button className={styles.hostbox4button}>
                    <h3>REFER & EARN</h3>
                  </button>
                </div>
              </div>
              <div>
                <img
                  className={styles.hostbox5img}
                  src="https://www.zoomcar.com/zap/subscribe/build/b561826c55602da000820bda8422a23d.webp"
                  alt=""
                />
              </div>
            </div>
            <div className={styles.hostbox5colorf}>
              Refer multiple friends to earn upto 1 Lakh.
            </div>
          </div>

          <div className={styles.hostbox6}>
            <div className={styles.hostbox6text}></div>
            <h1>
              Users love Zoomcar Host program. Our app has 4.5+ rating on play
              store!
            </h1>
          </div>
        </div>

        <div className={styles.hostbox7}>
          <div className={styles.hostbox7grid}>
            <div>
              <h1 className={styles.cpadding}>
                What are the Zoomcar Host users saying?
              </h1>
              <p className={styles.cpadding}>
              </p>
            </div>

            <div>
              <div>
                <img
                  src="https://www.zoomcar.com/zap/subscribe/build/3f72230754b1fb30e311c9f78848ee62.png"
                  alt=""
                />
              </div>
              <div className={styles.hostbox7font}>
                I always dreamt of owning a car in which I can take my family
                for a drive, But, due to high EMIs, I couldn't afford a car.
                With Zoomcar Host program, I reduced my EMI by sharing the car
                on weekdays and take my family out on weekends. I am happy that
                I could finally realise my dream, thanks to Zoomcar Host.
              </div>
              <div className={styles.hostbox7color}>
                <div>Gajendra Tomar, Age 38 </div>
                <div>Govt School Teacher, Pune </div>
              </div>
            </div>

            <div>
              <div>
                <img
                  src="https://www.zoomcar.com/zap/subscribe/build/bd8cb705e0b100c897e16bbfff2a275f.png"
                  alt=""
                />
              </div>
              <div className={styles.hostbox7font}>
                I am an environmentally conscious person. I saw a wonderful
                opportunity to do something for congested roads and the
                environment with Zoomcar Host program. Sharing my second car on
                Zoomcar Host helps me to reduce traffic and reduce my carbon
                footprint. And yes, additional earning through my second car is
                cherry on the cake :
              </div>
              <div className={styles.hostbox7color}>
                <div>Shrikant venkatesh, Age 43 </div>
                <div>VP in a IT Company,Hydrabad </div>
              </div>
            </div>

            <div>
              <div>
                <img
                  src="https://www.zoomcar.com/zap/subscribe/build/5c4df7d7677b23ee3d6c5e32e964303e.png"
                  alt=""
                />
              </div>
              <div className={styles.hostbox7font}>
                I bought a car recently. But, ended up using it only once or
                twice a week for errands and grocery visits. I saw a great way
                to earn additional money through the Zoomcar Host program while
                also having the car to myself on weekends for my grocery visits.
                It is a winwin situation for me.
              </div>
              <div className={styles.hostbox7color}>
                <div> Archana Sundaram,Age 55</div>
                <div> Housewife,Hydrabad</div>
              </div>
            </div>

            <div>
              <div>
                <img
                  src="https://www.zoomcar.com/zap/subscribe/build/5c4df7d7677b23ee3d6c5e32e964303e.png"
                  alt=""
                />
              </div>
              <div className={styles.hostbox7font}>
                I am a travel enthusiast and use my car to explore new places. I
                prefer taking public transport to office, because of which my
                car stays idle during the weekdays. So, I decided to share my
                car on Zoomcar Host. Now, I earn extra bucks for my travel
                expenses
              </div>
              <div className={styles.hostbox7color}>
                <div>Shishir Gupta,Age 28 </div>
                <div>Young urban professional,Pune </div>
              </div>
            </div>

            <div>
              <div>
                <img
                  src="https://www.zoomcar.com/zap/subscribe/build/66c77e4621ef9ac32bdd9b5441ba7e71.png"
                  alt=""
                />
              </div>
              <div className={styles.hostbox7font}>
                My parents gave me a car so that I can commute safely to
                college. Since I've been having online classes now, my car
                wasn't being used much. I shared my car on Zoomcar Host so that
                I could earn some extra pocket money from it. It easy to share
                the car on Zoomcar Host and earn pocket money.
              </div>
              <div className={styles.hostbox7color}>
                <div> Prateek Singh,Age 22</div>
                <div>College Student,Hydrabad</div>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.hostbox8}>
              <div className={styles.hostbox8Lfont}>
                <h1>Still have questions?</h1>
              </div>
              <div>
                <div className={styles.hostbox8R}>
                  <div className={styles.hostbox8Rfont}>
                    <p>Do I need to meet the renters of my car?</p>
                  </div>
                  <div className={styles.hostbox8Rimg}>
                    <Link to="">
                      <img
                        src="https://www.zoomcar.com/zap/subscribe/build/b6a35e84e2679c629ed351c4985e858f.svg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <p className={styles.hostbox8border}></p>
                </div>

                <div className={styles.hostbox8R}>
                  <div className={styles.hostbox8Rfont}>
                    <p>How will I get Paid?</p>
                  </div>
                  <div className={styles.hostbox8Rimg}>
                    <Link to="">
                      <img
                        src="https://www.zoomcar.com/zap/subscribe/build/b6a35e84e2679c629ed351c4985e858f.svg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <p className={styles.hostbox8border}></p>
                </div>

                <div className={styles.hostbox8R}>
                  <div className={styles.hostbox8Rfont}>
                    <p>
                      What happens if my car gets challans or traffic fines
                      while my car is being shared?
                    </p>
                  </div>
                  <div className={styles.hostbox8Rimg}>
                    <Link to="">
                      <img
                        src="https://www.zoomcar.com/zap/subscribe/build/b6a35e84e2679c629ed351c4985e858f.svg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <p className={styles.hostbox8border}></p>
                </div>

                <div className={styles.hostbox8R}>
                  <div className={styles.hostbox8Rfont}>
                    <p>How much will I earn?</p>
                  </div>
                  <div className={styles.hostbox8Rimg}>
                    <Link to="">
                      <img
                        src="https://www.zoomcar.com/zap/subscribe/build/b6a35e84e2679c629ed351c4985e858f.svg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <p className={styles.hostbox8border}></p>
                </div>

                <div className={styles.hostbox8R}>
                  <div className={styles.hostbox8Rfont}>
                    <p>How is the price of my car decided?</p>
                  </div>
                  <div className={styles.hostbox8Rimg}>
                    <Link to="">
                      <img
                        src="https://www.zoomcar.com/zap/subscribe/build/b6a35e84e2679c629ed351c4985e858f.svg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <p className={styles.hostbox8border}></p>
                </div>

                <div className={styles.hostbox8R}>
                  <div className={styles.hostbox8Rfont}>
                    <p>Why are safety devices installed?</p>
                  </div>
                  <div className={styles.hostbox8Rimg}>
                    <Link to="">
                      <img
                        src="https://www.zoomcar.com/zap/subscribe/build/b6a35e84e2679c629ed351c4985e858f.svg"
                        alt=""
                      />
                    </Link>
                  </div>
                  <p className={styles.hostbox8border}></p>
                </div>

                <div className={styles.hostbox8R}>
                  <div className={styles.hostbox8Rfont}>
                    <p>Is my car eligible for the Zoomcar Host program?</p>
                  </div>
                  <div className={styles.hostbox8Rimg}>
                    <Link to="">
                      <img
                        src="https://www.zoomcar.com/zap/subscribe/build/b6a35e84e2679c629ed351c4985e858f.svg"
                        alt=""
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className={styles.hostbox9}></div>
            <div className={styles.hostbox8Lfont}>
              <h1 className={styles.cpadding}>Still confused?</h1>
            </div>
            <div className={styles.hostbox9border}>
              <div className={styles.hostbox9R}>
                <div>
                  <div>
                    <h3>We are here to help</h3>
                  </div>
                  <div>
                    Visit detailed FAQs section or contact us for more details.
                  </div>
                </div>
                <div>
                  <img
                    src="https://www.zoomcar.com/zap/subscribe/build/1481c0a139f0327896e2b071d9e392bd.svg"
                    alt=""
                  />
                </div>
                <div className={styles.hostbox9RIn}>
                  <div>
                    <Link to="">
                      <h3>FAQs</h3>
                    </Link>
                  </div>
                  <div>
                    <Link to="">
                      <h3>CONNECT US</h3>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.hostbox10border}>
            <div className={styles.hostbox10In}>
              <img
                src="https://www.zoomcar.com/zap/subscribe/build/5335b9a2cd132fc5c25ea3fec1177b02.svg"
                alt=""
              />
            </div>
            <div class="hostbox10borderin"></div>
          </div>
        </div>

        <div>
          <div>
            <p>
              More <Link to="">about.. </Link>Zoom host
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Host;
