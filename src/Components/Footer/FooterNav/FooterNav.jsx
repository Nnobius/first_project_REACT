import style from "../Footer.module.css";
import {NavLink} from "react-router-dom";

const FooterNav = () => {
    return (
        <nav className={style.navFooter}>
            <div className={style.navItem}>
                <NavLink to="/home" className={style.item}>Главная</NavLink>
            </div>
            <div className={style.navItem}>
                <NavLink to="/catalog" className={style.item}>Каталог</NavLink>
            </div>
            <div className={style.navItem}>
                <NavLink to="/discounts" className={style.item}>Акции</NavLink>
            </div>
            <div className={style.navItem}>
                <NavLink to="/new" className={style.item}>Новинки</NavLink>
            </div>
            <div className={style.navItem}>
                <NavLink to="/contacts" className={style.item}>Контакты</NavLink>
            </div>
            <div className={style.navItem}>
                <NavLink to="/reviews" className={style.item}>Отзывы</NavLink>
            </div>
            <div className={style.navItem}>
                <NavLink to="/basket" className={style.item}>Корзина</NavLink>
            </div>
        </nav>
    )
}

export default FooterNav;