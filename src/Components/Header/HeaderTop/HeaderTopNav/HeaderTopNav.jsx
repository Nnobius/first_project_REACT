import style from './HeaderTopNav.module.css'
import {NavLink} from "react-router-dom";

const HeaderTopNav = () => {
    return (
        <div>
            <nav className={style.nav}>
                <NavLink to="/contacts">КОНТАКТЫ</NavLink>
                <NavLink to="/reviews">ОТЗЫВЫ</NavLink>
            </nav>
        </div>
    )
}

export default HeaderTopNav;