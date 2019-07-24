import React from 'react';
import { useState } from "react";
import { teamData } from "./teamData";
import SignupForm from "./components/Form";

import './App.css';

function App() {
  const [team, setTeam]= useState([])
 
  return (
    <div className="App">
      <header className="App-header">
        List of team members
      </header>
      {console.log(teamData)
      }
      <div>
        {teamData.map((person, index)=>{
          return <h1>{person.name}</h1>

        })}
      </div>
      <SignupForm/>
      
    </div>
  );
}

export default App;
