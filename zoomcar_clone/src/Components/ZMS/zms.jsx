import React from 'react'
import { Form } from 'react-bootstrap'
import styles from './zms.module.css'

export default function ZMS() {
  const formSubmit = (form) => {
    alert("Your application has been accepted. We will connect with you soon.")
}
  return (
    <div>
    <div>
      <div className={styles.main}>
        <div className={styles.firstdiv}>
            <div className={styles.logobutton}>
                <div className={styles.logo}>
                    <img src="https://www.zoomcar.com/images/zms-logo-white.png
                    " alt="" />
                </div>
                <div className={styles.button}>
                    <button className={styles.firstbutton}>Request Demo</button>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>Inspiring Profitable Mobility Solutions of Tomorrow</h1>
                    <p>Suite of Connected Technology Offerings and Connected Mobility Solutions for Businesses Worldwide
                    </p>
                </div>
                <div className={styles.buttongreen}>
                    <button className={styles.buttgreen}>Request Demo</button>
                </div>
            </div>
        </div>
        <div className={styles.green_line}></div>
        <div className={styles.offer}>
            <h2><b>Product Offerings</b></h2>
        </div>
        <div className={styles.sec_main}>
            <div className={styles.solution}>
                <div className={styles.vehicle}>
                    <h3>Connected Vehicle Solutions</h3>
                </div>
                <div className={styles.management}>
                    <h3>Yield Management Services</h3>
                </div>
            </div>
            <div className={styles.sec_div}>
                <div className={styles.head}>
                    <p>All-in-one solution to reduce operating costs over 30% via advanced vehicle monitoring and
                        management
                        systems</p>
                </div>
                <div>
                    <img className={styles.slide} name="slide" />
                </div>
                <div className={styles.feature}>
                    <h2>FEATURES</h2>
                </div>
                <div className={styles.feature_div}>
                    <div className={styles.text_sec}>
                        <h3>Vehicle Tracking & Safety</h3>
                        <p>Geo-fencing, Real time alerts, immobilization to manage 24x7</p>
                    </div>
                    <div className={styles.text_sec}>
                        <h3>Fuel Management</h3>
                        <p>Real time fuel level monitoring and fuel theft detection mechanisms</p>
                    </div>
                    <div className={styles.text_sec}>
                        <h3>Driver Score</h3>
                        <p>Improved fuel efficiency and cost benefits from better driving behavior</p>
                    </div>
                    <div className={styles.text_sec}>
                        <h3>Operations Automation</h3>
                        <p>Automate routine operational tasks and increase uptime over 25%</p>
                    </div>
                    <div className={styles.text_sec}>
                        <h3>Vehicle Health Monitoring</h3>
                        <p>Real-time Asset health monitoring systems for reduced downtime</p>
                    </div>
                    <div className={styles.text_sec}></div>
                </div>
                <div className={styles.third_button}>
                    <button className={styles.third_green}><a
                            href="https://zoomcar.s3.ap-southeast-1.amazonaws.com/ZS-Zoomcar-Mobility-Services-ZMS-Subscription02"></a>
                        More Details</button>
                </div>
            </div>
        </div>
        <div className={styles.third_div}>
            <div className={styles.cont_image}>
                <div className={styles.heading}>
                    <h1><b> Why Partner with Us?</b></h1>
                </div>
            </div>
            <div className={styles.main2}>
                <div className={styles.class2}>
                    <img src="https://www.zoomcar.com/images/icons-timer-new.png" alt="" />
                    <p><b>Quick Go-To Market</b></p>
                    <p>Quick and easy onboarding with a fast turnaround time of one week</p>
                </div>
                <div className={styles.class2}>
                    <img src="https://www.zoomcar.com/images/icons-car-new.png" alt="" /> 
                    <p><b>India’s largest B2C Mobility Platform</b></p>
                    <p>Fleet management experience of managing 20,000+ assets</p>
                </div>
                <div className={styles.class2}>
                    <img src="https://www.zoomcar.com/images/icons-remote-new.png" alt="" />
                    <p><b>Works Across Vehicle Types</b></p>
                    <p>Works seamlessly across - 2W, 3W, Cars, Trucks & Electric Vehicles alike</p>
                </div>
                <div className={styles.class2}>
                    <img src="https://www.zoomcar.com/images/icons-table-new.png" alt="" />
                    <p><b>Advanced Data Science Capabilities</b></p>
                    <p>Self-learning algorithms powered by Artificial Intelligence & Machine Learning to predict driverbehaviour</p>
                </div>
                <div className={styles.class2}>
                    <img src="https://www.zoomcar.com/images/icons-license-new.png" alt="" />
                    <p><b>Commitment to Customer Satisfaction</b></p>
                    <p>24x7 dedicated assistance and support system</p>
                </div>
                <div className={styles.class2}>
                    <img src="https://www.zoomcar.com/images/icons-delivery-green-new.png" alt="" />
                    <p><b>Pioneer in Shared subscription</b></p>
                    <p>Innovative techniques to enable 2-sided marketplaces for better utilisation & revenue</p>
                </div>
                <div className={styles.class2}>
                    <img src="https://www.zoomcar.com/images/icons-setting-green-new.png" alt="" />
                    <p><b>Proven Next Gen Technology</b></p>
                    <p>Best in class stable and scalable tech solutions</p>
                </div>
                <div className={styles.class2}>
                    <img src=" https://www.zoomcar.com/images/icons-distance-new.png" alt="" />
                    <p><b>Futuristic Products</b></p>
                    <p>Always in sync with the evolving business landscape</p>
                </div>
                <div className={styles.class2}>
                    <img src="https://www.zoomcar.com/images/icons-office-new.png" alt="" />
                    <p><b>Powering Multiple Sectors</b></p>
                    <p>Partners range from Government bodies to Global companies across varied geographies</p>
                </div>
            </div>
        </div>
        <div className={styles.road_map}>
            <img src="https://www.zoomcar.com/assets/component-images/dashboard@2x.a2445440373cd84df21b0d887b8d389f.png"alt="" />
        </div>
        <div className={styles.fourth_div}>
            <div className={styles.text_cont}>
                <div className={styles.head4}>
                    <h1><b>Proven track records</b></h1>
                </div>
                <div className={styles.para}>
                    <p>Backed by deep learnings and great driving experiences brought to you over 1 billion+ kmsspanning over 7 years</p>
                </div>
            </div>
            <div className={styles.box}>
                <div className={styles.blackbox}>
                    <img src="https://www.zoomcar.com/images/icons-fuel-fuel-type.png" alt="" />
                    <p><b>30% Fuel Costs Savings</b></p>
                </div>
                <div className={styles.blackbox}>
                    <img src="https://www.zoomcar.com/images/icons-swap.png" alt="" />
                    <p><b>20% Reduction in Fleet Downtime</b></p>
                </div>
                <div className={styles.blackbox}>
                    <img src="https://www.zoomcar.com/images/icons-car-pick-up.png" alt="" />
                    <p><b>50% Less Accidents & Better Safety</b></p>
                </div>
                <div className={styles.blackbox}>
                    <img src=" https://www.zoomcar.com/images/icons-deposit.png" alt="" />
                    <p><b>25% Maintenance Cost Reduction</b></p>
                </div>
                <div className={styles.blackbox}>
                    <img src="https://www.zoomcar.com/images/icons-ruppee.png" alt="" />
                    <p><b>15% Revenue Uplift</b></p>
                </div>
                <div className={styles.blackbox}>
                    <img src="https://www.zoomcar.com/images/icons-arrows-arrow-right-top.png" alt="" />
                    <p><b>Increase in sales funnel conversion and utilisation</b></p>
                </div>
            </div>
        </div>
        <div className={styles.fifth_div}>
            <div className={styles.heading1}>
                <h1><b>Connect With Us</b></h1>
            </div>
            <div className={styles.para2}>
                <p>Leave details for us to help your business become future ready</p>
            </div>
            <Form>
                <div className={styles.input1}>
                    <input className={styles.input1} type="text" placeholder="Name" />
                    <input className={styles.input1} type="text" placeholder="Company Name" />
                </div>
                <div>
                    <input className={styles.input2} type="email" placeholder="Email" />
                </div>
                <div className={styles.input1}>
                    <input className={styles.input1} type="number" placeholder="Number" />
                    <input className={styles.input} type="text" placeholder="Country" />
                </div>
                <div className={styles.input4}>
                    <textarea name="" className={styles.textarea} placeholder="Mention Reuirements"></textarea>
                </div>
                <div className={styles.submit}>
                    <input onClick={formSubmit} className={styles.submitbutton} type="button" value="Submit" />
                </div>
            </Form>
        </div>
        <div className={styles.footer}>
            <div className={styles.linegreen}></div>
            <div className={styles.black}>
                <p>For more information, connect with us at</p>
                <h4>zms.contact@zoomcar.com</h4>
            </div>
            <div className={styles.blackimage}>
                <img src="https://www.zoomcar.com/assets/component-images/zms-logo-white.2af37707ebe1f0942fd6285bb0fdf3d9.png"alt="" />
                <p>ⓒ 2020 Zoomcar | All Rights Reserved</p>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}
