import './CategoriesDirectory.styles.scss';
import CategoryItem from '../category-item/CategoryItem';

const CategoriesDirectory = (props) => {
    const { categories } = props;
    return (
    <div className="categories-container">
        {categories.map((category, i) => {
        return (
            <CategoryItem key={category + i} category={category}/>
        )
        })}
    </div>
    )
};

export default CategoriesDirectory;