import React from 'react'
import SideNavbar from '../SideNavbar/SideNavbar'

export default function LeaderBoard() {
    return (
        <div className='d-flex '>
            <SideNavbar />
            <div>
                <section className="leaderboard">
                    {/* <!-- Customize content for leaderboard section --> */}

                    <div className="table table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Number of Customers Served</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>John Doe</td>
                                    <td>100</td>
                                </tr>
                                <tr>
                                    <td>Jane Smith</td>
                                    <td>85</td>
                                </tr>
                                {/* <!-- Add more rows as needed --> */}
                            </tbody>
                        </table>
                    </div>
                </section>
            </div>
        </div>
    )
}
