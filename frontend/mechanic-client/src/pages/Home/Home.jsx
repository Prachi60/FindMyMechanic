import React from 'react'
import Header from '../../component/Header/Header'
import Banner from "../../assets/banner_image.jpeg"

import "./Home.css"

const Home = () => {
  return (
    <div className='container_fluid'>
        <Header/>
<section class="hero-section py-5">
  <div class="container">
    <div class="row align-items-center">
  <div class="col-lg-6 col-md-12 text-center banner_image">
        <img 
          src={Banner}
          class="img-fluid"
          alt="Mechanic Illustration"
        />
      </div>
     
      <div class="col-lg-6 col-md-12 mb-4 mb-lg-0">
        <h1 class="fw-bold">
          Book Expert Mechanics <br />
          Near You Instantly
        </h1>
        <p class="text-muted mt-3">
          Certified car & bike mechanics available 24/7 for doorstep service.
        </p>

     
        <div class="card p-3 mt-4 shadow-sm">
          <div class="row g-2">
            <div class="col-md-4">
              <select class="form-select">
                <option>Vehicle Type</option>
                <option>Car</option>
                <option>Bike</option>
              </select>
            </div>
            <div class="col-md-4">
              <select class="form-select">
                <option>Select Issue</option>
                <option>Engine</option>
                <option>Battery</option>
              </select>
            </div>
            <div class="col-md-4">
              <input type="text" class="form-control" placeholder="Location"/>
            </div>
          </div>
        </div>

        <button class="btn btn-primary mt-4 px-4 py-2">
          Find Mechanic
        </button>
      </div>


     

    </div>
  </div>
</section>


    </div>
  )
}

export default Home