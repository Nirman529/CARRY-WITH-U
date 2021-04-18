import React, { useState, useEffect} from 'react'
import { API } from '../backend';
import "../styles.css"
import Base from './Base';
import Card from './Card';
import { getAllProducts } from './helper/coreapicalls';

export default function Home() {

        const [products, setProducts] = useState([])
        const [error, setError] = useState(false)

        const loadAllProducts = () => {
            getAllProducts().then(data => {
                if(data.error) {
                    setError(data.error);
                } else {
                    setProducts(data);
                }
            })
        }

        useEffect(() => {
            loadAllProducts();
        }, [])

    return (
        <Base title="Home page" description="Welcome to Carry With u">
            <div className="row text-center">
                <h1 className="text-white">All Products</h1>
                {products.map((product, index) => {
                    return (
                        <div key={index} className="col-4 mb-4">
                            <Card product={product} />
                            
                        </div> 
                    )
                })}
            </div>
        </Base>
    );
}
