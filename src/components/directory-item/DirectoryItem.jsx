import './directoryItem.styles.scss';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category: { title, imageUrl } }) => {
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(`shop/${title.toLowerCase()}`);

  return (
    <div className="directory-item-container" onClick={onNavigateHandler}>
        <div className="background-image" style={{
            backgroundImage: `url(${imageUrl})`
        }}></div>
        <div to={`/shop/${title.toLowerCase()}`} className="body">
              <h2>{title}</h2>
              <p>Shop Now</p>
        </div>
    </div>
  )
}

export default DirectoryItem;