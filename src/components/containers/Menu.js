import React, {Component} from 'react';
import './menu.scss';

export class MenuBar extends Component
{
    render()
    {
        return(
            <section className='header-menu-area hidden-sm hidden-xs' id='sticky-header'>
                    <div className='logo-container'>
                        <h1><a>Studio Catalog</a></h1>
                    </div>
                    <div className='menu-container'>
                        <div className='.container'>
                            {this.props.children}
                        </div>
                    </div>
            </section>
        )
    };

};

export function Submenu()
{

}
