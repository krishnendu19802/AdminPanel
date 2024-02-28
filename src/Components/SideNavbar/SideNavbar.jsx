import React from 'react'
import { Link } from 'react-router-dom'

export default function SideNavbar() {
    
  return (
    <div>
      <nav>
                <div className="logo-name">
                    <div className="logo-image">
                        <img src="src/assets/logo.webp" alt="" />
                    </div>

                    <span className="logo_name">HOMAID</span>
                </div>

                <div className="menu-items">
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

                    <ul className="logout-mode">
                        <li><Link to="/">
                            <i className="uil uil-signout"></i>
                            <span className="link-name">Logout</span>
                        </Link></li>

                        <li className="mode">
                            <Link to="#">
                                <i className="uil uil-moon"></i>
                                <span className="link-name">Dark Mode</span>
                            </Link>

                            <div className="mode-toggle">
                                <span className="switch"></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
    </div>
  )
}
