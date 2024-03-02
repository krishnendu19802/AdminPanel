import React, { useEffect } from 'react'
import './Analytics.css'
import SideNavbar from '../SideNavbar/SideNavbar'

export default function Analytics() {

    const creatingchart = () => {
        // Assuming you have an HTML canvas element with the id 'ordersChartCanvas'
        const ordersChartCanvas = document.getElementById('ordersChartCanvas');

        // Sample data for orders
        const ordersData = [150, 220, 180, 250, 200];

        // Creating the chart

        const existingChart = Chart.getChart(ordersChartCanvas);

        // If there is an existing chart, destroy it
        if (existingChart) {
            existingChart.destroy();
        }

        const ordersChart = new Chart(ordersChartCanvas, {
            type: "bar",
            data: {
                labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5"],
                datasets: [{
                    label: "Orders",
                    data: ordersData,
                    backgroundColor: "#3498db",
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
        return ordersChart

    }
    useEffect(() => {
        creatingchart()
    }, [])


    return (
        <>
            <SideNavbar />
            <div className="container overflow-auto">
                <div className="main-chart-container container-fluid p-3">
                    <h1>Startup Analytics</h1>

                    {/* <!-- Display charts and data here --> */}
                    <div className="chart-container">
                        <canvas id="ordersChartCanvas"  >

                        </canvas>
                    </div>

                    <div className="data-summary">
                        <h2>Summary</h2>
                        <p>Total Orders: <span id="totalOrders">0</span></p>
                        <p>Total Revenue: $<span id="totalRevenue">0</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}
