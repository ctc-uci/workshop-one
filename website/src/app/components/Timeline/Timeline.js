import React from 'react';
import './Timeline.css';

function Timeline() {
  return (
    <div className="timeline">
      <div className="event">
        <p className="number">01</p>
        <div className="detail">
          <p className="event-title">APPLICATION</p>
          <p className="event-date">Due 10/6</p>
        </div>
      </div>
      <div className="event">
        <p className="number">02</p>
        <div className="detail">
          <p className="event-title">COFFEE CHAT</p>
          <p className="event-date">By 10/12</p>
        </div>
      </div>
      <div className="event">
        <p className="number">03</p>
        <div className="detail">
          <p className="event-title">DECISION</p>
          <p className="event-date">By 10/17</p>
        </div>
      </div>
    </div>
  );
}
export default Timeline;
