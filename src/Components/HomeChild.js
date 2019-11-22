import React from 'react'

function HomeChild (){
return(
    
    <div className="card card-body py-5">
      <h3>My Skills</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nulla et, modi harum hic deserunt.</p>
      <hr/>
      <h4>HTML</h4>
      
      <div className="progress mb-3">
        <div className="progress-bar bg-success" style={{width: "100%"}}></div>
      </div>
      <h4>CSS</h4>
      <div className="progress mb-3">
        <div className="progress-bar bg-success"  style={{width: "75%"}}></div>
      </div>
      <h4>JavaScript</h4>
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