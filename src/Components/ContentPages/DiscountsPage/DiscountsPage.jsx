import style from './DiscountsPage.module.css'
import CatalogNav from "../CatalogNav/CatalogNav";
import React from "react";
import Discounts from "./Discounts/Discounts";

const DiscountsPage = (props) => {
    return (
        <div className={style.DiscountsPage}>
            <CatalogNav categoriesData={props.discountsData.categoriesData}/>
            <Discounts nameData={props.discountsData.nameData}/>
        </div>
    )
}

export default DiscountsPage;