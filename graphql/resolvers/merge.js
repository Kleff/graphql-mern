const Event = require('../../models/event');
const User = require('../../models/user');
const { dateToString } = require('../../helpers/date');


const events = async eventsIds => {
  const events = await Event.find({_id: {$in: eventsIds }});
  try {
    return events.map(event => transformEvent(event));
  } catch( err){
    throw err;
  }
}

const singleEvent = async (eventId) => {
  try {
    const event = await Event.findById({ _id: eventId});
    return transformEvent(event);
  } catch (err) {
    throw err
  }
}

const user = async userId => {
  const user = await User.findById(userId)
  try {
    return {
      ...user._doc,
      _id:user.id,
      createdEvents: events.bind(this, user._doc.createdEvents)
    };
  }catch(err){
    console.log(err)
  }
}

const transformBooking = booking => {
  return {
    ...booking._doc,
    _id: booking.id,
    user: user.bind(this, booking._doc.user),
    event: singleEvent.bind(this, booking._doc.event),
    createdAt: dateToString(booking._doc.createdAt),
    updatedAt: dateToString(booking._doc.updatedAt)
  }
}

const transformEvent = (event) => {
  return {
      ...event._doc,
      _id: event.id,
      date: dateToString(event._doc.date),
      creator: user.bind(this, event.creator)
  };
}

exports.transformEvent = transformEvent;
exports.transformBooking = transformBooking;

// exports.user = user;
// exports.events = events;
// exports.singleEvent = singleEvent;
