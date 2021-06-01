import './styles/css/page/main.css';
import Search from './components/search/Search';
import LikedSites from './components/likedSites/LikedSites';

function App() {
  return (
    <div className="container__main">
      <Search />
      <LikedSites />
    </div>
  );
}

export default App;
