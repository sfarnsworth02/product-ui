import React, { Component as RC } from 'react';
import PageContent from '../components/PageContent';
import Card from '../components/card/Card';

export default class ProductHome extends RC {
    constructor(props)
    {
        super(props);
        this.state = {}
    }

    render()
    {
        return(
            <div>
                <PageContent />
                <input type='text' value='product search' />
                <span>Clear</span>
                <div className='content-lists'>
                    <p>
                        This area will be a list of cards with 
                        a product image and product details
                    </p>
                    <Card></Card>
                </div>
            </div>


        )
    }
}