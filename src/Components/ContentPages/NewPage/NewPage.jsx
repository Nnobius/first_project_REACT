import style from './NewPage.module.css'
import CatalogNav from "../CatalogNav/CatalogNav";

const NewPage = (props) => {
    return (
        <div className={style.NewPage}>
            <CatalogNav categoriesData={props.newData.categoriesData}/>
            <div className={style.new}>
                <div className={style.newItem}>1 новинка</div>
                <div className={style.newItem}>2 новинка</div>
                <div className={style.newItem}>3 новинка</div>
                <div className={style.newItem}>4 новинка</div>
                <div className={style.newItem}>5 новинка</div>
                <div className={style.newItem}>6 новинка</div>
                <div className={style.newItem}>7 новинка</div>
                <div className={style.newItem}>8 новинка</div>
                <div className={style.newItem}>9 новинка</div>
                <div className={style.newItem}>10 новинка</div>
                <div className={style.newItem}>11 новинка</div>
                <div className={style.newItem}>12 новинка</div>
            </div>
        </div>
    )
}

export default NewPage;