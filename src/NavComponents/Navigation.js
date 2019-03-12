import React, { Component } from 'react'
import { Link } from '@reach/router'
import { FaPrescriptionBottle, FaFingerprint } from 'react-icons/fa'
import { FiGrid, FiLogIn, FiLogOut, FiEdit } from 'react-icons/fi'


class Navigation extends Component {
  render(){

    const {user,logOutUser} = this.props;

    return(
      <nav className="site-nav family-sans navbar navbar-expand navbar-dark higher">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <FaPrescriptionBottle className="mr-1"/>RxBottle
          </Link>
          <div className="navbar-nav ml-auto">
              {user && (
                <span style={{display:'flex'}}>
                <Link className="nav-item nav-link" to="/set-dosage">
                   <FaFingerprint /> Dosage
                  </Link>
                  <Link className="nav-item nav-link" to="/dashboard">
                   <FiGrid /> Dashboard
                  </Link>
                  <Link className="nav-item nav-link"
                        to="/login"
                        onClick={e => logOutUser(e)}>
                    <FiLogOut /> Logout
                  </Link>
                </span>
              )}

              {!user && (
                <span style={{display:'flex'}}>
                  <Link className="nav-item nav-link" to="/login">
                    <FiLogIn /> Login
                  </Link>
                  <Link className="nav-item nav-link" to="/register">
                    <FiEdit /> Register
                  </Link>
                </span>
              )}

          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation
