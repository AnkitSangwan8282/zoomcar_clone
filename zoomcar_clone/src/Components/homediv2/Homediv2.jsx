import React from 'react'
import { Link } from 'react-router-dom';
import styles from "./Homediv.module.css"

function Homediv2() {
  return (
  
    <div  className={styles.container}>

      <div className={styles.container0}>
        <div className={styles.container0inner0}>
          <div className={styles.container0inner}>
            <div>
              <h2>Do your friends like a weekend get away?</h2>
              <p>You earn Rs 1200 asZ-Points.Your friend gets flat 40%off.(Max upto Rs 2500)</p>
            </div>
            <div>
              <img src="https://www.zoomcar.com/img/people.jpg" alt="" />
            </div>
          </div>
          <div className={styles.container0ref}>
          <img src="./homesearchimg/next.png" alt="" />
            <h4>Refer and Earn</h4>
          </div>
        </div>
        <div className={styles.container0inner1}>
          <div>
            <h2>UP TO 50%OFF</h2>
            <br />
            <p>on your first booking from the app!</p>
            <br />
            <h3 className={styles.promocode}>Use Code:ZOOMAPP</h3>
            <br />
            <h4 className={styles.appinstall}>Install Zoomcar App now!</h4>
          </div>
          <div>
            <img src="https://www.zoomcar.com/img/cellphone.png" alt="" />
          </div>
        </div>
      </div>

      <div className={styles.container1}>
        <div ><Link to="/search"><img src="https://zoomcar-assets.zoomcar.com/pictures/original/d70e7f58da384df0f3ba169cf19e8e931879c66c.jpeg?1652354515" alt="" className={styles.container1img} /></Link></div>
        <div><Link to="/"><img src="https://zoomcar-assets.zoomcar.com/pictures/original/e3dfe0ed91abc29facaf56a327b4498ce4e9b75e.jpeg?1652363808" alt=""  className={styles.container1img}/></Link></div>
      </div>



      <div>
        <Link to="/search"><img src="https://zoomcar-assets.zoomcar.com/pictures/original/55c3970a33c8f4d10dd3c9ace39d20e32af5c8ba.jpg?1651758755" alt="" className={styles.container2img} /></Link>
      </div>



      <div className={styles.container3}>
        <div>
          <Link to="/offer1"><img src="https://zoomcar-assets.zoomcar.com/photos/original/0d948091d1befad4507bd5710ad03a309f5b5345.jpg?1651837793" alt="" className={styles.container3img} /></Link>
        </div>
        <div>
          <Link to="/offer2"><img src="https://zoomcar-assets.zoomcar.com/photos/original/04c58c8d2c2e42ae1da4a8821643f43f8d2629e4.jpg?1646817336" alt="" className={styles.container3img} /></Link>
        </div>
      </div>
    </div>
  )
}

export default  Homediv2;