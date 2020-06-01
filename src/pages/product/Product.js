import React, { Component as RC } from 'react';
import './product.scss';
import Filter from '../../components/filter/Filter';
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
            <div className='products-content-container'>
                <Filter />
                <div className='main-content'>
                    <p>
                        This area will be a list of cards with 
                        a product image and product details
                    </p>
                </div>
            </div>


        )
    }
}