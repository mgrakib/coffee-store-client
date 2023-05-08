/** @format */

import React, { useContext } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContextAPI } from "../../Provider/AuthProvider";

const UpdateCoffee = () => {
	const loaderCoffee = useLoaderData();
	const { coffees, setCoffees } = useContext(AuthContextAPI);

	const handelUpdateCoffee = e => {
		e.preventDefault();
		const from = e.target;
		const name = from.name.value;
		const chef = from.chef.value;
		const supplier = from.supplier.value;
		const taste = from.taste.value;
		const category = from.category.value;
		const details = from.details.value;
		const price = from.price.value;
		const photo = from.photo.value;

		const coffee = {
			name,
			chef,
			supplier,
			taste,
			category,
			details,
			price,
			photo,
		};

		fetch(`http://localhost:5000/update-coffee/${loaderCoffee._id}`, {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(coffee),
		})
			.then(res => res.json())
			.then(data => {
				if (data.acknowledged) {
					Swal.fire({
						icon: "success",
						title: "Added...",
						text: "This Coffee updated successfully",
					});

					coffee._id = loaderCoffee._id;
					const remainingCoffees = coffees.filter(
						coffee => coffee._id !== loaderCoffee._id
					);
					setCoffees([...remainingCoffees, coffee]);
				}
			});
	};

	return (
		<>
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
					<h2 className='text-[40px] font-bold drop-shadow-[2px_2px_2px_rgba(51,26,21,.8)] text-center'>
						Update Existing Coffee Details
					</h2>
					<p className='text-center my-[30px]'>
						It is a long established fact that a reader will be
						distraceted by the readable content of a page when
						looking at its layout. The point of using Lorem Ipsum is
						that it has a more-or-less normal distribution of
						letters, as opposed to using Content here.
					</p>

					<form onSubmit={handelUpdateCoffee}>
						{/* coffee name and chef */}
						<div className='flex items-center mb-6'>
							<div className='form-control w-1/2'>
								<label className='block'>
									<span className=''>Coffee Name</span>
								</label>

								<label className='block mt-3'>
									<input
										type='text'
										placeholder='Enter coffee name'
										className='w-full h-[48px] px-3 outline-none border-2 border-transparent focus:rounded-md  focus:border-[#E3B577] focus:shadow-[0px_0px_6px_rgba(27,26,26)]'
										name='name'
										defaultValue={loaderCoffee.name}
									/>
								</label>
							</div>
							<div className='form-control w-1/2 ml-8'>
								<label className='block'>
									<span className=''>Chef</span>
								</label>

								<label className='block mt-3'>
									<input
										type='text'
										placeholder='Enter coffee chef'
										className='w-full h-[48px] px-3 outline-none border-2 border-transparent focus:rounded-md  focus:border-[#E3B577] focus:shadow-[0px_0px_6px_rgba(27,26,26)]'
										name='chef'
										defaultValue={loaderCoffee.chef}
									/>
								</label>
							</div>
						</div>
						{/* Supplier and Taste */}
						<div className='flex items-center mb-6'>
							<div className='form-control w-1/2'>
								<label className='block'>
									<span className=''>Supplier</span>
								</label>

								<label className='block mt-3'>
									<input
										type='text'
										placeholder='Enter coffee Supplier'
										className='w-full h-[48px] px-3 outline-none border-2 border-transparent focus:rounded-md  focus:border-[#E3B577] focus:shadow-[0px_0px_6px_rgba(27,26,26)]'
										name='supplier'
										defaultValue={loaderCoffee.supplier}
									/>
								</label>
							</div>
							<div className='form-control w-1/2 ml-8'>
								<label className='block'>
									<span className=''>Taste</span>
								</label>

								<label className='block mt-3'>
									<input
										type='text'
										placeholder='Enter coffee taste'
										className='w-full h-[48px] px-3 outline-none border-2 border-transparent focus:rounded-md  focus:border-[#E3B577] focus:shadow-[0px_0px_6px_rgba(27,26,26)]'
										name='taste'
										defaultValue={loaderCoffee.taste}
									/>
								</label>
							</div>
						</div>

						{/* Category and Details */}
						<div className='flex items-center mb-6'>
							<div className='form-control w-1/2'>
								<label className='block'>
									<span className=''>Category</span>
								</label>

								<label className='block mt-3'>
									<input
										type='text'
										placeholder='Enter coffee Category'
										className='w-full h-[48px] px-3 outline-none border-2 border-transparent focus:rounded-md  focus:border-[#E3B577] focus:shadow-[0px_0px_6px_rgba(27,26,26)]'
										name='category'
										defaultValue={loaderCoffee.category}
									/>
								</label>
							</div>
							<div className='form-control w-1/2 ml-8'>
								<label className='block'>
									<span className=''>Details</span>
								</label>

								<label className='block mt-3'>
									<input
										type='text'
										placeholder='Enter coffee Details'
										className='w-full h-[48px] px-3 outline-none border-2 border-transparent focus:rounded-md  focus:border-[#E3B577] focus:shadow-[0px_0px_6px_rgba(27,26,26)]'
										name='details'
										defaultValue={loaderCoffee.details}
									/>
								</label>
							</div>
						</div>

						{/* price and price */}
						<div className='flex items-center mb-6'>
							<div className='form-control w-1/2'>
								<label className='block'>
									<span className=''>Price</span>
								</label>

								<label className='block mt-3'>
									<input
										type='text'
										placeholder='Enter coffee Price'
										className='w-full h-[48px] px-3 outline-none border-2 border-transparent focus:rounded-md  focus:border-[#E3B577] focus:shadow-[0px_0px_6px_rgba(27,26,26)]'
										name='price'
										defaultValue={loaderCoffee.price}
									/>
								</label>
							</div>
							<div className='form-control w-1/2 ml-8'>
								<label className='block'>
									<span className=''>Photo</span>
								</label>

								<label className='block mt-3'>
									<input
										type='text'
										placeholder='Enter coffee Photo'
										className='w-full h-[48px] px-3 outline-none border-2 border-transparent focus:rounded-md  focus:border-[#E3B577] focus:shadow-[0px_0px_6px_rgba(27,26,26)]'
										name='photo'
										defaultValue={loaderCoffee.photo}
									/>
								</label>
							</div>
						</div>

						<div className='w-full'>
							<button
								type='submit'
								className='flex w-full items-center gap-3 h-[48px]  bg-[#E3B577] border-2 border-[#331A15] rounded-md justify-center hover:bg-[#F5F4F1]'
							>
								<span className='text-white drop-shadow-[2px_2px_6px_rgba(0,0,0)] font-bold'>
									Update Coffee Details
								</span>{" "}
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default UpdateCoffee;
