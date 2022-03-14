import style from '../../CatalogNav.module.css'

const CatalogNavCategory = (props) => {
    return (
        <div className={style.item}>
            <label>
                <input type="checkbox"/>
                { props.category }
            </label>
        </div>
    )
}

export default CatalogNavCategory;