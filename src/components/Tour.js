import React from 'react'
import { data } from '../data'
import CardContent from './Card'

const Tour = () => {
  const [places, setPlaces] = React.useState(data)

  const handleTour = (id) => {
    const notInterested = places.filter((place) => place.id !== id)
    setPlaces(notInterested);
  }
  const [isLoading, setIsLoading] = React.useState(true)

  
    setTimeout(() => {
      if (isLoading) {
        setIsLoading(false);
      }
      
      
    },700);
  

  return (
		<>
			{isLoading && <div className="text-center fw-bolder display-3">Loading....</div>}
      {!isLoading&&<CardContent
        places={places}
        title='Places To Tour'
        handleTour={handleTour}
      />}
		</>
	); 
}

export default Tour
