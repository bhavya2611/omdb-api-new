import React from "react";
import { Router } from "@reach/router";
import HomeScreen from "./Screens/HomeScreen";
// import DetailsScreen from "./Screens/DetailsScreen";

function App() {
  return (
    <Router>
      <HomeScreen path="/" />
      {/* <DetailsScreen path="/Details/:id" /> */}
    </Router>
  );
}

export default App;
