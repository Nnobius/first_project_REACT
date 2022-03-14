import style from '../CatalogNav.module.css'
import CatalogNavCategory from "./CatalogNavCategory/CatalogNavCategory";

const CatalogNavCategories = (props) => {
    let CategoriesItems = props.categoriesData.map(CategoriesItem => <CatalogNavCategory key={CategoriesItem.id}
                                                                                         category={CategoriesItem.category}/>)

    return (
        <div>
            {CategoriesItems}
        </div>
    )
}

export default CatalogNavCategories;