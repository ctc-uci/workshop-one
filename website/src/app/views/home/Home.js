import React from 'react';
import './Home.css';

function Home() {
  return (
    <main>
      <div className="top-left">
        <div className="image">
          <img src="https://illlustrations.co/static/74898b728451a18443001cffcfaf7834/119-working.png" alt="Person" />
        </div>
      </div>
      <div className="top-right">
        <div className="text">
          <h1>Commit the Change</h1>
          <p>
            We are a student organization at UC Irvine with a passion for
            technology and community service. Our team of student designers
            and engineers work to create sleek, modern websites for nonprofit
            organizations, completely free of charge!
          </p>
          <button id="learn-more" type="button">Learn More</button>
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
