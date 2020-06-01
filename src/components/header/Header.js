import React, {Component} from 'react';
import './header.scss';
import MainNav from '../navigation/MainNavList';
import NavAction from '../header/ActionNavList';


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <section className='header-container'>
                <div className='main-header'>
                    <div className='logo-container'>
                        Studio Catalog
                    </div>
                    {/* 
                    To-do:
                    this will be a terinary based on if 
                    user is logged in
                    If user is logged in it will display
                    Account instead of Login
                    */}
                    <nav className='main-nav'>
                        <button>Login</button>
                        <MainNav />
                    </nav>
                </div>
                <div className='page-title'>
                    <h2>Products</h2> 
                      {/* this will be dynamic based on   */}
                </div>
                <nav className='action-nav'>
                    <NavAction />
                </nav>
            </section>
            
        )
    }
}