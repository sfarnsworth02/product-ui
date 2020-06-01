import React, { Component as RC } from 'react';
import './navigation.scss';
import {main} from './navStructure';
// navStructure can be a static component OR
// navStructure can be swapped out as a call to 
  // a database to make it dynamic

class NavList extends RC
{
    constructor(props)
    {
        super(props);
        this.state = {
            listStyle: {
                display: 'flex',
            },
            mainItems: [],
        }
    }

    componentDidMount()
    {
       this.setState({
            // the imported products object is being passed in from the structure property 
            //located in the "Navigation" > "componentDidMount" > "navFilter" state.
           mainItems: this.props.structure.map((item, i) =>
           {
                return <MainItem 
                        key={`nav_${item.label.toLowerCase()}`} 
                        label={item.label}
                        />
           })
       });

    }
    render(){
        return (
            <div>
                {/* dynamic "ul" element that will hold imported list items */}
                <ul className={`${this.props.type || 'main-menu'}`} style={this.state.listStyle}>
                {/* filterItems state is an empty array that will display the "li" tags in the item components */}
                    {this.state.mainItems}
                </ul>
            </div>
           
        )
    }
    
}

export class MainItem extends RC 
// Connects to Account.js
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return(
            <li>{this.props.label}</li>
        )
    }
}

export default class MainNavigation extends RC {
    constructor(props)
    {
        super(props);
        this.state = {
            mainNav: null,
        }
    }

    componentDidMount()
    {
        this.setState({
            // setState is an object that has keys
            // the navFilter key is being set to an element which is the "NavList" component
            // the "structure" property, are the list items being imported from navStructure.js
            // the "type" property, is referring to the className property within the "NavList element"
            mainNav: <NavList structure={main} type='main-menu' />
        })
    }

    render()
    {
        return(
            <div className='main-menu-container'>
                {this.state.mainNav}      
            </div>
        )
    }
}