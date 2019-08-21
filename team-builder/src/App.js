import React, { useState } from 'react';
import './App.css';

import Form from './Components/Form'
import TeamCard from './Components/TeamCard';

export default function App() {
  const teamMembers =[
    {
        name:"",
        email:"",
        role:""
    },
    {
        name:"",
        email:"",
        role:""
    },
    {
        name:"",
        email:"",
        role:""
    }
]

  const [teamUser, setTeamUser]=useState(teamMembers)
  const [memberToEdit, setMemberToEdit]=useState(null)

  return (
    <div className="App">
      <Form userInfo={teamUser} modifyUser={setTeamUser} editMember={memberToEdit}/>
      <div className='team-members'><TeamCard userInfo={teamUser} setEdit={setMemberToEdit}/></div>
    </div>
  );
}
