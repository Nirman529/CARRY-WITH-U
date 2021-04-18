import React, { useState, useEffect} from 'react'
import { getProduct } from '../admin/helper/adminapicall';
import { isAuthenticated } from '../auth/helper';
import { API } from '../backend';
import "../styles.css"
import Base from './Base';
import Card from './Card';
import { getAllOrders, userPurchaseList } from './helper/OrderHelper';
import MCard from './DCard';
import DCard from './DCard';
import ImageHelper from './helper/ImageHelper';


export default function Delivery() {
    const [orders, setOrders] = useState([])
    const [error, setError] = useState(false)

    const { user : { first_name, last_name, email, address,  phone}} = isAuthenticated();

    const userId = isAuthenticated() && isAuthenticated().user._id;
    const token = isAuthenticated() && isAuthenticated().token;


        // const loadAllOrders = () => {
            getAllOrders(userId,token).then(data => {
                // console.log(userId);
                if(data.error) {
                    setError(data.error);
                } else {
                    setOrders(data);
                    // console.log(data);
                }                
            })
        // }

        useEffect(() => {
            // loadAllOrders();
            getAllOrders(userId,token);
        }, [])

    return (
        <Base title="Your page" description="Take your order">
            <div className="row text-center">
                <h1 className="text-white">All Orders</h1>
                
                    {orders.map((order, index) => {
                        return (
                            <div key={index} className="col-5 mb-4">
                                
                                    {order.products.map((prod) => {
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
                                    
                                     {/* <DCard order = {order}/> */}
                                            {/* Product Name : {order.products[0]._id} <br /> */}
                                            {/* Product Price : {order[index].user.purchases[index].product_price} <br/>  */}
                                            {/* Buyer Name : {order.user.first_name} {order.user.last_name} <br/> */}
                                            {/* Buyer no. : {order.user.phone} <br/> */}
                                            {/* Buyer Address : {order.user.address} */}
                                
                            </div> 
                        )
                    })}
            </div>
        </Base>
    );
}
