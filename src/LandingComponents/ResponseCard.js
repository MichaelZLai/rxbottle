import React, { Component } from 'react'
import Timestamp from 'react-timestamp'


class ResponseCard extends Component {

  render(){

    const {responses} = this.props
    let myResponses

    if (responses) {
      return (myResponses = responses.map((item, i, arr) =>{
        if(arr.length - 4 <= i){
          return(
            <div className="col-md-3" key={item.answer}>
              <div className="card bg-light">
                <div className="card-body text-left">
                {arr.length - 1 === i ? (
                  <h5 className="card-title">Latest Response</h5>
                ) : (
                  <h5 className="card-title">Response</h5>
                )}
                <h6 className="card-subtitle text-muted">Category: {item.category}</h6>

                <Timestamp className="timestamp" time={item.date} format='ago' />
                <p className="card-text">{item.answer}</p>
                </div>
              </div>
            </div>
          )
        }
      })
    )
    }

    return(
      <div>
          {myResponses}
      </div>
    )
  }
}

export default ResponseCard
