
import { useContext } from 'react';
import { FaEye, FaPencilAlt, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContextAPI } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const CoffeeCard = ({ coffee }) => {
    // eslint-disable-next-line no-unused-vars
    const {_id, name, chef, supplier, taste, category, details, photo, price } = coffee;
    const { coffees , setCoffees } = useContext(AuthContextAPI);
    const handelDelete = _id => {
        
        
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then(result => {
			if (result.isConfirmed) {
				

                fetch(
                    `http://localhost:5000/delete-coffee/${_id}`,
                    {
                        method: "DELETE",
                    }
                ).then(res => res.json()).then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
                        const remainingCoffee = coffees.filter(coffee => coffee._id !== _id);
                        setCoffees(remainingCoffee);
					}
                })
					
			}
		});
	};

    return (
		<div>
			<div className=' bg-[#F5F4F1] shadow-[0px_0px_5px_rgba(0,0,0,.5)] text-left flex items-center justify-between rounded-md p-[30px] '>
				<figure className='h-[200px]'>
					<img
						src={photo}
						alt='Movie'
						className='h-full'
					/>
				</figure>
				<div className=''>
					<h2 className='text-[20px] text-[#5C5B5B]'>
						<span className='font-bold text-black'>Name: </span>
						{name}
					</h2>
					<h2 className='text-[20px] text-[#5C5B5B]'>
						<span className='font-bold text-black'>Chef: </span>
						{chef}
					</h2>
					<h2 className='text-[20px] text-[#5C5B5B]'>
						<span className='font-bold text-black'>Test: </span>
						{taste}
					</h2>
					<h2 className='text-[20px] text-[#5C5B5B]'>
						<span className='font-bold text-black'>Test: </span>
						{price? price : 0}$
					</h2>
				</div>
				<div className='flex flex-col gap-3'>
					<Link to={`coffee-details/${_id}`}>
						<button className='p-3 text-white bg-[#D2B48C] rounded-md'>
							<FaEye />
						</button>
					</Link>
					<Link to={`/update-coffee/${_id}`}>
						<button className='p-3 text-white bg-[#3C393B] rounded-md'>
							<FaPencilAlt />
						</button>
					</Link>
					<button
						onClick={() => handelDelete(_id)}
						className='p-3 text-white bg-[#EA4744] rounded-md'
					>
						<FaTrash />
					</button>
				</div>
			</div>
		</div>
	);
};

export default CoffeeCard;