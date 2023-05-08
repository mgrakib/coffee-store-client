
import bannar from '../../assets/header-bannar.png'
import logo from '../../assets/logo.png'


const Header = () => {
    return (
		<div>
			<div
				style={{ backgroundImage: `url(${bannar})` }}
				className='h-[120px] flex items-center justify-center'
			>
				<div className='flex items-center gap-3 justify-center'>
					<img
						src={logo}
						alt=''
					/>
					<h1 className='text-[60px] text-white'>
						Espresso Emporium
					</h1>
				</div>
			</div>

			
		</div>
	);
};

export default Header;