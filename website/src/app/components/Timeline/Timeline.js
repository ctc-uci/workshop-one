import React, { useState } from 'react';
import './Timeline.css';
import {
  animated, useTrail,
} from 'react-spring';
import VisibilitySensor from 'react-visibility-sensor';
import animationConfig from '../../views/animationConstants';

function Timeline() {
  const [viewCount, set] = useState(0);

  const timeline = [
    <div>
      <p className="number">01</p>
      <div className="detail">
        <p className="event-title">APPLICATION</p>
        <p className="event-date">Due 10/10</p>
      </div>
    </div>,
    <div>
      <p className="number">02</p>
      <div className="detail">
        <p className="event-title">COFFEE CHAT</p>
        <p className="event-date">10/12 - 10/16</p>
      </div>
    </div>,
    <div>
      <p className="number">03</p>
      <div className="detail">
        <p className="event-title">DECISION</p>
        <p className="event-date">By 10/18</p>
      </div>
    </div>,
  ];

  const trailAnimation = useTrail(timeline.length, animationConfig.scale(viewCount > 0));

  return (
    <VisibilitySensor onChange={(isVisible) => { if (isVisible) set(viewCount + 1); }}>
      <div className="timeline">
        {trailAnimation.map((props, index) => (
          <animated.div className="event" style={props}>
            {timeline[index]}
          </animated.div>
        ))}
      </div>
    </VisibilitySensor>
  );
}
export default Timeline;
