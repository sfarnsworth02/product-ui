import React, { Component as RC } from 'react';

export default class AccountCreate extends RC {
    constructor(props)
    {
        super(props);
        this.state = {}
    }

    render()
    {
        return(
            <form>
                <label>Email:</label>
                <input></input>
                
            </form>
        )
    }
}