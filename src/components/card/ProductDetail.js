import React, {Component as RC} from 'react';

export default class CardDetail extends RC {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <div>
                <p>Product Number</p>
                <p>Product Name</p>
                <p>Option description</p>
            </div>
        );
    }
}