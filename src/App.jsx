import "./App.css";
import { Navbar } from "./pages/Navbar";
import { Home } from "./pages/Home";
import React from 'react';

import { PhoneCard } from "./pages/PhoneCard";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <PhoneCard />
    </>
  );
}

export default App;
