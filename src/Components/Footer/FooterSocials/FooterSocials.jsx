import style from '../Footer.module.css'
import iconVK from "../../../img/iconVK.png"
import iconINST from "../../../img/iconINST.png"
import iconMail from "../../../img/iconMail.png"

const FooterSocials = () => {
    return (
        <div>
            <div className={style.socials}>
                <div className={style.socialsItem}><a href="https://vk.com/public199284833"><img src={iconVK}
                                                                                                 alt="VK"/></a>
                </div>
                <div className={style.socialsItem}><a href="https://www.instagram.com/asterisk.nsk/"><img
                    src={iconINST} alt="Instagram"/></a>
                </div>
                <div className={style.socialsItem}><a href="mailto:mail@gmail.com"><img src={iconMail} alt="mail"/></a>
                </div>
            </div>
        </div>
    )
}

export default FooterSocials;