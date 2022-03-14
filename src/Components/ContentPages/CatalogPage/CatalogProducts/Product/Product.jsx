import style from './../CatalogProducts.module.css'

const Product = (props) => {
    return (
        <div className={style.itemProducts}>
            <div className={style.imgItem}>
                <img src={props.img} alt=""/>
            </div>
            <div className={style.nameItem}>
                {props.name}
            </div>
            <div className={style.availableItem}>
                В наличии {props.available} шт.
            </div>
            <div className={style.priceItem}>
                {props.price} руб/шт.
            </div>
            <div className={style.buttonItem}>
                <button className={style.itsButton}>В корзину</button>
            </div>
        </div>
    )
}

export default Product;