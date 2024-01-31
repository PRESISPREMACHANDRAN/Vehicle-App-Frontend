import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";

const ViewAllVehicle = () => {
  const [vehicles, changeVehicles] = useState([{data:[]}]);
  const fetchData=()=>{
    axios.get("http://localhost:4000/viewAll").then((response) => {
      changeVehicles(response.data);
    });
  }

  useEffect(()=>{fetchData()},[])
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              {vehicles[0].data.map((value, index) => {
                return (
                  <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4 d-flex allign-items-stretch">
                    <div class="card">
                      <img
                        src={value.vehicleImage}
                        class="card-img-top"
                        alt="vehicle image"
                      />
                      <div class="card-body">
                        <h5 class="card-title">{value.modelName}</h5>
                        <p class="card-text">{value.yearOfManufacture}</p>
                        <a href={value.more} class="btn btn-primary">
                          more
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllVehicle;
