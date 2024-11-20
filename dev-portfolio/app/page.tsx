import React from "react";

import Nav from "./Components/Nav";
import Float from "./Components/Ui/Float";
import Body from "./Components/Body";
import About from "./Components/About";

export default function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-black overflow-hidden text-white">
      <Nav/>
      
      <Body/>
      <About/>
    </div>
  );
}
