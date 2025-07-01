import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import GateTrackerLanding from './Screens/HomeScreen/HomeScreen';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GateTrackerLanding />} />
      </Routes>
    </Router>
  )
}

export default App;
