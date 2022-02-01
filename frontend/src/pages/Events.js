import React, { Component } from 'react';

import Modal from '../components/Modal/Modal';
import Backdrop from '../components/Backdrop/Backdrop';
import './Events.css';

class EventsPage extends Component {
  state = {
    creating: false
  };

  startCreateEventHandler = () => {
    this.state({creating: true})
  }
  
  render() {
    return (
      <>
        {this.state.creating && <Backdrop></Backdrop>}
        {this.state.creting && <Modal title="Add Event" canCancel canConfirm >
          <p>Modal Content</p>
        </Modal>
        }
        <div className="events-control">
          <p>Share your own Events!</p>
          <button className="btn" onClick={this.startCreateEventHandler}>Create Event</button>
        </div>
      </>
    )
  }
}

export default EventsPage;