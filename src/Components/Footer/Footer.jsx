import style from './Footer.module.css'
import FooterNav from "./FooterNav/FooterNav";
import FooterSocials from "./FooterSocials/FooterSocials";

const Footer = () => {
    return (
        <div className={style.Footer}>
            <div className={style.itemFooter}>
                <h3>Карта сайта</h3>
                <FooterNav />
            </div>
            <div className={style.itemFooter}>
                <h3>Наши контакты</h3>
                <div className={style.contactItem}><a href="tel:89999999999">+7-999-999-99-99</a></div>
                <div className={style.contactItem}><a href="tel:89999999999">+7-999-999-99-99</a></div>
                <div className={style.contactItem}><a href="mailto:mail@gmail.com">mail@gmail.com</a></div>
            </div>
            <div className={style.itemFooter}>
                <h3>Связь с нами</h3>
                <FooterSocials />
            </div>
            <div className={style.itemFooter}>
                <h3>Оплата и доставка</h3>
                <p className={style.deliveryh}>Доставка:</p>
                <p className={style.deliveryText}>
                    Доставка по Новосибирску. <br/>
                    по октябрьскому району - бесплатно <br/>
                    в дальние районы - от 1000 руб <br/>
                </p>
                <p className={style.deliveryh}>Оплата:</p>
                <p className={style.deliveryText}>
                    Оплата происходит при всечи <br/>
                    с курьером наличными или <br/>
                    банковской картой <br/>
                </p>
            </div>
        </div>
    )
}

export default Footer;