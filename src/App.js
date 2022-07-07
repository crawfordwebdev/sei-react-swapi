import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipPage from './pages/StarshipPage/StarshipPage';
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <Link to='/' className="title"><h1>Star Wars Starship</h1></Link>
      <Routes>
        <Route path="/" element={<StarshipList />} />
        <Route path="/starship" element={<StarshipPage />} />
      </Routes>
    </>
  );
}

export default App;
