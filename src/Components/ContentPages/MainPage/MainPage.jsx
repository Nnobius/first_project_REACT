import style from './MainPage.module.css'

const MainPage = () => {
    return (
        <div className={style.MainPage}>
            <div className={style.MainImg}>Слайдер</div>
            <div className={style.SubMainImgs}>
                <div className={style.item}><p>Акции</p></div>
                <div className={style.item}>Каталог</div>
                <div className={style.item}>Новинки</div>
                <div className={style.item}>Отзывы</div>
            </div>
        </div>
    )
}

export default MainPage;