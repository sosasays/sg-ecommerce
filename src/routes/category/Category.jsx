import { CategoryContainer, CategoryTitle } from './category.styles';

import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../../components/product-card/ProductCard';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [ products, setProducts ] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {/* USE THIS SAFE GUARD TO ENSURE THAT ASYNC DATA THAT IS FETCHED IS NOT ATTEMPTED TO BE RENDERED*/}
                { products &&
                    products.map(product =>
                        <ProductCard key={product.id} product={product}/>
                    )
                }
            </CategoryContainer>
        </>
    )
}

export default Category;