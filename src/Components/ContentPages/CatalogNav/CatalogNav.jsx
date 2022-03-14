import style from './CatalogNav.module.css'
import {NavLink} from "react-router-dom";
import CatalogNavCategories from "./CatalogNavCategories/CatalogNavCategories";

const CatalogNav = (props) => {
    return (
        <div className={style.CatalogNav}>
            <h2>Продукция</h2>
            <div>
                <p>Цена</p>
                <div className={style.textareaDiv}>
                    <textarea wrap="off" placeholder="0" cols="13" rows="1" />
                    -
                    <textarea wrap="off" placeholder="max" cols="13" rows="1" />
                </div>
            </div>

            <CatalogNavCategories categoriesData={props.categoriesData}/>

            <h2>Наши предложения</h2>
            <div>
                <NavLink to="/discounts">Акции</NavLink>
            </div>
            <div>
                <NavLink to="/new">Новинки</NavLink>
            </div>
        </div>
    )
}

export default CatalogNav;