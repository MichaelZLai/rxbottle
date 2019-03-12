import React, { Component } from 'react'

import ResponseCard from './ResponseCard'

import MemoryLine from '../ChartComponents/MemoryLine'
import HungerLine from '../ChartComponents/HungerLine'
import MoodLine from '../ChartComponents/MoodLine'
import PainLine from '../ChartComponents/PainLine'
import PersonalityLine from '../ChartComponents/PersonalityLine'
import SleepLine from '../ChartComponents/SleepLine'


class Dashboard extends Component {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e){
    const itemName = e.target.name
    const itemValue = e.target.value

    this.setState({[itemName]: itemValue})
  }


  render() {

    return(
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <h1 className="font-weight-light mb-4">Dashboard</h1>
            <h3 className="dashboard-title">Most Recent Responses</h3>
            <div className="row">
              <ResponseCard responses={this.props.responses}/>
            </div>

            <h3 className="dashboard-title">Sentiment Graphs</h3>
            <div className="row mt-6">
              <div className="col-md-4 graph-container">
                <MemoryLine memoryArr={this.props.memoryArr}/>
              </div>
              <div className="col-md-4 graph-container">
                <HungerLine hungerArr={this.props.hungerArr}/>
              </div>
              <div className="col-md-4 graph-container">
                <MoodLine moodArr={this.props.moodArr}/>
              </div>
            </div>

            <div className="row mt-8 bottom-graphs">
              <div className="col-md-4 graph-container">
                <PainLine painArr={this.props.painArr}/>
              </div>
              <div className="col-md-4 graph-container">
                <PersonalityLine personalityArr={this.props.personalityArr}/>
              </div>
              <div className="col-md-4 graph-container">
                <SleepLine sleepArr={this.props.sleepArr}/>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard
