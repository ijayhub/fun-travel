import React from 'react'
import Card from 'react-bootstrap/Card';
import icon from '../img/arrow-right-square-fill.svg'
import Navigation from './Navigation';



const CardContent = ({title, places, handleTour}) => {
    return (
		<>
			<Navigation/>
				<div>
					<h1 className='header m-5 '>{title}</h1>
					<div className='underline underline1 '></div>
				</div>

				<div className='row'>
					{places.map((place) => (
						<div className='col-md-4 mb-5'>
							<Card className='margin shadow-sm h-100 slide-in-elliptic-top-fwd mt-5 '>
								<Card.Img
									variant='top'
									src={place.src}
									style={{ height: '300px', objectFit: 'cover' }}
								/>
								<Card.Body>
									<Card.Title className='mb-3 fw-bold'>
										{place.name}
										<span className='float-end price-bg'>{place.price}</span>
									</Card.Title>
									<Card.Text className='lh-lg text-muted para1'>
										{place.text}
									</Card.Text>
								</Card.Body>
								<div className='d-flex justify-content-center'>
									<button
										onClick={() => handleTour(place.id)}
										className='mb-4 w-50 btn-places p-1 rounded-2'>
										Not Interested
									</button>
								</div>
								<div className='d-flex justify-content-between p-1'>
									<a href={place.link} target='_blank' rel='noreferrer'>
										read more
									</a>
									<a href ='PlaceDetails'>
										<img src={icon} alt={icon} />
									</a>
								</div>
							</Card>
						</div>
					))}
					
				</div>
			</>
		);
}

export default CardContent
