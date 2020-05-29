import React, { Component as RC} from 'react';

export default class CardImg extends RC {
    constructor(props) {
        super(props);
        this.state = {
            // this will be the product cdn
            fullImg: "",
            largeImg: "",
            altImg:"", // used at user discretion
        }
    }

    render()
    {
        return(
            <figure>
                <p>Image here</p>
            </figure>
        )
    }
}