import React, { FC } from "react";
import "./products-card.scss";

// interface ProductProps {
//     name: string,
// }
interface ProductCardProps {
    name: string,
    upc: number,
    availability_stock: number,
    price_currency: string,
    price_current_value: number,
    variants?: ProductCardProps[],
}

const ProductCard : FC<{dataProduct : ProductCardProps}> = ({ dataProduct }) => {

    const {
        name,
        upc,
        availability_stock,
        price_currency,
        price_current_value,
        variants
    } = dataProduct;

    return (
        <article>
            <div className="img-wrapper">
                <img src="https://placehold.co/600x600/EEE/31343C" alt="{ name }" />
                <div className="img-hover">
                    <h4>UPC: { upc }</h4>
                    <h4>In Stock: { availability_stock }</h4>
                </div>
            </div>
            <div className="main-info">
                <h2 className="h3">
                    { name }
                </h2>
                <h3>
                    <strong>
                        { price_currency } { price_current_value }
                    </strong>
                </h3>
            </div>
            { variants?.length !== 0 && (
                <div className="variant-carousel" >
                    { variants?.map((product, idx) => (
                        <div key = {idx}>
                            <img src="https://placehold.co/80x50/EEE/31343C" alt={`${ product.upc } | ${ product.name }`}/>
                            <div className="detail">
                                <h4>
                                    UPC{ product.upc }
                                </h4>
                            </div>
                        </div>
                    )) }
                </div>
            )}
        </article>
    )
}

export default ProductCard;