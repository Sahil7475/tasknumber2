import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import User from './components/User'
import { useState, useEffect } from "react";




function App() {

  /* let user=[
     {
      id:1,
      email:"george.bluth@reqres.in",
      first_name:"George",
      last_name:"Bluth",
      avatar:"https://reqres.in/img/faces/1-image.jpg"
    },
    {
      id:2,
      email:"george.bluth@reqres.in",
      first_name:"George",
      last_name:"Bluth",
      avatar:"https://reqres.in/img/faces/1-image.jpg"
    },  
  ]  */
 
  let [user,setuser] = useState([]);
   
  
  
  const getUsers= async ()=>{
    const response = await fetch('https://reqres.in/api/users/')
    console.log(response)
    let json = await response.json();
    setuser(json.data);
    console.log(json.data);
  }
 /*  useEffect(() => {
    getUsers();
  }, []); */


  return (
   
   <>
  
   <Navbar getUsers={getUsers}/>
   <User user={user}  />
   </>
  );
}

export default App;
