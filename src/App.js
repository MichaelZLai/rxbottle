import React, { Component } from 'react'
import { Router, navigate } from '@reach/router'
import firebase from './Firebase'

import './css/App.css';

import Home from './LandingComponents/Home'
import Navigation from './NavComponents/Navigation'
import Login from './RegisterComponents/Login'
import Register from './RegisterComponents/Register'
import Dashboard from './LandingComponents/Dashboard'
import Dosage from './LandingComponents/Dosage'


class App extends Component {

  constructor(){
    super();
    this.state = {
      user: null,
      displayName: null,
      userID: null
    }
  }

  componentDidMount(){
    // Checks if authorized user is logged in
    firebase.auth().onAuthStateChanged(FBUser => {
      if (FBUser) {
        this.setState({
          user: FBUser,
          displayName: FBUser.displayName,
          userID: FBUser.uid
        })

        // REFERENCE FOR DOSAGE DB
        const dosageRef = firebase.database().ref('dosage')

        // SET DOSE & FINGER
        dosageRef.on('value', snapshot => {
          this.setState({
            dose: snapshot.val().dose,
            setFinger: snapshot.val().set_finger
          })
        }, errorObject => {
            console.log("The read failed " + errorObject.code)
        })

        // REFERENCE FOR RESPONSE DB
        const responseRef = firebase.database().ref('response')

        // PARSING THROUGH RESPONSE DB
        responseRef.on('value', snapshot =>{
          let responses = snapshot.val()
          let responsesList = []
          let memoryArr = []
          let painArr = []
          let hungerArr = []
          let moodArr = []
          let personalityArr = []
          let sleepArr = []

          for (let item in responses){
            responsesList.push({
              answer: responses[item].answer,
              category: responses[item].category,
              date: responses[item].date,
              question: responses[item].question,
              sentiment: responses[item].sentiment
            })

            if (responses[item].category === "pain") {
              if (responses[item].sentiment === "good"){
                painArr.push({
                  label: new Date(responses[item].date).toDateString(),
                  displayValue: responses[item].sentiment,
                  value: 1
                })
              } else if (responses[item].sentiment === "bad"){
                painArr.push({
                  label: new Date(responses[item].date).toDateString(),
                  displayValue: responses[item].sentiment,
                  value: 0
                })
              }
            } else if (responses[item].category === "memory") {
              if (responses[item].sentiment === "good"){
                memoryArr.push({
                  label: new Date(responses[item].date).toDateString(),
                  displayValue: responses[item].sentiment,
                  value: 1
                })
              } else if (responses[item].sentiment === "bad"){
                memoryArr.push({
                  label: new Date(responses[item].date).toDateString(),
                  displayValue: responses[item].sentiment,
                  value: 0
                })
              }
            } else if (responses[item].category === "hunger") {
              if (responses[item].sentiment === "good"){
                hungerArr.push({
                  label: new Date(responses[item].date).toDateString("MM/dd/yyyy"),
                  displayValue: responses[item].sentiment,
                  value: 1
                })
              } else if (responses[item].sentiment === "bad"){
                hungerArr.push({
                  label: new Date(responses[item].date).toDateString("MM/dd/yyyy"),
                  displayValue: responses[item].sentiment,
                  value: 0
                })
              }
            } else if (responses[item].category === "mood") {
              if (responses[item].sentiment === "good"){
                moodArr.push({
                  label: new Date(responses[item].date).toDateString(),
                  displayValue: responses[item].sentiment,
                  value: 1
                })
              } else if (responses[item].sentiment === "bad"){
                moodArr.push({
                  label: new Date(responses[item].date).toDateString(),
                  displayValue: responses[item].sentiment,
                  value: 0
                })
              }
            } else if (responses[item].category === "personality") {
              if (responses[item].sentiment === "good"){
                personalityArr.push({
                  label: new Date(responses[item].date).toDateString(),
                  displayValue: responses[item].sentiment,
                  value: 1
                })
              } else if (responses[item].sentiment === "bad"){
                personalityArr.push({
                  label: new Date(responses[item].date).toDateString(),
                  displayValue: responses[item].sentiment,
                  value: 0
                })
              }
            } else if (responses[item].category === "sleep") {
              if (responses[item].sentiment === "good"){
                sleepArr.push({
                  label: new Date(responses[item].date).toDateString(),
                  displayValue: responses[item].sentiment,
                  value: 1
                })
              } else if (responses[item].sentiment === "bad"){
                sleepArr.push({
                  label: new Date(responses[item].date).toDateString(),
                  displayValue: responses[item].sentiment,
                  value: 0
                })
              }
            }

            this.setState({
              responses: responsesList,
              painArr: painArr,
              memoryArr: memoryArr,
              hungerArr: hungerArr,
              moodArr: moodArr,
              personalityArr: personalityArr,
              sleepArr: sleepArr,
            })
          }

        }, errorObject => {
            console.log("The read failed " + errorObject.code)
        })


      } else {
        this.setState({user: null})
      }
    })
  }

  registerUser = userName => {
    firebase.auth().onAuthStateChanged(FBUser => {
      FBUser.updateProfile({
        displayName: userName
      })
      .then(() => {
      this.setState({
        user: FBUser,
        displayName: FBUser.displayName,
        userID: FBUser.uid
      })
      navigate('/')
    })
  })
  }

  logOutUser = e =>{
    e.preventDefault()
    this.setState({
      displayName: null,
      userID: null,
      user: null
    })

    firebase.auth().signOut().then(() =>{
      navigate('/login')
    })
  }

  render() {
    return (
      <div>
        <Navigation user={this.state.user} logOutUser={this.logOutUser} />
        {/* //If we want a welcome component
              {this.state.user && <Welcome userName={this.state.displayName} logOutUser={this.logOutUser}/>}
          */}
        <Router>
          <Home path="/" user={this.state.user}
                         displayName={this.state.displayName}
          />
          <Login path="/login" />
          <Dashboard path="/dashboard"
                    answer={this.state.answer}
                    userID={this.state.userID}
                    adminUser={this.state.userID}
                    responses={this.state.responses}
                    painArr={this.state.painArr}
                    personalityArr={this.state.personalityArr}
                    memoryArr={this.state.memoryArr}
                    hungerArr={this.state.hungerArr}
                    moodArr={this.state.moodArr}
                    sleepArr={this.state.sleepArr}
          />
          <Dosage path="/set-dosage"
                  dose={this.state.dose}
                  checked={this.state.setFinger}
          />
          <Register path="/register" registerUser={this.registerUser}/>
        </Router>
      </div>
    );
  }
}

export default App;
