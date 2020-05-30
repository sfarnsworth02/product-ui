import React, {Component} from 'react';
import Logo from './Logo';
import Account from './Account';
import Nav from '../navigation/Navigation'


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
                    <Logo />
                    <Account />
                </div>
                <div>
                    <Nav />
                </div>
            </section>
            
        )
    }
}