import { useState, useEffect } from 'react'
import { getAllStarships } from '../../services/sw-api'
import { Link } from 'react-router-dom'


const StarshipList = () => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
    }
    fetchStarshipList()
  }, [])

  return (
    <div>
      <h3>Starship List</h3>
      { starships ?
      <>
        <div className="starship-container">
          {starships.map(starship =>
            <Link key={starship.name} state={{ starship }} to='/starship'>
              <div className="starship-div">
                {starship.name}
              </div>
            </Link>
          )}
        </div>
      </>
      :
      <>
        <p>Starships are loading...</p>
      </>
      }
      
    </div>
  );
}

export default StarshipList;