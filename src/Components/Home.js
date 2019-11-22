import React from 'react'
import HomeChild from './HomeChild'

function Home (){
return(
    <div id="home" className="collapse show">
    <div className="card card-body bg-primary text-white py-5">
      <h2>Welcome to my page</h2>
      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis, quia.</p>
    </div>
    <HomeChild/>
  </div>
)
}
export default Home;