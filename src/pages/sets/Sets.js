import React, { Component as RC } from 'react';
import Page from '../../components/Page'
import Filter from '../../components/functionality/Functionality';

export default class Products extends RC {
    constructor(props)
    {
        super(props);
        this.state = {
            sets: [],
        }
    }

    render()
    {
        return(
            <Page title='Sets'>
                <Filter />
                <div >
                    <p>This will return a list of set designs with their assigned product components and/or a list of the set components used on sets </p>
                    <ul>
                        {this.state.sets}
                    </ul>
                </div>
            </Page>


        )
    }
}