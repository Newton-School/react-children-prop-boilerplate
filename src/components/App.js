import React, { useState, useEffect } from "react";

/*Child component here*/

/*------*/

const ParentComponent = () => {
  const [currTime, setCurrTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => setCurrTime(new Date()), 300);
  }, []);
  return (
    <div>
    </div>
  );
};

const App = () => {
  return (
    <div className="center">
      <h4>Current Time</h4>
      <ParentComponent />
    </div>
  );
};

export default App;
