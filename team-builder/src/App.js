import React, { useState } from 'react';
import './App.css';

import Form from './Components/Form'
import TeamCard from './Components/TeamCard';

export default function App() {
  const teamMembers =[
    {
        name:"Mike",
        email:"info@mike-harley.com",
        role:"Boss"
    },

]

  const [teamUser, setTeamUser]=useState(teamMembers)
  const [memberToEdit, setMemberToEdit]=useState(null)

  return (
    <div className="App">
      <Form userInfo={teamUser} modifyUser={setTeamUser} editMember={memberToEdit}/>
      <div className='team-members'>
        <TeamCard userInfo={teamUser} setEdit={setMemberToEdit}/></div>
    </div>
  );
}
