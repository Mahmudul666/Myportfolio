import React from 'react'

function Contact (){
return(
  <div id="contact" >
  <div className="card card-body bg-danger text-white py-5">
    <h2>Contact</h2>
    <h4>Email : mahmudulhaque666@gmail.com</h4>
    <h4>Phone No : +60109765957</h4>
  </div>

  <div className="card card-body py-5">
    <h3>Get in touch</h3>
    <h5>Feel Free to leave a message for me. Thank you very much for your visit.</h5>
    <form>
      <div className="form-group">
        <div className="input-group input-group-lg">
          <span className="input-group-addon bg-danger text-white">
            {/* <i className="fa fa-user"></i> */}
          </span>
          <input type="text" className="form-control bg-dark text-white" placeholder="Name"/>
        </div>
      </div>
      <div className="form-group">
        <div className="input-group input-group-lg">
          <span className="input-group-addon bg-danger text-white">
          {/* <i className="fa fa-envelope"></i> */}
          </span>
          <input type="email" className="form-control bg-dark text-white" placeholder="Email"/>
        </div>
      </div>
      <div className="form-group">
        <div className="input-group input-group-lg">
          <span className="input-group-addon bg-danger text-white">
            {/* <i className="fa fa-pencil"></i> */}
          </span>
          <textarea rows="5" className="form-control bg-dark text-white" placeholder="Message"></textarea>
        </div>
      </div>
      <input type="submit" value="Submit" className="btn btn-danger btn-block btn-lg"/>
    </form>
  </div>
</div>
)
}
export default Contact;