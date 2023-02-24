import './directory.styles.scss';
import DirectoryItem from '../directory-item/DirectoryItem';

const Directory = (props) => {
    const { categories } = props;
    return (
    <div className="directory-container">
        {categories.map((category, i) => {
        return (
            <DirectoryItem key={category + i} category={category}/>
        )
        })}
    </div>
    )
};

export default Directory;