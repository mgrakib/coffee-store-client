import React from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CoffeeDetails = () => {
    const loaderData = useLoaderData(); 
    const {
			name,
			chef,
			supplier,
			taste,
			category,
			details,
			price,
			photo,
		} = loaderData;

    return (
		<div>
			<div className='px-[100px] pt-[50px] pb-[50px]'>
				<div>
					<Link to={"/"}>
						<button className='flex items-center gap-3 h-[48px] w-[150px] hover:bg-[#E3B577] hover:border-2 hover:border-[#331A15] rounded-md justify-center text-[#331A15] hover:text-white '>
							<span className=' drop-shadow-[2px_2px_6px_rgba(0,0,0)] font-bold flex items-center gap-2'>
								<FaLongArrowAltLeft />
								Back to home
							</span>{" "}
						</button>
					</Link>
				</div>

				<div className='bg-[#F4F3F0] my-[50px] px-[100px] py-[80px]'>
					<div className='flex  items-center justify-around gap-10'>
						<div>
							<img
								src={photo}
								alt=''
							/>
						</div>

						<div>
							<h2 className='text-[40px] font-bold drop-shadow-[2px_2px_2px_rgba(51,26,21,.8)]'>
								Niceties
							</h2>
							<h2 className='text-[20px] text-[#5C5B5B]'>
								<span className='font-bold text-black'>
									Name:{" "}
								</span>
								{name}
							</h2>
							<h2 className='text-[20px] text-[#5C5B5B]'>
								<span className='font-bold text-black'>
									Chef:{" "}
								</span>
								{chef}
							</h2>
							<h2 className='text-[20px] text-[#5C5B5B]'>
								<span className='font-bold text-black'>
									Supplier:{" "}
								</span>
								{supplier}
							</h2>
							<h2 className='text-[20px] text-[#5C5B5B]'>
								<span className='font-bold text-black'>
									Taste:{" "}
								</span>
								{taste}
							</h2>
							<h2 className='text-[20px] text-[#5C5B5B]'>
								<span className='font-bold text-black'>
									Category:{" "}
								</span>
								{category}
							</h2>
							<h2 className='text-[20px] text-[#5C5B5B]'>
								<span className='font-bold text-black'>
									Details:{" "}
								</span>
								{details}
							</h2>
							<h2 className='text-[20px] text-[#5C5B5B]'>
								<span className='font-bold text-black'>
									Price:{" "}
								</span>
								{price}$
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CoffeeDetails;