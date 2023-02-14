import './categories.styles.scss';

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Wall Art'
    },
    {
      id: 2,
      title: 'Home Decor'
    },
    {
      id: 3,
      title: 'Lifestyle'
    },
    {
      id: 4,
      title: 'Apparel'
    },
    {
      id: 5,
      title: 'Tech'
    },
  ]

  return (
    <div className="categories-container">
    {categories.map(category => {
      const { title, id } = category;
      return (
          <div key={id + title} className="category-container">
            {/* <img src="" alt="" /> */}
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
      )
    })}
    </div>
  );
}

export default App;