import React, { useState } from "react";
import services from "./services";
import "./styles.css";
import Tabs from "./Tabs";

export default function App() {
  return (
    <div className="App">
      <h1>SqueakyClean Laundromat </h1>
      <h2>We take the dirty work out of laundry!</h2>
      <Tabs services={services} />
    </div>
  );
}
