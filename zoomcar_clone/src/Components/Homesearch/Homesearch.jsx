import React from "react";

import { Link } from "react-router-dom";
import styles from "./HomeSearch.module.css";
import cars from "../cars/cars";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
const Homesearch = () => {
  const [enteredsDate, setEnteredsDate] = useState("");
  const [enteredeDate, setEnteredeDate] = useState("");
  const [searchButtonDisabled, setSearchButtonDisabled] = useState(true);
  const [pickpoint, setpickpoint] = useState(
    localStorage.getItem("pickupPoint")
  );

  const history= useHistory();
  const datesChangeHandler = (event) => {
    setEnteredsDate(event.target.value);
  };
  const dateeChangeHandler = (event) => {
    setEnteredeDate(event.target.value);
  };
  let pickupPoint = localStorage.getItem("pickupPoint");

  useEffect(() => {
    if (pickupPoint && enteredeDate && enteredsDate) {
      setSearchButtonDisabled(false);
    } else {
      setSearchButtonDisabled(true);
    }
  }, [enteredeDate, enteredsDate, pickupPoint]);



  useEffect(() => {
    let pickup = localStorage.getItem("pickupPoint");
    setTimeout(() => {
      setpickpoint(pickup);
    }, 300);
  }, []);

  useEffect(() => {
    setpickpoint(pickupPoint);
  }, [pickupPoint]);
  return (
    <div className={styles.mainSanatized}>
      <div className={styles.front_intro}>
        <div className={styles.title}>
          <h1 className={styles.firstline}>ZOOMCAR</h1>
          <h3 className={styles.subhead}></h3>
          <div style={{ color: "black", marginTop: "50px" }}>
            {pickpoint ? (
              <p>
                Your Pickup Point is{" "}
                <span style={{ fontWeight: "bold" }}>
                  {pickpoint.toUpperCase()}, want to Change ? Click{" "}
                  <Link to="/search">here</Link>
                </span>{" "}
              </p>
            ) : (
              <p>
                Start your wonderful journey{" "}
                <Link to="/search">
                  <img src="./homesearchimg/next.png" alt="" />
                </Link>{" "}
              </p>
            )}
          </div>
          <div className={styles.journey} style={{ color: "black" }}>
            <label htmlFor="sDate">Starting Date</label>
            <input
              id="sDate"
              type="date"
              value={enteredsDate}
              onChange={datesChangeHandler}
              style={{
                marginRight: "50px",
                paddign: "5px 10px",
                marginLeft: "20px",
                height: "37px",
                width: "250px",
              }}
            />
            <label htmlFor="eDate"> End Date</label>
            <input
              id="eDate"
              type="date"
              placeholder="Enter your journey starting date"
              value={enteredeDate}
              onChange={dateeChangeHandler}
              style={{
                marginRight: "50px",
                paddign: "5px 10px",
                marginLeft: "20px",
                height: "37px",
                width: "250px",
              }}
            />
          </div>
          {
            <div>
              <button
                className={styles.searchbtn}
                disabled={searchButtonDisabled}
                type="button"
                style={{
                  border: "none",
                  color: "white",
                  backgroundColor: searchButtonDisabled && "grey",
                }}
                onClick={()=> history.push('/allcars')}
              >
                Search car <Link to="/src/Components/cars/cars.jsx"></Link>{" "}
              </button>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Homesearch;
