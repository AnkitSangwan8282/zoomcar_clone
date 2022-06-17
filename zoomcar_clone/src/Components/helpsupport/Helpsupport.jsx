import React from 'react'
import styles from './Helpsupport.module.css'

const Helpsupport = () => {
  return (
    <div className= {styles.container}>
        <div className={styles.top}>
        <div>
            <h1>HELP & SUPPORT</h1>
        </div>
        <div className={styles.info}>
            <div>
                <img src="https://zoomcar-assets.zoomcar.com/images/original/5bf429e9b5b79b217ba71f00cff8dff3f17d71e8.png" alt="" />
                <p>Joining Zoomcar</p>
            </div>
            <div>
                <img src="https://zoomcar-assets.zoomcar.com/images/original/f6a4cda1d027872d4276416e9b0cc94a208d342f.png" alt="" />
                <p>Booking a Zoomcar</p>
            </div>
            <div>
                <img src="https://zoomcar-assets.zoomcar.com/images/original/fb893c01d3f0f43ff788fe40423d1713bb14b2e6.png" alt="" />
                <p>Payments and Charges</p>
            </div>
            <div>
                <img src="https://zoomcar-assets.zoomcar.com/images/original/7c85b49667922f6ed6ca33b3bcef0f9df8310446.png" alt="" /> 
                <p>Wallet & Refunds</p>
            </div>
            <div>
                <img src="https://zoomcar-assets.zoomcar.com/images/original/3ad20d92611d0cc9543ea9579f2fdc85486c5b70.png" alt="" />
                <p>Deals & Discounts</p>
            </div>
            <div>
                <img src="https://zoomcar-assets.zoomcar.com/images/original/c5a9cba447b3c3d118fa4707ec3a93fb80e92364.png" alt="" />
                <p>Live Assistance</p>
            </div>
        </div>
        <div>
            <h2>POPULAR QUERIES</h2>
            <button className={styles.accordion}>Do I have to return the car to the same location where I picked it up?</button>
            <div className={styles.panel}>
                <p>Yes. You must bring the vehicle back to the same place you picked it up before the end of your reservation. If you
                dropoff the car at a location different from your pickup point, you will be charged INR 2,000, and the full hourly rate
                and late fees until the vehicle is returned to the correct location.</p>
            </div>
            
            <button className={styles.accordion}>What happens if I return the car late?</button>
            <div className={styles.panel}>
                <p>A high penalty will be applicable for the amount of time you are late. In order to avoid paying this penalty, you can
                extend the booking from the app, well in advance.</p>
            </div>
            
            <button className={styles.accordion}>Is there a km limit to how much I can Drive</button>
            <div className={styles.panel}>
                <p>With reference to the km package which you select you are eligible to drive accordingly.For example, if you opt for 10
                km/hr package then 5 hours reservation would come with 50 km in driving at no additional charge, while a 3 day
                reservation would come with 720 km in driving at no additional charges. There is a per-km charge for each km beyond that
                point. Please see Zoomcar tariffs for more details.</p>
            </div>
            <button className={styles.accordion}>How do i end my reservation?</button>
            <div className={styles.panel}>
                <p>"Location without fleet (KLE booking): Filling checklists is easy! Now you can fill your End checklist via the Zoomcar
                app. Just log in to the App, select your live booking from the My bookings page and start. 1. Keep the keys inside the
                dashboard. 2. Edit your checklist details if there are any changes with Images. 3. Lock the vehicle. 4. End of your trip
                by uploading 4 side images of the vehicle. It is advised to keep the images for your future reference and need proper
                network coverage filling the checklist." Please collect all your belonging before locking the vehicle.</p>
            </div>
            
            <button className={styles.accordion}>How do i reach the location of the car?</button>
            <div className={styles.panel}>
                <p>Once the booking is confirmed, vehicle details with the location would be shared 3-4 hours prior to booking start time.
                We will also share an exact car location before 30 minutes of your booking start time along with the Navigation Link.
                Please use this Link or your application to navigate to your pickup location.</p>
            </div>
            
            <button className={styles.accordion}>How do I track my free KM reading?</button>
            <div className={styles.panel}>
                <p>"To avoid the KM confusion, we request you to capture the odometer reading images to track your free KMs and for any
                future reference and check your booking details on your APP to know the total free KM on the booking. Excess KM would be
                charged as per the selected vehicle. Ex: Extra KMs x Per km charge of the vehicle"</p>
            </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
            <h1>Cant find answer?</h1>
            <p style={{fontStyle:"oblique", fontWeight: "lighter"}}>Get in touch with us. We are here to help you.</p>
        </div>
        <div className= {styles.cont}>
            <div>
                <h2>Email</h2>
                <p style={{color:"green"}}>help@zoomcar.com</p>
            </div>
            <div>
                <h2>Call Center Number</h2>
                <p style={{color:"green"}}>08068976666</p>
            </div>
        </div>
     </div>
    </div>
  )
}

export default Helpsupport