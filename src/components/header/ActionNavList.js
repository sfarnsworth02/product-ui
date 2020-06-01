import React, { Component as RC } from 'react';
import {action} from '../navigation/navStructure';
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
            actionItems: [],
        }
    }

    componentDidUpdate(prevProps)
    {
        console.log('should show visiblity');
        if (this.props.show !== prevProps.show)
        {
            const listStyle = {
                display: (this.props.show) ? 'flex' : 'none',
            };
            this.setState({
                listStyle,
            })
        }
    }

    componentDidMount()
    {
        let listStyle;
        if (this.props.type === 'action-list')
        {
            listStyle = { display: 'flex' }
        }
        else{
            listStyle = { display: 'none' }
        }
        this.setState({
            // the imported products object is being passed in from the structure property 
            //located in the "Navigation" > "componentDidMount" > "navFilter" state.
           actionItems: this.props.structure.map((item, i) =>
            {
                return <ActionItem
                        key={`nav_${item.label.toLowerCase()}`}
                        {...item}
                        />
            }),
            listStyle,
       });

    }
    render(){
        return (
            <div className='action-list-container'>
                 {/* dynamic "ul" element that will hold imported list items */}
                <ul className={`${this.props.type || 'sub-menu'}`} style={this.state.listStyle}>
                {/* filterItems state is an empty array that will display the "li" tags in the item components */}
                    {this.state.actionItems}
                </ul>
            </div>
           
        )
    }
    
}

class ActionItem extends RC
{
    constructor(props)
    {
        super(props);
        this.state = {
            subMenu: null,
            showSub: false,
        }
    }
    componentDidMount()
    {
        if (this.props.children)
        {
            this.setState({
                submenu: <NavList 
                        structure={this.props.children} 
                        show={this.state.showSub} 
                        />
            })
        }
    }
    showSub = () =>
    // this is waiting for an (event)
    {
        if(this.props.children)
        {
            console.log('should show');
            this.setState({
                showSub: true,
            })
        }
       
    }
    hideSub = () =>
    // this is waiting for an (event)
    {   
        if(this.props.children)
        {
            console.log('should hide');
            this.setState({
                showSub: false,
            })
        }
        
    }
    render()
    {
        return(
            <li onMouseEnter={this.showSub} onMouseLeave={this.hideSub}>
                {this.props.label} 
                {this.state.subMenu}
            </li>
           
        )
    }
}

export default class NavAction extends RC {
    constructor(props)
    {
        super(props);
        this.state = {
            navAction: null,
        }
    }

    componentDidMount()
    {
        this.setState({
            // setState is an object that has keys
            // the navFilter key is being set to an element which is the "NavList" component
            // the "structure" property, are the list items being imported from navStructure.js
            // the "type" property, is referring to the className property within the "NavList element"
            navAction: <NavList structure={action} type='action-list' />
        })
    }

    render()
    {
        return(
            <div className=''>
                {this.state.navAction}
            </div>
        )
    }
}