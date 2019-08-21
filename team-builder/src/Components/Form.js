import React from 'react'

const Form =(props)=>{

console.log(props)


    return(
        
         <div className="form">
         <form>
           <h1>My Team List</h1>
           <label>
               Name:
               <input type="text" key={props.name} onChange={props.setName} />
               <button onClick={props.setName}>Enter</button>
               </label>       
              <label>
                 Email:
                 <input type="text" key={props.email} onChange={props.setEmail}  />
                 <button onClick={props.setEmail}>Enter</button>
              </label>
<label>
    Role:
    <input type="text" key={props.role} onChange={props.setRole}   />
    <button onClick={props.setRole}>Enter</button>
</label>

        </form>



        </div>
        
   
    )
    
}
export default Form