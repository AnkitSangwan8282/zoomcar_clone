import React from 'react'
import styles from "./offerone.module.css"

const Offerone =() => {
  return (
    <div style={{marginTop: '50px'}}>
        <div className={styles.container1}>
            <p style={{fontWeight:"bolder"}}>x OFFER</p>
        </div>
        <div className={styles.container2}>
            <img src="https://zoomcar-assets.zoomcar.com/images/original/261586cbd2753cb7acf115d16f5d02990fb6abbc.jpg?1651837792" className={styles.offer1img} alt="" />
            <h4 style={{textAlign:"center",fontWeight:"bold"}}>First Zoomcar Booking-Airport Offer-May'22</h4>
            <p>Get 30%Instant Discount+aGift Voucher of Rs.500*</p>
            <h4 style={{fontWeight:"bolder"}}>How to avail</h4>
            <p className={styles.boldtext}>Terms&Conditions</p>
            <ol>
                <li>Applicable only on first zoomcar booking</li>
                <li>Valid only on airport bookings</li>
                <li>Offer Validity : 30 june 2022</li>
                <li>Travel end period: 17th july 2022</li>
                <li>A refundable security deposite might be charged at time of booking</li>
                <li> offer Applicable only on orignal reservation charges (not applicble on excess KM, late return fee or other fees/charges)</li>
            </ol>
            <p className={styles.boldtext}>Instant 30% off</p>
            <ol>
                <li>Use the promo code ZOOMFRIST at checkout to avial offer</li>
                <li>Mac discount can be aviailed us to INR 1250</li>
            </ol>
            <p className={styles.boldtext}>INR 500 worth Gift Card</p>
            <ol>
                <li>The brand gift card is worth of INR 500</li>
                <li>Minimum booking amount INR 6000</li>
                <li>User will recive a link and can select only gift card of their choice from the wide varity of avilable options</li>
            </ol>
        </div>
    </div>
  )
}

export default Offerone;