import React, { Component as RC } from 'react';
import './navigation.scss'

export default class Navigation extends RC {
    constructor(props)
    {
        super(props);
        this.state = {}
    }

    render()
    {
        return(
            <div className='main-nav'>
                <div className='nav-title'>
                    <h2>Products</h2> 
                      {/* this will be dynamic based on   */}
                </div>
                <div className='nav-container'>
                    <ul className='filter-nav'>
                        <li>Products</li>
                        <li>Partners</li>
                        <li>Categories</li>
                    </ul>
                    <ul className='action-nav'>
                        <li>Actions</li>
                        <ul className='action-list'>
                            <li>New</li>
                            <li>Update</li>
                            <li>Purge</li>
                        </ul>
                    </ul>
                </div>              
            </div>
        )
    }
}