import LoginBox from './components/LoginBox';
import backgroundImg from './components/assets/background.png';

export default function Root() {
	return (
		<div
			style={{
				backgroundImage: `url(${backgroundImg})`,
				backgroundSize: 1000,
				backgroundRepeat: 'repeat-x',
				backgroundPosition: 'bottom',
				height: '90vh',
			}}
		>
			<LoginBox />
		</div>
	);
}
