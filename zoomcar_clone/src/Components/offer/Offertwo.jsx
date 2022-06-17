import React from 'react'
import { Link } from 'react-router-dom'
import styles from './offerone.module.css'

const Offertwo =() => {
  return (
    <div>
        <div className={styles.container1}>
            <p style={{fontWeight:"bolder"}}>x OFFER</p>
        </div>
        <div className={styles.container2}>
            <img src="https://zoomcar-assets.zoomcar.com/images/original/00c2a56f4c929239e3bb4f83026ee034d79b8e0e.jpg?1646817335" className={styles.offer1img} alt="" />
            <h4 style={{textAlign:"center",fontWeight:"bold"}}>Win Assured Rewards from your favourite Brands </h4>
            <p>Get excited vouchers from our partners - oyo,upgrade,lxigo.The Sleep Company, Zoomin & MyGlamm</p>
            <h4 style={{fontWeight:"bolder"}}>How to avail</h4>
            <p >Use code <span style={{fontWeight:"bolder"}}>'ALTRAVELJOY'</span>while booking a Zoomcar to become eligible. Any booking done using the code will be eligible for exciting Vouchers from our Partners*  Oyo, Upgrad, Ixigo, The Sleep Company, Zoomin & MyGlamm. </p>
            <ul>
                <li>Oyo | Get upto 50% off on Hotel bookings</li>
                <li>Ixigo | Flat 8% off upto ₹1000. No minimum booking amount</li>
                <li>upGrad | Flat ₹5,000 off on all upGrad Courses</li>
                <li>Zoomin | Get Personalized Photo Mug worth ₹299 for FREE</li>
                <li>The Sleep Company | Get exclusive discounts on SmartGRID Mattresses</li>
                <li>Myglamm | Flat ₹299 discount on a min. transaction of ₹599</li>
            </ul>
            <p className={styles.boldtext}>Please Note</p>
            <br />
            <p className={styles.boldtext}>Zoomcar Terms & Conditions :</p>
            <ol>
                <li>Offer Valid till 30th June, 2022  | Offer Travel Period till  31st July 2022</li>
                <li>The minimum booking duration for eligibility will be 08 hours.</li>
                <li>Standard Zoomcar policies Apply.<Link to="">https://www.zoomcar.com/policy</Link></li>
                <li>A fully refundable security deposit may be charged at the time of booking</li>
                <li>This offer will allow the Zoomer to get vouchers from our partners</li>
                <li>Zoomcar reserves the right to withdraw, modify, cancel, change the offer at any point in time without prior notice and at their sole discretion. </li>
                <li>Zoomcar is not responsible for any liability nor claims for Partner offers. Disputes of the same shall be taken care of by partners directly and partner T&Cs apply.</li>
            </ol>
        </div>
    </div>
  )
}

export default Offertwo