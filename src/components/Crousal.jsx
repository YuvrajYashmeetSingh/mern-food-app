import React from 'react'

const Crousal = () => {
  return (
    <div>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div class="carousel-inner"  id="carousel ">
    <div className='carousel-caption' style={{"zIndex":"5"}}>
    <form className="d-flex my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-info  m-2  text-white bg-info" type="submit">Search</button>
    </form>
    </div>
    <div class="carousel-item active">
      <img src="https://source.unsplash.com/random/900×700/?pizza" class="d-block w-100" alt="..." style={{filter:"brightness(30%)"}}/>
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?pasta" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://source.unsplash.com/random/900×700/?burger" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Crousal