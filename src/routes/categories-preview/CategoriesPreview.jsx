import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context";

import CategoryPreview from '../../components/category-preview/CategoryPreview';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

    return (
        <>
            {
                Object.keys(categoriesMap).map(title =>
                    <CategoryPreview title={title} products={categoriesMap[title]} key={title} />
                )
            }
        </>
    )
}

export default CategoriesPreview;