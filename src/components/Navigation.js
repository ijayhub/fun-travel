import React from 'react'
import { Nav, Container, Navbar } from 'react-bootstrap';
import tour from '../img/icon.png'

const Navigation = () => {
    
  return (
		<div>
			<Navbar expand='lg '>
				<Container>
					<Navbar.Brand href='#home' className='fw-bold text-black hero-head'>
						<img
							src={tour}
							alt={tour}
							style={{ width: '100px', height: '100px', borderRadius: '50%' }}
                        
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav '>
						<Nav className='hero-head'>
							<Nav.Link href='/' className='fw-bold text-black'>
								Home
							</Nav.Link>
							<Nav.Link href='tour' className='fw-bold text-black'>
								Places to tour
							</Nav.Link>
							<Nav.Link href='PlaceDetails' className='fw-bold text-black'>
								About Us
							</Nav.Link>
							
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default Navigation