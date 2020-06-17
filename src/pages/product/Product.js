import React, { Component as RC } from 'react';
import settings from '../../settings';
import './product.scss';
import Page from '../../components/Page'
import ActionBar from '../../components/functionality/Functionality';
import { Card, CardImage, CardText }  from '../../components/containers/Card';



function ProductItem (props)
    {
        return(
            <Card className='cards-box'>
                <ul className='card'>
                    <CardImage>
                        <img className='card-image'></img>
                    </CardImage>
                    <CardText>
                        <li>{props.product}</li>
                        <li>{props.name}</li>
                        <li>{props.desc}</li>
                    </CardText>
                </ul>
            </Card> 
        )
    }

export default class Products extends RC {
    constructor(props)
    {
        super(props);
        this.state = {
            products: [],
        }
    }

    getProductList = async () => 
    {
        const productUrl = `${settings.apiBaseRoute}/api/products`;
        console.log('url: ', productUrl);
        fetch(productUrl)
        .then((response) => 
        {
            return response.json();
        })
        .then((result) => 
        {
            this.setState({
                products: result.map((item) =>
                {
                    return <ProductItem
                            key={item._id}
                            product={item.fullSku}
                            name={item.skuName}
                            desc={item.skuDesc}
                            img={item.largeImg}
                            />
                }),
            });
            console.log('Products Array: ', this.state.products);
        })
        .catch((err) => 
        {
            console.log('error: ', err)
        });
    }

    componentDidMount()
    {
        this.getProductList();
        
        // let productItem = this.state.products.map((item) =>
        // {
        //     return <li key={item._id}>{item}</li>
        // })
        // unable to access the state object/array from here via console.log
    }


    render()
    {
        return(
            <Page title='Products'>
                <ActionBar />
                <div>
                    <ul>
                        {this.state.products}
                    </ul>
                </div>
            </Page>


        )
    }
}
