import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import tour from '../img/icon.png';
import gram from '../img/3.png'
import twitter from '../img/twitter (2).svg'
import website from '../img/globe2.svg'
import linked from '../img/linkedin (1).svg'
import hash from '../img/hash.svg'

const Footer = () => {
    const ig = 'https://www.instagram.com/ij.ijay/';
    const tweet = 'https://twitter.com/ijaydimples';
    const portfolio = 'https://portfolio-ijay.netlify.app/';
    const linkedIn = 'https://www.linkedin.com/in/ijeoma-igboagu/';
    const blogLink = 'https://ijaycent.hashnode.dev/';
    const ijayGit = 'https://github.com/ijayhub';

    

    return (
			<div>
				<footer className='p-5 footer-home'>
					<div>
						<img
							src={tour}
							alt={tour}
							style={{ width: '100px', height: '100px', borderRadius: '50%' }}
						/>
					</div>
					<div className='col-md-12 d-flex justify-content-center mx-3 '>
						<div className='mx-3'>
							<a href={linkedIn} target='_blank' rel='noreferrer'>
								<img src={linked} alt={linked} />
							</a>
						</div>
						<div className='mx-3'>
							<a href={ig} target='_blank' rel='noreferrer'>
								<img
									src={gram}
									alt={gram}
									style={{
										width: '20px',
										height: '20px',
										borderRadius: '50%',
									}}
								/>
							</a>
						</div>

						<div className='mx-3'>
							<a href={tweet} target='_blank' rel='noreferrer'>
								<img src={twitter} alt={twitter} />
							</a>
						</div>
						<div className='mx-3'>
							<a href={portfolio} target='_blank' rel='noreferrer'>
								<img src={website} alt={website} />
							</a>
						</div>
						<div className='mx-3'>
							<a href={blogLink} target='_blank' rel='noreferrer'>
								<img src={hash} alt={hash} />
							</a>
						</div>
					</div>

					<div className='col-md-12 d-flex justify-content-center'>
						<Navbar expand='lg '>
							<Nav className='hero-head footer-resize'>
								<Nav.Link href='/' className='fw-bold text-black'>
									Home |
								</Nav.Link>
								<Nav.Link href='tour' className='fw-bold text-black'>
									Places to tour |
								</Nav.Link>
								<Nav.Link href='PlaceDetails' className='fw-bold text-black'>
									About Us
								</Nav.Link>
							</Nav>
						</Navbar>
					</div>
					<hr />

					<div>
						<p className='text-white footer-code float-end'>
							Designed and code by
							<a
								href={ijayGit}
								target='_blank'
								rel='noreferrer'
								className='text-black'>
								Ijay&copy;2022
							</a>
						</p>
					</div>
				</footer>
			</div>
		);
}

export default Footer