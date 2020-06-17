import React, { Component as RC } from 'react';

export default class NavFilter extends RC {
    constructor(props)
    {
        super(props);
        this.state = {
        }
    }

    componentDidMount()
    {
        
    }

    render()
    {
        return(
            <nav className='prod-filter'>
                <ul>
                    <li>Category</li>
                    <li>Partner</li>
                </ul>
            </nav>
        )
    }
}