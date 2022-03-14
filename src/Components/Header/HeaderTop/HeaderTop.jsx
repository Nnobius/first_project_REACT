import style from './HeaderTop.module.css'
import HeaderTopNav from "./HeaderTopNav/HeaderTopNav";
import Logo from "./../../../img/Logo.png"

const HeaderTop = () => {
    return (
        <div className={style.HeaderTop}>
            <div>
                <img src={Logo}/>
            </div>

            <HeaderTopNav />

            <div className={style.phone}>
                <div className={style.phone_nums}><a href="tel:89138888888">+7 (913) 888 88 88</a></div>
                <div className={style.phone_text}><a href="tel:89138888888">Ежедневно 9:00-20:00</a></div>
            </div>
        </div>
    )
}

export default HeaderTop;