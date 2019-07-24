import React from 'react';
import { useState } from "react";
import { teamData } from "./teamData";
import SignupForm from "./components/Form";
import Member from "./components/Member";

import './App.css';

function App() {
  const [team, setTeam]= useState([]);
  const addTeamMember = (member) => {
    return setTeam([...team,member])
  }
  let addToTeamList = team.map(singleTeamMember =>
    <Member key={singleTeamMember.email} teamData={singleTeamMember}/>
   );
 
  return (
    <div className="App">
    <h1>team members</h1>
    <SignupForm addTeamMember={addTeamMember} />
    <div>{addToTeamList}</div>
      
    </div>
  );
};
export default App;




