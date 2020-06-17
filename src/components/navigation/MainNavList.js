
import React, { Component as RC } from 'react';
import {Link} from 'react-router-dom';
import './navigation.scss';
import {main} from './navStructure';
import { MergedConstContext } from '../../Context';

class NavList extends RC
{
    constructor(props)
    {
        super(props);
        this.state = {
            mainItems: [], // lists of main nav items as well as their child items
        }
    }

    componentDidMount()
    {
       this.setState({

           mainItems: this.props.structure.map((item, i) => // structure is class from "MainNavigation component" that is destructured and imported from navStructure
           {
                return <MainItem key={`nav_${item.label.toLowerCase()}`} {...item} /> // this returns the entire structure item instead of just the main parent label
           })
       });

    }
    render(){
        return (
            // props.type is defaulting to 'sub-menu' because the MainNavigation component sets the type to 'main-menu'
            // visibility class for the parent list is defaulting to 'menu-visible' whereas child lists are defaulting to 'menu-hidden' in order to create the toggle
            <ul className={`nav-list ${this.props.type || 'sub-menu'} ${this.props.visibilityClass || 'menu-visible'}`}> 
                {this.state.mainItems}
                {this.props.show} 
            </ul>
           
        )
    }
    
}

class MainItem extends RC 
{
    constructor(props)
    {
        super(props);
        this.state = {
            submenu: null, // how does this help in the navigation
            visibilityClass: 'menu-hidden', // class item determines whether the link item children are visible
        }
    }

    showSub = () =>
    {
        if (this.props.children) // only runs if the link item has children
        {
            console.log('should show');
            this.setState({
                visibilityClass: 'menu-visible',  // changes the class value which then renders the children visible
            })
        }
    }

    hideSub = () => 
    {
        if (this.props.children) // only runs if the link item has children
        {
            console.log('should hide');
            this.setState({
                visibilityClass: 'menu-hidden',  // changes the class value which then renders the children hidden
            })
        }
    }

    render()
    {
        let submenu = null; // null if there are no children, else is a list of children items
        let item; // item will no longer be an li tag but a link tag that renders in the return

        // determines if this nav item has children. If true, it gets the sub menu
        if (this.props.children)
        {
            submenu = 
            <div className='sub-menu-container'>
                <NavList structure={this.props.children} visibilityClass={this.state.visibilityClass} />
            </div>
        }

        // if the item has a route, whether main or child, a Link tag is returned if there is a route else it is returned as a span that is inserted into an li tag
        if (this.props.route)
        {
            item = <Link className='nav-item' to={this.props.route}>{this.props.label}</Link>
        } else 
        { 
            item= <span className='nav-item'>{this.props.label}</span>
        }

        return(
            <li onMouseEnter={this.showSub} onMouseLeave={this.hideSub}> 
                {item} 
                {submenu}
            </li>
           
        )
    }
}


export default class MainNavigation extends RC {
    constructor(props)
    {
        super(props);
        this.state = {
            navList: null,
            userName:'',
        }
    }

    componentDidMount()
    {
        this.setState({
            // setState is an object that has keys
            // the navFilter key is being set to an element which is the "NavList" component
            // the "structure" property, are the list items being imported from navStructure.js
            // the "type" property, is referring to the className property within the "NavList element"
            navList: <NavList structure={main} type='main-menu' />,
/* TODO */  userName: this.context.user.email, 
        })
    }

    render()
    {
        return(
            <nav className='nav-container'>
                <div className='main-nav'>
                    {this.state.navList}
                    {this.state.userName}
                </div>    
            </nav>
        )
    }
}

MainNavigation.contextType = MergedConstContext;