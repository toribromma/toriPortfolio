import React from "react";
import { About } from "./components/About/About";
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Projects } from "./components/Projects/Projects";
import { Resume } from "./components/Resume/Resume";

function App() {
  
  return (
    <div>
    <Navbar/>
    <Header/>
    <About 
    id="section1"
    />
    <Resume
    id="section2"
    />
    <Projects/>
    
    </div>
  );
}

export default App;
