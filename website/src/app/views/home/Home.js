import React from 'react';
import './Home.css';

function Home() {
  return (
    <main>
      <div className="top-panel">
        <div className="top-left">
          <div className="image">
            <img src="https://illlustrations.co/static/74898b728451a18443001cffcfaf7834/119-working.png" alt="Person" />
          </div>
        </div>
        <div className="top-right">
          <div className="text">
            <h1>What is Commit the Change?</h1>
            <p>
              We are a student organization at UC Irvine focused on delivering
              high quality software for nonprofit organizations free of charge
              and promoting technology for social good in our community.
            </p>
            <button id="learn-more" type="button">Learn More</button>
          </div>
        </div>
      </div>
      <div className="bottom-panel">
        <h2>Students</h2>
        <p>Want to join the team?</p>
      </div>
    </main>
  );
}

export default Home;
