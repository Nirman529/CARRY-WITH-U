import React from 'react'
import { API } from '../../backend';

const ImageHelper = ({product}) => {
    
    const imageUrl = product ? `${API}/product/image/${product._id}` : `https://c8.alamy.com/comp/2B14ANX/initial-ld-letter-logo-design-vector-template-abstract-letter-ld-logo-design-2B14ANX.jpg`
    return (
        <div className="rounded border border-success p-2">
                <img
                  src={imageUrl}
                  alt="image"
                  style={{ maxHeight: "100%", maxWidth: "100%" }}
                  className="mb-3 rounded"
                />
        </div>
    )
}

export default ImageHelper;