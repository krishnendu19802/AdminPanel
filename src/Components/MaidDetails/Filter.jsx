import React, { useState } from 'react'

export default function Filter(props) {

    const [filter, setFilter] = useState('Filter')
    const handlefilter = (e) => {
        console.log(e.target.name)
        setFilter(e.target.name)
    }
    return (
        <div className="p-2  search-element px-5">
            <form action="" className="d-flex justify-content-between">
                
            <div className="view-select">
                    <button type="button" class="btn ms-auto btn-primary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                        {props.view?'Large':'Small'}
                    </button>
                    <ul class="dropdown-menu">
                        <li><a className="p-2" name='large' onClick={props.handleview}>Large</a></li>
                        <hr />
                        <li><a className="p-2" name='small' onClick={props.handleview}>Small</a></li>

                    </ul>
                </div>
                
                <div className="button-filter">
                    <button type="button" class="btn ms-auto btn-primary dropdown-toggle " data-bs-toggle="dropdown" aria-expanded="false">
                        {filter}
                    </button>
                    <ul class="dropdown-menu">
                        <li><a className="p-2" name='Name' onClick={handlefilter}>Name</a></li>
                        <hr />
                        <li><a className="p-2" name='Address' onClick={handlefilter}>Address</a></li>
                        <hr />
                        <li><a className="p-2" name='Aadhar' onClick={handlefilter}>Aadhar</a></li>
                        <hr />
                        <li><a className="p-2" name='Proficient In' onClick={handlefilter}>Proeficient in</a></li>
                        <hr />
                        <li><a className="p-2" name='Experience' onClick={handlefilter}>Experience</a></li>
                        <hr />
                        <li><a className="p-2" name='Phone number' onClick={handlefilter}>Phone number</a></li>

                    </ul>
                </div>
                
                <div className="d-flex">
                    <input type="text" placeholder='search' className="mx-1 search-inp" />
                    <button className="btn btn-success">Search</button>
                </div>
            </form>
        </div>
    )
}
