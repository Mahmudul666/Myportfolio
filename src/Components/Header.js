import React from 'react'
import myimg from '../image/myimg.jpg'


function Header (props){

    return(
        <header id="main-header">
        <div className="row no-gutters">
        <div className="col-lg-4 col-md-5">
            <img src={myimg}/>
          </div>
          <div className="col-lg-8 col-md-7">
            <div className="d-flex flex-column">
              <div className="p-5 bg-dark text-white"/>
                <div className="name d-flex flex-row justify-content-between align-items-center">
                  <h1 className="display-4">Mahmudul Haque</h1>
                  <div><i className="fa fa-linkedin"></i></div>
                  <div><i className="fa fa-facebook"></i></div>
                  <div><i className="fa fa-google"></i></div>
                  <div><i className="fa fa-github"></i></div>
                </div>
              </div>
  
              <div className="p-4 bg-black">
                Junior Web Developer
              </div>
  
              <div>
                <div className="d-flex flex-row text-white align-items-stretch text-center">
                  <div className="port-item p-4 bg-primary" data-toggle="collapse" data-target="#home" onClick={props.click}>
                    <i className="fa fa-home d-block"></i> Home
                  </div>
                  <div className="port-item p-4 bg-success" data-toggle="collapse" data-target="#resume">
                    <i className="fa fa-graduation-cap d-block"></i> Resume
                  </div>
                  <div className="port-item p-4 bg-warning" data-toggle="collapse" data-target="#work">
                    <i className="fa fa-folder-open d-block"></i> Work
                  </div>
                  <div className="port-item p-4 bg-danger" data-toggle="collapse" data-target="#contact">
                    <i className="fa fa-envelope d-block"></i> Contact
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          </header>
    )
}
export default Header;