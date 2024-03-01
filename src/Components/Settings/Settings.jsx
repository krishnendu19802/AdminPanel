import React, { useState } from 'react'
import SideNavbar from '../SideNavbar/SideNavbar'
import './Settings.css'
import Modal from './Modal'
export default function Settings() {
  // const [change,setChange]=useState({'username':'User','email':'user@gmail','password':'********'})
  const user={'username':'User','email':'user@gmail','password':'********'}
  const handleClick=(e)=>{
    // console.log(e.target.id)
    // setChange((val)=>{
    //   return {...change,tochange}
    // })

  }
  return (
    <div>
      <Modal username={user.username} email={user.email}   />

      <SideNavbar />
      <div className={`settings-box  px-0 mt-1 d-flex align-items-center `}>
        <div className="container-settings p-5  ">
          <div className="user-settings rounded shadow p-2">
            <div className="username container-fluid p-2 fs-4  align-items-center">
              Current Username
              <p className="rounded mx-2 fs-4 bg-secondary p-2 overflow-auto">User</p>
              <button className="btn btn-danger btn-lg ms-auto" data-bs-toggle="modal" data-bs-target="#changeusername" id='username' onClick={handleClick}>Change</button>
            </div>
            <hr />
            <div className="email  fs-4 p-2">
              Current email
              <p className="rounded bg-secondary p-2 mx-2 fs-4 overflow-auto">User@gmail.com</p>
              <button className="btn btn-danger btn-lg ms-auto" data-bs-toggle="modal" data-bs-target="#changeemail" id='Email' onClick={handleClick}>Change</button>
            </div>
            <hr />
            <div className="password  justify-content-center p-2">
               <button className="btn btn-danger btn-lg " data-bs-toggle="modal" data-bs-target="#changepassword" id='password' onClick={handleClick}>Change Password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
