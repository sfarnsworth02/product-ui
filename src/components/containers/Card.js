import React, { Component } from 'react';

export class Card extends Component
{
    render()
    {
        return(
            <span  id=''>
                {this.props.children}
            </span>
        )
    }
    
}

export class CardImage extends Component
{
    render()
    {
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
    
}

export class CardText extends Component
{
    render()
    {
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
    
}