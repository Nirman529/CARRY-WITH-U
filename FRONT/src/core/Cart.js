import React, { useState, useEffect} from 'react'
import { API } from '../backend';
import "../styles.css"
import Base from './Base';
import Card from './Card';
import { loadCart } from './helper/CartHelper';
import Paymentb from './Paymentb';
import StripeCheckout from './StripeCheckout';

const Cart = () => {

    const [products, setProducts] = useState([])
    const [reload, setReload] = useState(false);

    useEffect(() => {
        setProducts(loadCart())
    }, [reload])

    const loadAllProducts = products => {
        return (
            <div>
                <h2>Load product section</h2>
                {products.map((product,index) => (
                    <Card
                    key={index}
                    product={product}
                    removeFromCart={true}
                    addToCart={false}
                    setReload={setReload}
                    reload={reload}
                    />)
                )}
            </div>
        )
    }
    
    const loadCheckout = () => {
        return (
            <div>
                <h2>Checkout section</h2>
            </div>
        )
    }

    return (
        <Base title="Cart page" description="Go with checkout">
            <div className="row text-center">
                <div className="col-6">{products.length > 0 ? loadAllProducts(products) : <h3>No products in the cart </h3>}</div>
                {/* <div className="col-6"><StripeCheckout
                    products={products}
                    setReload={setReload}
                /></div> */}

                <div className="col-6">
                    <Paymentb 
                    products={products}
                    setReload={setReload}
                /></div>
            </div>
        </Base>
    );
}

export default Cart;