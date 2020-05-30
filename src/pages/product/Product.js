import React, { Component as RC } from 'react';
import './product.scss';
import Card from '../../components/card/Card';

export default class Products extends RC {
    constructor(props)
    {
        super(props);
        this.state = {}
    }

    render()
    {
        return(
            <div>
                <div className='search-container'>
                    <input type='text' />
                    <span>Clear</span>
                </div>

                <div className='content-container'>
                    <p>
                        This area will be a list of cards with 
                        a product image and product details
                    </p>
                </div>
            </div>


        )
    }
}