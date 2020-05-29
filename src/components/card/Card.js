import React, { Component as RC } from 'react';
import Image from './CardImg';
import Product from './ProductDetail';

export default class Card extends RC {
    constructor(props)
    {
        super(props);
        this.state = {}
    }

    // function to pull in card contents

    render()
    {
        return(
            <div className='card'>
              {/* <div className='partner-card'>

              </div> */}

            {/* ---- PRODUCT CATALOG DISPLAY ---- */}
              <div className='product-card'>
                <figure className='card-image'>
              
                </figure>
                <span className='card-detail'>
                </span>
              </div>
            </div>
        )
    }
}