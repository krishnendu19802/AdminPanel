import React from 'react'
import SideNavbar from '../SideNavbar/SideNavbar'
import './SalesReport.css'
export default function SalesReport() {
  return (
    <>
    <SideNavbar/>
    <div className="container">
        <h1>Sales Report</h1>
    
        <table id="salesTable">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price per Unit</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {/* <!-- Sales data will be dynamically added here using JavaScript --> */}
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="4" className="total-label">Total Sales</td>
                    <td id="totalSales">0</td>
                </tr>
            </tfoot>
        </table>
    </div>
    </>
  )
}
