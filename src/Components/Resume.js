import React from 'react'

function Resume(){
return(
    <div id="resume" >
    <div className="card card-body bg-success text-white py-5">
      <h2>My Resume & My Transcript</h2>
      <h6><a href="https://drive.google.com/open?id=14hXS_sKno1IDo1HTyu2IpvO48C-Zz7q0" style={{ color: '#FFF' }}>Get My Resume</a></h6>
      <h6><a href="https://drive.google.com/open?id=1dqK4j7CS7pJs455e3Mrg8egCVTsJ2drG" style={{ color: '#FFF' }}>Get My Transcript</a></h6>
    </div>

    <div className="card card-body py-5">
      <h3>Where have I worked?</h3>
      <p>These are the worked experience i have gained so far.</p>
      <div className="card-deck">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Crazy Cafe Studio</h4>
            <p className="card-text">My task was to build their website</p>
            <p className="p-2 mb-3 bg-dark text-white">
              Position: Web Developer
            </p>
            <p className="p-2 mb-3 bg-dark text-white">
              Phone: +8801719444952
            </p>
          </div>
          <div className="card-footer">
            <h6 className="text-muted">Dates: 02/2019 – 05/2019</h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Asia Pacific University</h4>
            <p className="card-text">My task was to create new student profile</p>
            <p className="p-2 mb-3 bg-dark text-white">
              Position: Student Helper
            </p>
            <p className="p-2 mb-3 bg-dark text-white">
              Phone: +603 8996 1000
            </p>
          </div>
          <div className="card-footer">
            <h6 className="text-muted">Dates: 01/2017 - 01/2018</h6>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Asia Pacific University</h4>
            <p className="card-text">My task was to update library Database</p>
            <p className="p-2 mb-3 bg-dark text-white">
              Position: Library Assistant
            </p>
            <p className="p-2 mb-3 bg-dark text-white">
              Phone: +603 8996 1000
            </p>
          </div>
          <div className="card-footer">
            <h6 className="text-muted">Dates: 02/2018 - 08/2018</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}
export default Resume;