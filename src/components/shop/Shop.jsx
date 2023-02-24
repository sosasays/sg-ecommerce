import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../../routes/categories-preview/CategoriesPreview';
import Category from '../../routes/category/Category';

import './shop.styles.scss';

const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview />}></Route>
            <Route path=':category' element={<Category />}></Route>
        </Routes>
    )
}

export default Shop;