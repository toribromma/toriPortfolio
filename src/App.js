import React from "react";
import { About } from "./components/About/About";
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Resume } from "./components/Resume/Resume";

function App() {
  return (
    <div>
    <Navbar/>
    <Header/>
    <About/>
    <Resume/>
    
    </div>
  );
}

export default App;
