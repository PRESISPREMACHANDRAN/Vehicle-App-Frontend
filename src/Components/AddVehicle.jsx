import React, { useState } from "react";
import Header from "./Header";

const AddVehicle = () => {
  const [input, changeInput] = useState({
    vehicleImage: "",
    modelName: "",
    year:"" ,
    fuel_type:"",
    tank_capacity:"",
    mileage:"",
    color:"",
    transmission_type:"",
   
  });

const readValue=(e)=>{
    changeInput({...input,[e.target.name]:e.target.value})
}

const submitValue=()=>{
    console.log(input)
}
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Model Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="modelName"
                  value={input.modelName}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Year of manufacture
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="year"
                  value={input.year}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Fuel Type
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="fuel_type"
                  value={input.fuel_type}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Tank capacity
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="tank_capacity"
                  value={input.tank_capacity}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Mileage
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="mileage"
                  value={input.mileage}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Color
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="color"
                  value={input.color}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Transmission type
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="transmission_type"
                  value={input.transmission_type}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                <label htmlFor="" className="form-label">
                  Vehicle image
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="vehicleImage"
                  value={input.vehicleImage}
                  onChange={readValue}
                />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-success" onClick={submitValue}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVehicle;
