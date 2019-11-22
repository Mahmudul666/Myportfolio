import React from 'react'
import HomeChild from './HomeChild'

function Home (){
return(
    <div id="home" className="collapse show">
    <div className="card card-body bg-primary text-white py-5">
      <h2>Welcome to my page</h2>
      <p className="lead">Looking for a position that will allow me to learn, gain knowledge and have a different work experience within a team and to gain experience in software & IT field to provide excellence in software services.</p>
    </div>
    <HomeChild/>
  </div>
)
}
export default Home;