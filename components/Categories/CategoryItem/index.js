import React from 'react'

export default function CategoryItem({ link, imageSource, categoryTitle }) {
    return (
        <div className="product-category product">
            <a href={link}>
                <img src={imageSource} width="200" height="200" className="wp-post-image" alt="" />
                <h2 className="woocommerce-loop-category__title"> {categoryTitle} </h2>
            </a>
        </div>
    )
}
