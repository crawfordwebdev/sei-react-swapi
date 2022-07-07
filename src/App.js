import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipPage from './pages/StarshipPage/StarshipPage';
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <h1><Link to='/'>Star Wars Starship</Link></h1>
      <Routes>
        <Route path="/" element={<StarshipList />} />
        <Route path="/starship" element={<StarshipPage />} />
      </Routes>
    </>
  );
}

export default App;
