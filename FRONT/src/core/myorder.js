import React, { useState, useEffect} from 'react'
import { getProduct } from '../admin/helper/adminapicall';
import { isAuthenticated } from '../auth/helper';
import { API } from '../backend';
import "../styles.css"
import Base from './Base';
// import Card from './Card';
import ImageHelper from './helper/ImageHelper';



import { userPurchaseList } from './helper/OrderHelper';
import MCard from './MCard';

export default function Delivery() {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)

    const { user : { first_name, last_name, email, address,  phone}} = isAuthenticated();

    const userId = isAuthenticated() && isAuthenticated().user._id;
    const token = isAuthenticated() && isAuthenticated().token;


        const loadAllOrders = () => {
            userPurchaseList(userId,token).then(data => {
                // console.log(userId);
                if(data.error) {
                    setError(data.error);
                } else {
                    setProducts(data);
                    console.log(data);
                }
                
                
            })
        }

        useEffect(() => {

            loadAllOrders();
            // userPurchaseList(userId,token);
        }, [])

    return (
        <Base title="Your page" description="Take your order">
            <div className="row text-center">
                <h1 className="text-white">All Orders</h1>
                
                    {products.map((product, index) => {
                        return (
                            <div key={index} className="col-5 mb-4">
                                <ul>
                                    <li>
                                    {product.products.map((prod) => {
                                        return (
                                            <div className="col-5 mb-4">
                                                <ul>
                                                    <li>
                                                    <ImageHelper product = {prod} />
                                                    
                                                        Product Name: {prod.product_name}
                                                        Product Price : {prod.product_price}
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                     })} 
                                            {/* <ImageHelper product = {product.user.purchases[index]} /> */}
                                            {/* Product Name : {product.user.purchases[index].product_name} <br /> */}
                                            {/* Product Price : {product.user.purchases[index].product_price}   */}
                                    </li>
                                </ul>
                            </div> 
                        )
                    })}
            </div>
        </Base>
    );
}
