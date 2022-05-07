import React from 'react'
import Navigation from './Navigation';
import sa from '../img/sa.png'
import Footer from './Footer';

const Home = () => {
  return (
		<div>
			<div className=' hero bg-pan-tl '>
				<Navigation />
				<div className='text-center '>
					<h2 className='display-1 hero-text '>Fun Places to Visit</h2>
					<a href='tour'>
						<button className='bg-primary p-2 hero-btn border-0 rounded-2 text-white'>
							View
						</button>
					</a>
				</div>
			</div>
			<section className='row m-5 section-container slide-in-elliptic-left-bck'>
				<div className='col-md-6 '>
					<p className='text-muted'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quidem
						ut animi vel, quis amet eveniet rem nulla quasi, laudantium minima
						laboriosam ab. Laudantium quaerat, accusamus voluptate expedita
						ullam natus! Praesentium consequuntur nihil consectetur quaerat nemo
						accusamus nesciunt est, in facere perferendis sed odio tenetur
						necessitatibus at exercitationem eos nisi debitis dolore. Saepe quas
						natus quasi assumenda minima nemo aperiam. Ad quasi id quos at
						perspiciatis soluta fugit molestiae necessitatibus harum? Veritatis
						delectus sit, explicabo saepe numquam nesciunt corporis, vitae
						maxime rerum sequi consequatur dolores aperiam amet. Necessitatibus,
						dignissimos unde! Voluptatum cum sapiente impedit consequuntur.
						Nostrum maiores ab corporis libero fugit odit earum praesentium
						atque porro optio, voluptate nulla asperiores quae id sapiente ut
						cumque? Earum doloribus facere veritatis minima. Facere fugiat sequi
						molestias praesentium assumenda accusantium asperiores rerum?
						Quisquam, asperiores. Iure reiciendis impedit sequi, quas
						perferendis fugit, tempora commodi obcaecati architecto, fuga
						debitis. Enim neque reiciendis assumenda vitae distinction Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Esse quidem ut
						animi vel, quis amet eveniet rem nulla quasi, laudantium minima
						laboriosam ab. Laudantium quaerat, accusamus voluptate expedita
						ullam natus! Praesentium consequuntur nihil consectetur quaerat nemo
						accusamus nesciunt est, in facere perferendis sed odio tenetur
						necessitatibus at exercitationem eos nisi debitis dolore. Saepe quas
						natus quasi assumenda minima nemo aperiam. Ad quasi id quos at
						perspiciatis soluta fugit molestiae necessitatibus harum? Veritatis
						delectus sit, explicabo saepe numquam nesciunt corporis, vitae
						maxime rerum sequi consequatur dolores aperiam amet. Necessitatibus,
						dignissimos unde! Voluptatum cum sapiente impedit consequuntur.
						Nostrum maiores ab corporis libero fugit odit earum praesentium
						atque porro optio, voluptate nulla asperiores quae id sapiente ut
						cumque? Earum doloribus facere veritatis minima. Facere fugiat sequi
						molestias praesentium assumenda accusantium asperiores rerum?
						Quisquam, asperiores. Iure reiciendis impedit sequi, quas
						perferendis fugit, tempora commodi obcaecati architecto, fuga
						debitis. Enim neque reiciendis assumenda vitae distinctio laboriosam
						ab. Laudantium quaerat, accusamus voluptate expedita ullam natus!
						Praesentium consequuntur nihil consectetur quaerat nemo accusamus
						nesciunt est, in facere perferendis sed odio tenetur!
					</p>
				</div>
				<div className='col-md-6'>
					<img src={sa} alt={sa} className='w-100 img-fluid' />
				</div>
			</section>
			<section>
				<Footer />
			</section>
		</div>
	);
}

export default Home