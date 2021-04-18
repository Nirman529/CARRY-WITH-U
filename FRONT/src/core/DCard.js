import React, { useState, useEffect} from 'react'
import { Redirect } from 'react-router';
import { addItemToCart, removeItemFromCart } from './helper/CartHelper';
import ImageHelper from './helper/ImageHelper';

const DCard = ({
    order, 
    setReload = f => f,
    // function(f) { return f}
    reload = undefined
  }) => {

    const [redirect, setRedirect] = useState(false)
    const [count, setCount] = useState(order.count)

    const cardName = order ? order.product_name : "It's U LD"
    const cardPrice = order ? order.product_price : "17022002"
  
    const getaRedirect = (redirect) => {
      if(redirect) {
        return <Redirect to="/cart" />
      }
    }

        return (
          <div className="card text-white bg-dark border border-info ">
            <div className="card-header lead">{cardName}</div>
            <div className="card-body">
              {getaRedirect(redirect)}
              <ImageHelper order={order}/>
              
              <p className="btn btn-success rounded  btn-sm px-4">Rs. {cardPrice}</p>
              
            </div>
          </div>
        );
      };

      export default DCard;
