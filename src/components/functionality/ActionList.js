import React, { Component as RC } from 'react';


export default class NavAction extends RC {
    constructor(props)
    {
        super(props);
        this.state = {
            filterDisplay: null,
            actionFunction: null,
        }
    }

    componentDidMount()
    {

    }

    render()
    {
        return(
            <div className=''>
                <ul>
                    <li>Create</li>
                    <li>Update</li>
                    <li>Delete</li>
                </ul>
            </div>
        )
    }
}