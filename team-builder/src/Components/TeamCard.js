import React from 'react';

const TeamCard = (props) => {

    return (
        props.userInfo.map((person,index) =>(<RenderTeam key={index} person={person} editButton={props.setEdit}/>) )
    );
}

function RenderTeam(props){
const {name, email, role} = props.person;

return(

    <div className="team-member">
        <div>Name: 
        {name}</div>
        <br/>
        <div>Email: 
        {email}</div>
        <br/>
        <div>Role: 
        {role}</div>
        <br/>
        <button onClick={()=> props.editButton(props.person)}>Edit</button>
    </div>   
    )

};

export default TeamCard;