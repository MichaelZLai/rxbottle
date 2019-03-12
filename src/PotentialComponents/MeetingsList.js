import React, { Component } from 'react'
import firebase from '../Firebase'
import {GoTrashcan} from 'react-icons/go'

class MeetingsList extends Component {

  constructor(props){
    super(props)
    this.deleteMeeting = this.deleteMeeting.bind(this)
  }

  deleteMeeting = (e, whichMeeting) => {
    e.preventDefault()
    const setFingerRef = firebase
        .database()
        .ref(`dosage/set_finger`)

    ref.remove()
  }

  render(){
    // Sets if the current user is the admin of post
    const admin = this.props.adminUser === this.props.userID ? true : false
    const {meetings} = this.props;
    // Loops through firebase for associated meetings
    const myMeetings = meetings.map(item =>{
      return(
        <div className="list-group-item d-flex" key={item.meetingID}>

          <section className="btn-group align-self-center" role="group" aria-label="Meeting Option">
            <button className="btn btn-sm btn-outline-secondary"
                    title="Delete Meeting"
                    onClick={e => this.deleteMeeting(e, item.meetingID)}>
              <GoTrashcan />
            </button>
          </section>


          <section className="pl-3 text-left align-self-center">
            {item.meetingName}
          </section>
        </div>
      )
    })

    return(
      <div>
        {myMeetings}
      </div>
    )
  }
}

export default MeetingsList
