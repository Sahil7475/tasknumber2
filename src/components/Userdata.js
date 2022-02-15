import React from 'react';

export default function Userdata({users}) {
  return (
      <div className="ff">
    <div className="card mt-3" style={{width: '20rem' ,height:"12rem"}}>
        <img src={users.avatar} className="card-img-top avatar" alt="..." />
        <div className="card-body text-center">
          <h5 className="card-title  name">{users.first_name} {users.last_name}</h5>
          <p className="card-text email">{users.email}</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        </div>
      </div>
      </div>
    );
}
