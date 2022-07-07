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
      {starshipDetails ?
      <>
        <div className="starshipdetails-container">
          <div><span>Name:</span><span>{starshipDetails.name}</span></div>
          <div><span>Model:</span><span>{starshipDetails.model}</span></div>
          <div><Link to='/'>Return</Link></div>
        </div>
        {pilots ?
          <>
          <h3>Pilot List</h3>
          {pilots.map((pilot, idx) => 
            <div key={idx}>
              {pilot.name}
            </div>
          )}
          </>
        :
          <>
            <p>No Pilots</p>
          </>
        }
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
