import React from 'react'
import SideNavbar from '../SideNavbar/SideNavbar'
import './MaidDetails.css'
export default function MaidDetails() {
    const list = {
        'names': ['Savitri', 'Priyanka', 'Namesha', 'Lorraine', 'Chandni'],
        'phone': ['7985641585', '79856546515'],
        'address': ['Hyderabad', 'Vizag', 'Vijaywada', 'Kurnool', 'Nellore'],
        'aadhar': ['785589441242'],
        'Experience': ['1', '2', '1', '5', '6'],
        'Type': ['Cooking', 'Cleaning'],
        'photo': ['loading']
    }
    const col_list = ['names', 'phone', 'address', 'aadhar', 'Experience', 'Type', 'photo']
    let main_set = [], indvobj = {}
    
    const generate = () => {
        let ind;
        for (let j = 1; j <= 20; j++) {
            
            for (let i = 0; i < 7; i++) {
                let col = col_list[i]
                let seed = new Date().getTime(); // Use current timestamp as the seed
                let randomGenerator = new Math.seedrandom(seed);
              
                ind = Math.floor(randomGenerator() * list[col].length)
                
                let val = list[col][ind]
                indvobj[col] = val
            }
            main_set.push(indvobj)
        }
        //    return main_set;
    }

    const create_table = () => {

        let trows = main_set.map((row, index) => {
            return (
                <tr >
                    <th scope="row">{index + 1}</th>
                    <td>{row.names}</td>
                    <td>{row.phone}</td>
                    <td>{row.address}</td>
                    <td>{row.aadhar}</td>
                    <td>{row.Experience}</td>
                    <td>{row.Type}</td>
                    <td>{row.photo}</td>
                </tr>
            )
        })
        return trows
    }

    return (
        <>
            {generate()}
            <SideNavbar />
            <div className="container-table">
                <h1 className=" mx-2 text-center">Maid Details</h1>
                <div className="maid-table shadow rounded">
                    <table class="table table-striped-columns table-hover">
                        <thead className='sticky-top'>
                            <tr>
                                <th scope="col">Sl. No.</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone number</th>
                                <th className='address' scope="col">Address</th>
                                <th scope="col">Aadhar</th>
                                <th scope="col">Experience</th>
                                <th scope="col">Proefficient in</th>
                                <th scope="col">Photo</th>

                            </tr>
                        </thead>
                        <tbody>

                            {create_table()}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
