import React from 'react';
import Link from 'next/link'; //link to product details page

import { urlFor } from '../lib/client'; //importing imagelink ro our sanity dashboard


const Product = ({ product: {image, name,slug,price}}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div>
          <div className='product-card'>
            <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
            />
            <p className='product-name'>{name}</p>
            <p className='product-price'>${price}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Product