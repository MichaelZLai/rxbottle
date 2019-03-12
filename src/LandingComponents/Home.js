import React, { Component } from 'react'
import {Link} from '@reach/router'

import rxbottle from '../images/rxbottle.png';

class Home extends Component {
  render(){

    const {user,displayName} = this.props;

    const biggerLead = {
      fontSize: 1.2 + 'em',
      fontWeight: 200
    }

    return(
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-md-10 col-lg-8 col-xl-7">
            <img src={rxbottle} className="App-logo" alt="logo" />
            <div className="display-4 text-primary mt-3 mb-2"
                 style={{fontSize: 2.3 + 'em'}}>
              Hi {displayName}, welcome to RxBottle!
            </div>
            <p className="lead" style={biggerLead}>
              We've saved all your responses to your smart pill bottle in the dashboard.
            </p>

              {user ==  null && (
                <span>
                  <Link to="/register" className="btn btn-outline-primary mr-2">
                    Register
                  </Link>
                  <Link to="/login" className="btn btn-outline-primary mr-2">
                    Log In
                  </Link>
                </span>
              )}

              {user && (
                <span>
                  <Link to="/set-dosage" className="btn btn-primary mr-2">
                    Set Dosage
                  </Link>
                  <Link to="/dashboard" className="btn btn-primary mr-2">
                    Go to Dashboard
                  </Link>
                </span>
              )}

          </div> {' '}
          {/* columns */}
        </div>
      </div>
    )
  }
}

export default Home
