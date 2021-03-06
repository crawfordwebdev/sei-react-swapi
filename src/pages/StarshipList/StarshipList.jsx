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
      { starships ?
      <>
        <div className="starship-container">
          {starships.map((starship, idx) =>
            <Link className="starship-link" key={idx} state={{ starship }} to='/starship'>
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