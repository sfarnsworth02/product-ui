import React, { Component as RC } from 'react';
import Nav from './navigation/Navigation';

export default class Navigation extends RC {
    constructor(props)
    {
        super(props);
        this.state = {
            account: '', // '', basic, advanced, admin
            action: '', // view, search, edit, add, delete
            display: '', // ?? product, partner or category
            prodList: [],
            user: {},
        }
    }

    render()

    
    {
        return(
            <div>
                <Nav>

                    
                </Nav>
            </div>
        )
    }
}