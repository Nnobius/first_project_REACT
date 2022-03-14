import style from '../../DiscountsPage.module.css'
import React from "react";

const Discount = (props) => {
    return (
        <div className={style.itemDiscount}>
            <div>
                <img src={props.img} alt=""/>
            </div>
            <div>
                {props.name}
            </div>
            <div>
                В наличии {props.available} шт.
            </div>
            <div>
                {props.price} руб/шт.
            </div>
            <div >
                <button>В корзину</button>
            </div>
        </div>
    )
}

export default Discount;