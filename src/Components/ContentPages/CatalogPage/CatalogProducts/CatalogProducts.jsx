import style from './CatalogProducts.module.css'
import React from "react";
import Product from "./Product/Product";

const CatalogProducts = (props) => {
    let ProductElements = props.nameData.map(ProductElement => <Product key={ProductElement.id} name={ProductElement.name}
                                                                  available={ProductElement.available}
                                                                  price={ProductElement.price} img={ProductElement.img}/>)

    return (
        <div className={style.CatalogProducts}>
            {ProductElements}
        </div>
    )
}

export default CatalogProducts;