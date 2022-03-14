import style from './CatalogPage.module.css'
import CatalogNav from "../CatalogNav/CatalogNav";
import CatalogProducts from "./CatalogProducts/CatalogProducts";
import React from "react";

const CatalogPage = (props) => {


    return (
        <div className={style.CatalogPage}>
            <CatalogNav categoriesData={props.catalogsData.categoriesData}/>
            <CatalogProducts nameData={props.catalogsData.nameData} />
        </div>
    )
}

export default CatalogPage;