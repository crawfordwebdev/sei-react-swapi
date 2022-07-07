import { useState, useEffect } from 'react'
import { getStarship, getPilots } from '../../services/sw-api'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const StarshipPage = () => {
    const [starshipDetails, setStarshipDetails] = useState({})
    const [pilots, setPilots] = useState([])

    const location = useLocation()
    
    useEffect(() => {
      const fetchDetails = async () => {
        const starshipDetails = await getStarship(location.state.starship.url)
        setStarshipDetails(starshipDetails)
      }
      fetchDetails()
      
    }, [location.state.starship.url])

    useEffect(() => {
      const fetchDetails = async () => {
        const pilots = await getPilots(location.state.starship.pilots)
        setPilots(pilots)
      }
      fetchDetails()
    }, [location.state.starship.pilots])

    
  return (
    <>
      {starshipDetails.name ?
      <>
        <div className="starshipdetails-container">
          <div><span>Name:</span><span>{starshipDetails.name}</span></div>
          <div><span>Model:</span><span>{starshipDetails.model}</span></div>
          {pilots ?
          <>
            {location.state.starship.pilots.length > 0 ?
              <>
                <div class="pilots-container">
                  <div>Pilot List: </div>
                  <div class="pilots-list">
                  {pilots.map((pilot, idx) => 
                    <div key={idx}>
                      {pilot.name}
                    </div>
                  )}
                  </div>
                </div>
              </>
              :
              <>
              <div className="no-data-container">No Pilots</div>
              </>
            }
          </>
          :
          <>
            <p>Loading Pilots...</p>
          </>
        }
          <div><Link to='/'>Return</Link></div>
        </div>

      </>
      :
      <>
        <p>Loading Starship...</p>
      </>
      }
   </>
  );
}
 
export default StarshipPage;
