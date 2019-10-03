import React, { Component } from 'react';
import Header from '../header/Header';
import SignUp from '../SignUp/SignUp';
import AboutUs from './../../AboutUs/AboutUs';
import {Route} from 'react-router-dom';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header/>

                <Route path="/sign-up" component={SignUp}/>
                <Route path="/about-us" component={AboutUs}/>
                <Route exact path="/" component={SignUp}/>
                
            </div>
        );
    }
}

export default Layout;