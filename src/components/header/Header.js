import React, {Component} from 'react';
import './header.scss';
import { MenuBar } from '../containers/Menu';
import Nav from '../navigation/MainNavList';


export default class Header extends Component {

    render() {  
        return (
            <section className='header-container'>
                <div className='main-header'>

                    <MenuBar>
                        <ul className='menubar-list'>
                            <Nav />
                        </ul>
                    </MenuBar>
                </div>
                <div className='page-title'>
                    <h2>{this.props.title}</h2>
                </div>
            </section>
            
        )
    }
}