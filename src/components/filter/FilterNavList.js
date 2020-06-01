import React, { Component as RC } from 'react';
import {products} from '../navigation/navStructure';
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
            filterItems: [],
        }
    }

    componentDidMount()
    {
       this.setState({
            // the imported products object is being passed in from the structure property 
            //located in the "Navigation" > "componentDidMount" > "navFilter" state.
           filterItems: this.props.structure.map((item, i) =>
           {
                return <FilterItem 
                        key={`nav_${item.label.toLowerCase()}`} 
                        {...item}
                        />
           })
       });

    }
    render(){
        return (
            <div>
                 {/* dynamic "ul" element that will hold imported list items */}
            <ul className={`${this.props.type || 'sub-menu'}`} style={this.state.listStyle}>
                {/* filterItems state is an empty array that will display the "li" tags in the item components */}
                {this.state.filterItems}
            </ul>
            </div>
           
        )
    }
    
}
class FilterItem extends RC 
{
    constructor(props)
    {
        super(props);
        this.state = {}
    }
    render()
    {
        let children;
        if (this.props.children)
        {
            children = <NavList structure={this.props.children} />;
        }
        return(
            <li>
                {this.props.label} 
                {children}
            </li>
        )
    }
}

export default class NavFilter extends RC {
    constructor(props)
    {
        super(props);
        this.state = {
            navFilter: null,
        }
    }

    componentDidMount()
    {
        this.setState({
            // setState is an object that has keys
            // the navFilter key is being set to an element which is the "NavList" component
            // the "structure" property, are the list items being imported from navStructure.js
            // the "type" property, is referring to the className property within the "NavList element"
            navFilter: <NavList structure={products} type='filter-list' />
        })
    }

    render()
    {
        return(
            <nav className='filter-nav'>
                {/* navFilter is coming from the state of the Navigation component 
                but the actual element is being brought during componentDidMount with its properties*/}
                {this.state.navFilter}  
            </nav>
        )
    }
}