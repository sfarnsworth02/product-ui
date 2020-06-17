import React, { Component as RC } from 'react';
import Page from '../../components/Page'
import Filter from '../../components/functionality/Functionality';

export default class Products extends RC {
    constructor(props)
    {
        super(props);
        this.state = {
            assets: [],
        }
    }

    render()
    {
        return(
            <Page title='Assets'>
                <Filter />
                <div className='main-content'>
                    <p>This will return a list of product used in shot lists and/or the shot lists themselves </p>
                    <ul>
                        {this.state.assets}
                    </ul>
                </div>
            </Page>


        )
    }
}
