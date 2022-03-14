import style from './Header.module.css'
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderBottom from "./HeaderBottom/HeaderBottom";

const Header = () => {
    return (
        <div className={style.Header}>
            <HeaderTop />
            <HeaderBottom />
        </div>
    )
}

export default Header;