import style from './HeaderBottomLinks.module.css'
import phoneCall from "../../../../img/phoneCall.png"
import delivery from "../../../../img/delivery.png"
import basket from "../../../../img/basket.png"
import {NavLink} from "react-router-dom";

const HeaderBottomLinks = () => {
    return (
        <div className={style.ImgLinks}>
            <div className={style.imgDelivery}>
                <a className={style.link}><img src={delivery} alt=""/></a>
                <div className={style.hidden}>
                    Оплата и доставка <br/><br/>
                    Доставка:<br/>
                    Доставка по Новосибирску.<br/>
                    по октябрьскому району - бесплатно<br/>
                    в дальние районы - от 1000 руб<br/><br/>
                    Оплата:<br/>
                    Оплата происходит при всечи<br/>
                    с курьером наличными или<br/>
                    банковской картой<br/>
                </div>
            </div>
            <div className={style.item}>
                <a href="tel:89999999999"><img src={phoneCall} alt=""/></a>
            </div>
            <NavLink to="/basket" className={style.linkBasket}>
                <div className={style.basketImg}>
                    <img src={basket} alt=""/>
                    <span className={style.spanN}>
                        <span>0 позиций на 0 рублей</span>
                    </span>
                </div>
            </NavLink>
        </div>
    )
}

export default HeaderBottomLinks;