
import hero from "../../assets/images/more/3.png";
import cup from "../../assets/images/icons/1.png";
import bages from "../../assets/images/icons/2.png";
import rount from "../../assets/images/icons/3.png";
import mog from "../../assets/images/icons/4.png";
const HeroSection = () => {
    return (
		<div>
			{/* hero  */}
			<div
				style={{
					backgroundImage: `url(${hero})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
				className='h-[800px] relative'
			>
				<div className='text-white absolute top-1/2 -translate-y-1/2 right-10'>
					<h2 className='text-[35px]'>
						Would you like a Cup of Delicious Coffee?
					</h2>
					<p className='my-5'>
						It's coffee time - Sip & Savor - Relaxation in every
						sip! Get the nostalgia back!! Your companion of every{" "}
						<br />
						moment!!! Enjoy the beautiful moments and make them
						memorable.
					</p>
					<button className='h-[48px] w-[138px] bg-[#E3B577] hover:bg-transparent hover:border text-[#242222] hover:text-white'>
						Learn More
					</button>
				</div>
			</div>

			{/* details */}
			<div className='bg-[#ECEAE3] h-[300px] flex items-center justify-center gap-10 px-[100px]'>
				<div>
					<div>
						<img
							src={cup}
							alt=''
						/>
					</div>
					<h4>Awesome Aroma</h4>
					<p>
						You will definitely be a fan of the design & aroma of
						your coffee
					</p>
				</div>
				<div>
					<div>
						<img
							src={bages}
							alt=''
						/>
					</div>
					<h4>Awesome Aroma</h4>
					<p>
						You will definitely be a fan of the design & aroma of
						your coffee
					</p>
				</div>
				<div>
					<div>
						<img
							src={rount}
							alt=''
						/>
					</div>
					<h4>Awesome Aroma</h4>
					<p>
						You will definitely be a fan of the design & aroma of
						your coffee
					</p>
				</div>
				<div>
					<div>
						<img
							src={mog}
							alt=''
						/>
					</div>
					<h4>Awesome Aroma</h4>
					<p>
						You will definitely be a fan of the design & aroma of
						your coffee
					</p>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;