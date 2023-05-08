import { Link } from 'react-router-dom';
import bg from '../../assets/images/more/13.jpg'
import logo from '../../assets/images/more/logo1.png'
import footer from '../../assets/images/more/footer.png'
import { FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";
const Footer = () => {
    return (
		<>
			<div
				style={{ backgroundImage: `url(${bg})` }}
				className='h-[680px] px-[100px] pt-[100px] pb-[50px]'
			>
				<div className='w-[75px]'>
					<img
						src={logo}
						alt=''
					/>
				</div>
				<div className='grid md:grid-cols-2 gap-10'>
					<div>
						<h2 className='text-[40px] font-bold drop-shadow-[2px_2px_2px_rgba(51,26,21,.8)]'>
							Espresso Emporium
						</h2>
						<p className='my-[25px]'>
							Always ready to be your friend. Come & Contact with
							us to share your memorable moments, to share with
							your best companion.
						</p>
						<ul className='flex items-center text-[30px] gap-5'>
							<Link>
								<li>
									<FaFacebook />
								</li>
							</Link>
							<Link>
								<li>
									<FaTwitter />
								</li>
							</Link>
							<Link>
								<li>
									<FaInstagram />
								</li>
							</Link>
							<Link>
								<li>
									<FaLinkedin />
								</li>
							</Link>
						</ul>

						<div className='text-[20px]'>
							<h4 className='text-[40px] font-bold drop-shadow-[2px_2px_2px_rgba(51,26,21,.8)] my-[25px]'>
								Get in Touch
							</h4>
							<p className='flex items-center gap-3'>
								<FaPhoneAlt /> +88 01533 333 333
							</p>
							<p className='flex items-center gap-3 my-[20px]'>
								<FaEnvelope /> info@gmail.com
							</p>
							<p className='flex items-center gap-3'>
								<FaMapMarkerAlt /> 72, Wall street, King Road,
								Dhaka
							</p>
						</div>
					</div>
					<div>
						<h2 className='text-[40px] font-bold drop-shadow-[2px_2px_2px_rgba(51,26,21,.8)]'>
							Connect with Us
						</h2>

						<div className='py-[25px] flex flex-col gap-4'>
							<input
								type='text'
								name=''
								id=''
								className='w-full h-[48px] px-3 outline-none border-2 border-transparent focus:rounded-md  focus:border-[#E3B577] focus:shadow-[0px_0px_6px_rgba(27,26,26)]'
								placeholder='Name'
							/>

							<input
								type='text'
								name=''
								id=''
								className='w-full h-[48px] px-3 outline-none border-2 border-transparent focus:rounded-md  focus:border-[#E3B577] focus:shadow-[0px_0px_6px_rgba(27,26,26)]'
								placeholder='Email'
							/>
							<textarea
								name=''
								id=''
								className='w-full h-[130px] p-4 outline-none border-2 border-transparent focus:rounded-md  focus:border-[#E3B577] focus:shadow-[0px_0px_6px_rgba(27,26,26)]'
								placeholder='Message'
							></textarea>

							<button className='border-2 border-[#331A15] w-[150px] h-[48px] rounded-[30px] text-[18px]'>
								Send Message
							</button>
						</div>
					</div>
				</div>
			</div>
			<div style={{ backgroundImage: `url(${footer})`}} className='h-[50px] flex items-center justify-center'>
				<p className='text-white '>Copyright Espresso Emporium ! All Rights Reserved</p>
			</div>
		</>
	);
};

export default Footer;