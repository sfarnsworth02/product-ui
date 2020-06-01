import React, {Component as RC} from 'react';
import './filter.scss';
import NavFilter from './FilterNavList';

export default class Filter extends RC
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }
    render()
    {
        return(
            <section className='product-filter-container'>
                <NavFilter />
                <div className='search-filter'> 
                    <input type='text' />
                    <a href='#'>Clear</a>
                </div>
            </section>
        )
    }
}