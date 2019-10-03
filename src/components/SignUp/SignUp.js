import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        return (
            
            <form className="signup-form">
                <h1>Sign Up</h1>
                <h5>Its quick and Easy</h5>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputFirstName4">FirstName</label>
                <input type="email" className="form-control" id="inputFirstName4" placeholder="FirstName"/>
              </div>
              <div className="form-group col-md-6">
                <label for="inputLastName4">LastName</label>
                <input type="password" className="form-control" id="inputPassword4" placeholder="LastName"/>
              </div>
            </div>
            <div className="form-group">
              <label for="inputAge">Age</label>
              <input type="text" className="form-control" id="inputAge" placeholder=""/>
            </div>
            <div className="form-group">
              <label for="inputTelephone">Telephone</label>
              <input type="email" className="form-control" id="inputEmail" 
              placeholder=""/>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label for="inputEmail">Email</label>
                  <input type="Password" className="form-control" id="inputPassword"/>
                </div>
                <div className="form-group col-md-4">
                  <label for="inputPasword">Password</label>
                  <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label for="inputZip">Zip</label>
                  <input type="text" className="form-control" id="inputZip"/>
                </div>
              </div>
              <div className="form-group">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Sign in</button>
            
          </form>
                
        );
    }
}

export default SignUp;