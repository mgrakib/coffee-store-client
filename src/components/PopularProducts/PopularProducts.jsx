
import vector from '../../assets/images/icons/Vector.png'
import { Link } from 'react-router-dom';
import CoffeeCard from '../CoffeeCard/CoffeeCard';
import { useContext } from 'react';
import { AuthContextAPI } from '../../Provider/AuthProvider';
const PopularProducts = () => {
	const { coffees } = useContext(AuthContextAPI);

	
    return (
		<div className='text-center my-[80px]'>
			<p>--- Sip & Savor ---</p>
			<h2 className='text-[rgb(51,26,21)] text-[40px] drop-shadow-[2px_2px_3px_rgba(51,26,21,1)] font-bold'>
				Our Popular Products
			</h2>
			<div className='flex items-center justify-center my-4'>
				<Link to={"/add-new-coffee"}>
					<button className='flex items-center gap-3 h-[48px] w-[150px] bg-[#E3B577] border-2 border-[#331A15] rounded-md justify-center hover:bg-[#F5F4F1]'>
						<span className='text-white drop-shadow-[2px_2px_6px_rgba(0,0,0)] font-bold'>
							Add Coffee
						</span>{" "}
						<img
							src={vector}
							alt=''
						/>
					</button>
				</Link>
			</div>

			<div className='grid md:grid-cols-2 gap-10 mx-[100px] my-12'>
				{coffees.map(coffee => (
					<CoffeeCard
						key={coffee._id}
						coffee={coffee}
					/>
				))}
			</div>
		</div>
	);
};

export default PopularProducts;