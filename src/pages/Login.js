import React, { Component as RC } from 'react';

export default class Login extends RC {
    constructor(props)
    {
        super(props);
        this.state = {}
    }

    render()
    {
        return(
            <div className='form-login'>
                <form>
                    <div className=''>
                        <label>Email:</label>
                        <input />
                        <label>Password:</label>
                        <input />   
                    </div>
                    <div className='form-link'>
                        <a href='#'>Request Access</a>
                        <a href='#'>Clear</a>           
                    </div>
                </form>
            </div>
        )
    }
}