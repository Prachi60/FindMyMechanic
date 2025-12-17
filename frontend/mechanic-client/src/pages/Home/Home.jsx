import React from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import Banner from "../../assets/banner_image.jpeg";
import Engine from "../../assets/engine.png";
import Battery from "../../assets/accumulator.png";
import FullService from "../../assets/full-service.png";
import wire from "../../assets/wire.png";
import tyre from "../../assets/tires.png";
import water from "../../assets/water-rinse.png";
import Service  from "../../assets/Services.png";
import track from "../../assets/search.png"
import car from "../../assets/car.png"
import "./Home.css";

const Home = () => {
  return (
    <div className="container_fluid">
      <Header />
      <section className="hero-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 text-center banner_image">
              <img
                src={Banner}
                className="img-fluid"
                alt="Mechanic Illustration"
              />
            </div>

            <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
              <h1 className="fw-bold">
                Book Expert Mechanics <br />
                Near You Instantly
              </h1>
              <p className="text-muted mt-3">
                Certified car & bike mechanics available 24/7 for doorstep
                service.
              </p>

              <div className="card p-3 mt-4 shadow-sm">
                <div className="row g-2">
                  <div className="col-md-4">
                    <select className="form-select">
                      <option>Vehicle Type</option>
                      <option>Car</option>
                      <option>Bike</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <select className="form-select">
                      <option>Select Issue</option>
                      <option>Engine</option>
                      <option>Battery</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Location"
                    />
                  </div>
                </div>
              </div>

              <button className="btn btn-primary mt-4 px-4 py-2">
                Find Mechanic
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="container my-5">
        <h4 className="fw-bold mb-4">Popular Services</h4>

        <div className="row g-3 text-center">
          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <div
                  className=" bg-opacity-10 text-primary rounded-3 
                      d-flex align-items-center justify-content-center 
                      mb-2"
                  style={{ width: "60px", height: "60px" }}
                >
                  <img
                    src={Engine}
                    alt="image not found"
                    style={{ width: "60px", height: "60px" }}
                  />
                </div>
                <small className="fw-semibold text-center">Engine Repair</small>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <div
                  className="text-primary rounded-3 
                      d-flex align-items-center justify-content-center 
                      mb-2"
                  style={{ width: "60px", height: "60px" }}
                >
                  <img
                    src={Battery}
                    alt="image not found"
                    style={{ width: "60px", height: "60px" }}
                  />
                </div>
                <small className="fw-semibold">Battery Replacement</small>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <div
                  className=" text-primary rounded-3 
                      d-flex align-items-center justify-content-center 
                      mb-2"
                  style={{ width: "60px", height: "60px" }}
                >
                  <img
                    src={tyre}
                    alt=""
                    style={{ width: "60px", height: "60px" }}
                  />
                </div>
                <small className="fw-semibold">Tyre & Wheel</small>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <div
                  className=" text-primary rounded-3 
                      d-flex align-items-center justify-content-center 
                      mb-2"
                  style={{ width: "60px", height: "60px" }}
                >
                  <img
                    src={FullService}
                    alt="image not found"
                    style={{ width: "60px", height: "60px" }}
                  />
                </div>
                <small className="fw-semibold">Full Service</small>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <div
                  className=" text-primary rounded-3 
                      d-flex align-items-center justify-content-center 
                      mb-2"
                  style={{ width: "60px", height: "60px" }}
                >
                  <img
                    src={wire}
                    alt="image not found"
                    style={{ width: "60px", height: "60px" }}
                  />
                </div>
                <small className="fw-semibold">Electrical</small>
              </div>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-3 col-lg-2">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <div
                  className="text-primary rounded-3 
                      d-flex align-items-center justify-content-center 
                      mb-2"
                  style={{ width: "60px", height: "60px" }}
                >
                  <img
                    src={water}
                    alt="image not found"
                    style={{ width: "60px", height: "60px" }}
                  />
                </div>
                <small className="fw-semibold">Washing</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <h4 className="fw-bold mb-4">Top Mechanics</h4>

        <div className="row text-center g-4">
          
          <div className="col-12 col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body d-flex flex-column align-items-center">
                <div
                  className=" text-primary rounded-circle 
                       d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "70px", height: "70px" }}
                >
                <img src={car} alt="image not found" style={{width:"60px",height:"60px"}} />
                </div>
                <h6 className="fw-semibold">Choose your Vehicle</h6>
                <p className="text-muted small mb-0">
                  Select car or bike based on your requirement
                </p>
              </div>
            </div>
          </div>

       
          <div className="col-12 col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body d-flex flex-column align-items-center">
                <div
                  className=" text-primary rounded-circle 
                       d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "70px", height: "70px" }}
                >
                <img src={Service} alt="image not found" style={{width:"60px",height:"60px"}} />
                </div>
                <h6 className="fw-semibold">Select Issue / Service</h6>
                <p className="text-muted small mb-0">
                  Pick the issue and service you need
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body d-flex flex-column align-items-center">
                <div
                  className=" text-primary rounded-circle 
                       d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "70px", height: "70px" }}
                >
                <img src={track} alt="image not found" style={{width:"60px",height:"60px"}} />
                </div>
                <h6 className="fw-semibold">Book & Track Status</h6>
                <p className="text-muted small mb-0">
                  Book mechanic and track your service
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
