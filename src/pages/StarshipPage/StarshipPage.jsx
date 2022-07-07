import { useState, useEffect } from 'react'
import { getStarship } from '../../services/sw-api'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'


const StarshipPage = () => {
    const [starshipDetails, setStarshipDetails] = useState({})
    const location = useLocation()
    
    useEffect(() => {
      const fetchDetails = async () => {
        const starshipDetails = await getStarship(location.state.starship.url)
        setStarshipDetails(starshipDetails)
      }
      fetchDetails()
      
    }, [location.state.starship.url])

    
  return (
    <>
      {starshipDetails ?
      <>
        <div className="starshipdetails-container">
          <div><span>Name:</span><span>{starshipDetails.name}</span></div>
          <div><span>Model:</span><span>{starshipDetails.model}</span></div>
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
