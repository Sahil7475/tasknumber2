import React from 'react';

export default function Navbar(props) {
    return (
        <>
          <nav className="navbar ">
            <div className="container-fluid">
              <a className="navbar-brand text-white">Groww More</a>
              <form className="d-flex">
                <button className="btn btn-outline-primary" type="button" onClick={()=>{props.getUsers()}}>
                  Get users
                </button>
              </form>
            </div>
          </nav>
        </>
      );
    
}