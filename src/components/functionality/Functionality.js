import React, {Component as RC} from 'react';
import './filter.scss';
import Filter from './FilterProdList';
import Action from './ActionList';

export default class Functionality extends RC
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }
    render()
    {
        return(
            <section>
                <Filter />
                <Action />
            </section>
        )
    }
}