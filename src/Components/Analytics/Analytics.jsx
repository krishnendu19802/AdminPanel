import React from 'react'
import './Analytics.css'
import SideNavbar from '../SideNavbar/SideNavbar'
export default function Analytics() {
    return (
        <>
            <SideNavbar />
            <div className="container">
                <h1>Startup Analytics</h1>

                {/* <!-- Display charts and data here --> */}
                <div className="chart-container">
                    <canvas id="ordersChart"></canvas>
                </div>

                <div className="data-summary">
                    <h2>Summary</h2>
                    <p>Total Orders: <span id="totalOrders">0</span></p>
                    <p>Total Revenue: $<span id="totalRevenue">0</span></p>
                </div>
            </div>
        </>
    )
}
