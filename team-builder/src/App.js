
import React, { useState } from 'react';
import './App.css';

 import Form from './Components/Form'
// import TeamCard from './Components/TeamCard';

function App() {
  // const data = [{name:String,email:String,role:String}]
    const[ name, setName ] = useState("Bill")
    const[ email, setEmail] =  useState("1234@1234.com")
    const[ role, setRole] = useState("Boss")
//  const changeHandler = input =>{
//    setTeam(`team.${input}.value`)
//  }
     

console.log(name)

 
 return (
      <>
      <Form  name = { setName() } email = { setEmail() } role = {setRole()} />  {/* changeHandler={changeHandler} */}
          
    
             <h1 className='name'>Name:{name}</h1>
            <h2 className='email'>email:{email}</h2>
            <h2 className='role'>Role:{role}</h2>
     </>
  );
 
}
export default App;