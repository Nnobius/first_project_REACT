import style from './HeaderBottomNav.module.css'
import {NavLink} from "react-router-dom";


const HeaderBottomNav = () => {
    return (
        <div>
            <nav>
                <NavLink to="/home" className={style.item}>Главная</NavLink>
                <NavLink to="/catalog" className={style.item}>Каталог</NavLink>
                <NavLink to="/discounts" className={style.item}>Акции</NavLink>
                <NavLink to="/new" className={style.item}>Новинки</NavLink>
            </nav>
        </div>
    )
}

export default HeaderBottomNav;