import style from './HeaderBottom.module.css'
import HeaderBottomNav from "./HeaderBottomNav/HeaderBottomNav";
import HeaderBottomLinks from "./HeaderBottomLinks/HeaderBottomLinks";

const HeaderBottom = () => {
    return (
        <div className={style.HeaderBottom}>
            <HeaderBottomNav/>
            <HeaderBottomLinks/>
        </div>
    )
}

export default HeaderBottom;