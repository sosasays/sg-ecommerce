import './directory.styles.scss';
import DirectoryItem from '../directory-item/DirectoryItem';

const categories = [
    {
        "id": 1,
        "title": "Hats",
        "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
        "id": 2,
        "title": "Jackets",
        "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
        "id": 3,
        "title": "Sneakers",
        "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
        "id": 4,
        "title": "Womens",
        "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
        "id": 5,
        "title": "Mens",
        "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
];

const Directory = () => {
    
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