import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Header extends Component {
    render() {
        return (
         
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <Link className="navbar-brand" to="/">Student Portal</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/about-us"> About-Us<span className="sr-only">(current)</span></Link>
                </li>
                <Link className="nav-link" to="/sign-up"> Sign-Up<span className="sr-only">(current)</span></Link>
                </li>
               
               
              </ul>
              <form className="form-inline mt-2 mt-md-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Email" aria-label="Email"/>
              <input className="form-control mr-sm-2" type="text" placeholder="Password" aria-label="Password"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign In</button>
    </form>
  </div>
</nav>





        );
    }
}

export default Header;