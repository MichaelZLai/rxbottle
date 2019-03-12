import React, { Component } from 'react'
import Switch from 'react-switch'
import firebase from '../Firebase'


class Dosage extends Component {

  constructor(props) {
    super(props)

    this.state = {
      newDose: '',
      checked: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDosage = this.handleDosage.bind(this)
  }

  // Setting Fingerprint changes and usage
  handleChange(checked){

    this.setState({ checked })

    var fingerRef = firebase.database().ref('fingerprint')
    fingerRef.update({
      set_finger: checked,
      set_finger_date: firebase.database.ServerValue.TIMESTAMP
    })

  }

  // Setting Dosage changes
  handleDosage(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  // Setting Dosage number
  handleSubmit(e){
    e.preventDefault()

    var dosageRef = firebase.database().ref('dosage')
    dosageRef.update({
      dose: this.state.newDose,
      dose_update_date: firebase.database.ServerValue.TIMESTAMP
    })

    this.setState({
      newDose: ''
    })

  }

  render(){


    return(
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <h1 className="font-weight-light mb-4">Dosage</h1>
            <div className="row">
              <div className="col-md-5">
                <p>Register New Fingerprint</p>
                <Switch onChange={this.handleChange} checked={this.state.checked} />
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-5">
                <div className="form-group">
                  <label htmlFor="readOnlyDose">Current Dosage</label>
                  <input className="form-control" type="text" placeholder={this.props.dose} readOnly />
                </div>
              </div>
              <div className="col-md-5">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="dosageAmt">Dosage Amount</label>
                    <input id="dosageAmt" onChange={this.handleDosage} name="newDose" value={this.state.newDose} className="form-control" aria-describedby="dosageAmtBlock" />
                    <small id="dosageAmtBlock" className="form-text text-muted">Your dosage must be within 1-8 hours</small>
                    <button type="submit" className="btn btn-primary mt-2">Set Dosage</button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Dosage
