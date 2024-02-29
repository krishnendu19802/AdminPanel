import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SideNavbar() {
    const navigate = useNavigate()
    const [mode, alterMode] = useState(document.body.classList.contains('dark') ? true : false)
    const [closed, alterClosed] = useState(document.body.classList.contains('closed') ? true : false)
    const handlemode = () => {
        alterMode(mode => !mode)
        document.body.classList.toggle('dark')
    }
    const handlelogout = () => {
        document.body.style.backgroundImage = `url("src/assets/30.webp")`
        navigate('/')
        // url("src/assets/30.webp");

    }

    const handleclose = () => {
        alterClosed(closed => !closed)
        document.body.classList.toggle('closed')
    }
    return (
        // <div>
            <nav className={`${closed ? 'close' : ''}`}>
                <div className="logo-name px-1">
                    {closed && <button className={`btn btn-lg text-${mode ? 'light' : 'secondary'} uil uil-bars px-2`} onClick={handleclose}></button>}
                    <div className="logo-image">
                        <img src="src/assets/logo.webp" alt="" />
                    </div>

                    <span className="logo_name">HOMAID</span>
                    {!closed && <button className={`btn btn-lg text-${mode ? 'light' : 'secondary'} uil uil-bars ms-auto`} onClick={handleclose}></button>}
                </div>

                <div className="menu-items ms-0">
                    <ul className="nav-links">
                        <li><Link to="/main">
                            <i className="uil uil-estate"></i>
                            <span className="link-name">Dahsboard</span>
                        </Link></li>
                        <li><Link to="/leaderboard">
                            <i className="uil uil-files-landscapes"></i>
                            <span className="link-name">Leaderboard</span>
                        </Link></li>
                        <li><Link to="/analytics">
                            <i className="uil uil-chart"></i>
                            <span className="link-name">Analytics</span>
                        </Link></li>
                        <li><Link to="/salesreport">
                            <i className="uil uil-chart"></i>
                            <span className="link-name">Sales Report</span>
                        </Link></li>
                        <li><Link to="/messages">
                            <i className="uil uil-message"></i>
                            <span className="link-name">Messages</span>
                        </Link></li>
                        <li><Link to="/settings">
                            <i className="uil uil-setting"></i>
                            <span className="link-name">Settings</span>
                        </Link></li>
                    </ul>
                    <hr className='dark ms-1 my-2 ' />
                    <ul className="logout-mode p-0 py-3">
                        <li >
                            <a href="">
                                <button className={`btn btn-lg text-${mode ? 'light' : 'secondary'} d-flex p-0 `} style={{ 'background': 'transparent', 'border': 'none', }} onClick={handlelogout}>
                                    <i className="uil uil-signout"></i>
                                    <span className="link-name">Logout</span>
                                </button>
                            </a>
                        </li>

                        <li className="mode" onClick={handlemode}>
                            <Link to="#">
                                <i className={`uil uil-${mode ? 'sun' : 'moon'} t`}></i>
                                <span className="link-name">Dark Mode</span>
                            </Link>

                            {/* <div className="mode-toggle">
                                <span className="switch"></span>
                            </div> */}
                            <div class=" mx-2 form-check form-switch" >
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={mode} />

                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        // </div>
    )
}
