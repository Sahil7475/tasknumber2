import React from "react";
import Userdata from "./Userdata";

export default function User(props) {
  
  
    return (
    <>
      <div className="container con">
      <div className="row">
          
         
              {props.user.map((users)=>{
                  return(
                    <div className="col-md-4">
                    <Userdata users={users} key={users.id} getUsers={props.getUsers}/>
                    </div>
                  )
              })}
        
          
         
          
      </div>
      </div>
     
    </>
  );
}
