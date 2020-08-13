import React from 'react';
import './Home.css';

function Home() {
  return (
    <div>
      <main>
        <img src="https://illlustrations.co/static/74898b728451a18443001cffcfaf7834/119-working.png" alt="" />
        <div className="right">
          <h1>Commit the Change</h1>
          <p>
            We are a student organization at UC Irvine with a passion for
            technology and community service. Our team of student designers
            and engineers work to create sleek, modern websites for nonprofit
            organizations, completely free of charge!
          </p>
          <button id="learn-more" type="button">Learn More</button>
        </div>
        <div className="bottom-panel">
          <h2>Connect with Us</h2>
          <p>Join us on our mission to create Tech with Purpose</p>
          <div className="logoborder">
            <a href="https://facebook.com" aria-label="Facebook URL"><i className="fa fa-facebook" /></a>
            <a href="https://instagram.com" aria-label="Instagram URL"><i className="fa fa-instagram" /></a>
            <a href="https://linkedin.com" aria-label="Linkedin URL"><i className="fa fa-linkedin" /></a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
