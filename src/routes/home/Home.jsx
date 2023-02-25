// Components Import
import Directory from '../../components/directory/Directory';
import { Outlet } from 'react-router-dom';

const Home = () => {
  
  return (
    <div className="app">
        <Outlet />
        <Directory />
    </div>
  );
}

export default Home;