
// ---- This needs to be moved into the ProductHome page and deleted ----

import React, { Component as RC } from 'react';
import './card.scss';
import Card from './Card';

export default class Cards extends RC {
    constructor(props)
    {
        super(props);
        this.state = {}
    }




    render()
    {
        return(
            <div className='cards-container'>
              <Card />
              <Card />
              <Card />
            </div>
        )
    }
}