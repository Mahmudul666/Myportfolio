import React from 'react'

function HomeChild (){
return(
    
    <div className="card card-body py-5">
      <h3>My Skills</h3>
      <p>These are my true skills gained by developing different project, solving problems and go through different tutorials </p>
      <hr/>
      <h4>HTML & CSS</h4>
      
      <div className="progress mb-3">
        <div className="progress-bar bg-success" style={{width: "100%"}}></div>
      </div>
      <h4>JavaScript</h4>
      <div className="progress mb-3">
        <div className="progress-bar bg-success"  style={{width: "75%"}}></div>
      </div>
      <h4>React</h4>
      <div className="progress mb-3">
        <div className="progress-bar bg-success" style={{width: "75%"}}></div>
      </div>
      <h4>Java</h4>
      <div className="progress mb-3">
        <div className="progress-bar bg-success" style={{width: "70%"}}></div>
      </div>
      <h4>Android</h4>
      <div className="progress mb-3">
        <div className="progress-bar bg-success" style={{width: "70%"}}></div>
      </div>
    </div>
  
)
}
export default HomeChild;