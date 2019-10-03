import React from 'react';
import pic1 from '../images/pic1.JPG';
import pic2 from '../images/pic2.JPG';
const AboutUs =(props)=> {
    
        return (
            <div>
                <div className="w3-content" style={{'max-width': '1200px'}}>
                    <div className="w3-panel">
                        <i className="w3-xlarge faa fa-bars"></i>
                        </div>
                        {/* First Grid: Logo & About */}
                        <div className="w3-row">
                            <div className="w3-half w3-container">
                                <h1 className="w3-xxlarge w3-text-light-grey">Hello</h1>
                                <h1 className="w3-xxlarge w3-text-light-grey">We are</h1>
                                <h1 className="w3-jumbo">InShock</h1>
                                    </div>
                                    <div className="w3-half w3-container w3-large w3-text-grey">
                                        <p className="">We build design teams-we break things down and build it better
                                        we deliver the best of solution</p>
                                        </div>
                                        </div>

                                        {/* Second Grid: Resent */}
                                        <div className="w3-panel w3-text-grey">
                                            <h4>MOST RECENT WORK:</h4>
                                            </div>
                                            <div className="w3-half w3-container">
                                                <img src={pic2} style={{ width:'100%'}}/>
                                                </div>
                                                <div className="w3-half w3-container">
                                                    <img src={pic1} style={{ width: '100%'}}/>
                                                        <p className="w3-xlarge w3-text-grey">
                                                            Demos, logos, Reports, Names, Events, Media,
                                                            Wordpress, Google, Books, Optimisations</p>
                                                            </div>
                                                            </div>
                                                            </div>
           
                
            
        );
    }

export default AboutUs;