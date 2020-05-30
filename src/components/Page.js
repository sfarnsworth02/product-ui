import React, { Component as RC } from 'react';
import Header from './header/Header';
import Footer from './Footer';

export default class Page extends RC {
    constructor()
    {
        super();
        this.state = {
            account: '', // '', basic, advanced, admin
            action: '', // view, search, edit, add, delete
            display: '', // ?? product, partner or category
            user: {},
        }
    }

    render()

    
    {
        return(

            <section className="page-wrapper">
                <header>
                    <Header />
                </header>
                <main className='content'>
                    {this.props.children}
                </main>
                <footer className="main-footer">
                    <Footer />
                </footer>
            </section>


        )
    }
}