import style from '../DiscountsPage.module.css'
import React from "react";
import Discount from "./Discount/Discount";

const Discounts = (props) => {
        let DiscoutItems = props.nameData.map(DiscoutItem => <Discount key={DiscoutItem.id} img={DiscoutItem.img}
                                                                       name={DiscoutItem.name}
                                                                       available={DiscoutItem.available}
                                                                       price={DiscoutItem.price}/>)

    return (
        <div className={style.discounts}>
            { DiscoutItems }
        </div>
)
}

export default Discounts;