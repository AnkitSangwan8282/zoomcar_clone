import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function AllCars() {
  const [data, setData] = useState([]);

  const searchAllCars = () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("https://zoomcartapi.herokuapp.com/allcars", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    searchAllCars();
  }, []);
  return (
    <>
      <div className="row" style={{marginTop: '150px'}}>
        {data &&
          data.length > 0 &&
          data.map((item, index) => {
            return (
              <div className="col-md-4" key={index}>
                <div className="card">
                  <img
                    src={item.img}
                    className="card-img-top"
                    alt={item.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text"><strong>Location: </strong>{item.location}, {item.City}</p>
                    <a href="#" className="btn btn-primary">
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default AllCars;
