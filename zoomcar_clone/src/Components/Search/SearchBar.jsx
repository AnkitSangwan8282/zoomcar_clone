import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";
import { useHistory } from "react-router-dom";
const SearchBar = () => {
  const [places, setPlaces] = useState("");
  const [city, setCity] = useState([]);
  const pickpoint = {
    Bangalore: ["Indiranagar", "Kormangala", "Rajajinaga", "Ragrath Road"],
    Chandigarh: ["Sector 10", "Sector 17", "Panchkula", "Mohali"],
    Delhi: ["Mahipalpur", "East Kailash", "Lakshminagar", "Mayur vihar"],
    Chennai: ["Thuraipakkam", "Nelson Manaickam Road", "Kodambakkam", "Porur"],
    Mumbai: ["Kandiwali West", "Thane", "Kharghar", "Andheri East"],
    Hyderabad: ["Madhapur", "gachibowli", "kothapet", "Banjara Hills"],
    Kolkata: ["Salt Lake", "New Alopore", "Ballygunge", "Tollygunge"],
    Pune: ["Aundh", "Hingewadi", "Kothrud", "Pimple Saudagar"],
    Vadodara: [""],
  };

  const history = useHistory();

  useEffect(() => {
    const cities = pickpoint[places];
    if (cities) {
      setCity(cities);
    } else {
      setCity([]);
    }
  }, [places]);

  // console.log(places)

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
     history.push('/')
    } else { 
      alert("Geolocation is not supported by this browser.");
    }
  }
  
  function showPosition(position) {
    localStorage.setItem("pickupPoint", "Latitude: " + position.coords.latitude + 
    "Longitude: " + position.coords.longitude)
  
  }

  return (
    <div className={styles.main} style={{ marginTop: "50px" }}>
      <div className={styles.search_box_cont}>
        <h1>Tell us your Starting Point</h1>
        <div className={styles.sel_start}>
          <div className={styles.city_sel}>
            <select
              name="city"
              className={styles.city_sub}
              onChange={(e) => {
                setPlaces(e.target.value);
                localStorage.setItem("pickupCity", e.target.value);
              }}
            >
              <option value="">City</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Chennai">Chennai</option>
              <option value="Vadodara">Vadodara</option>
              <option value="Pune">Pune</option>
            </select>
          </div>
          <div className={styles.sele_st_loca}>
            {/* <input
                            type="text"
                            placeholder="Tell us your starting point in City"
                            className={styles.input_sel_st}
                        // onchange={checknextbtn()}
                        /> */}

            <input list="browsers" placeholder="Tell us your starting point in City"
                            className={styles.input_sel_st} name="browser" id="browser" onChange={(e) => {localStorage.setItem('pickupPoint', e.target.value); history.push('/')}} />

            <datalist id="browsers">
            {city.map((el, i) => {
            return <option value={el}>{el}</option>;
          })}
             
            </datalist>
          </div>
          <button className={styles.locate_btn}>
            <div className={styles.div_locate}>
              <img
                src="https://www.zoomcar.com/assets/component-images/location.4f83fc7a3f686c9a14dc757b7a0b9b07.png"
                alt=""
              />
              <div onClick={getLocation} className={styles.locate_par}>Locate me</div>
            </div>
          </button>
          <button className={styles.showmap_btn}>
            <a>show map</a>
          </button>
        </div>
      </div>

     

      <div className={styles.deta_Airport}>
        <p className={styles.air_para}>Need Zoomcar at your_city Airport</p>
        <button className={styles.airport_btn}>
          International Terminal(T2)
        </button>
        <button className={styles.airport_btn}>
          Domestic Terminal(T1A/T1B)
        </button>
        <a className={styles.zoom_air_work}>How Zoom Airport works ?</a>
      </div>

      <footer className={styles.last_nav}>
        <div className={styles.start_div_fo}>
          <div className={styles.st1_divin}>STARTING POINT</div>
          <div className={styles.st2_divin}>Select Pick-up Location</div>
          <div className={styles.st3_divin}></div>
        </div>
        <button className={styles.next_btn}>NEXT</button>
      </footer>
    </div>
  );
};

export default SearchBar;
