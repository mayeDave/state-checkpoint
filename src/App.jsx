import './App.css'
import React, { useState, useEffect } from "react";

function App() {
  // State for the person and the toggle
  const [person, setPerson] = useState({
    fullName: "Maye Dave",
    bio: "A passionate developer with a love for creating impactful software solutions.",
    imgSrc: "https://media.licdn.com/dms/image/v2/D5603AQFzYsR_WtX6Vw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728295064102?e=1738195200&v=beta&t=A32m3hAuBhW0glMTBn6frasUVW_lkRoA-L_J4VrqlyY",
    profession: "Full-Stack Developer",
  });
  const [shows, setShows] = useState(false);

  // State for tracking time since component was mounted
  const [timeSinceMounted, setTimeSinceMounted] = useState(0);

  // Effect to track time since mount
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSinceMounted((prevTime) => prevTime + 1);
    }, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Maye's Profile</h1>

        {/* Toggle Button */}
        <button onClick={() => setShows(!shows)}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {/* Display Person Profile */}
        {shows && (
          <div className="profile">
            <img
              src={person.imgSrc}
              alt={`${person.fullName}'s profile`}
              style={{ width: "150px", borderRadius: "50%" }}
            />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h4>{person.profession}</h4>
          </div>
        )}

        {/* Time since mounted */}
        <p>Time since mounted: {timeSinceMounted} seconds</p>
      </header>
    </div>
  );
}

export default App;


