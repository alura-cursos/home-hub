import LoginBox from './components/LoginBox';
import Parcel from 'single-spa-react/parcel';
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
			<Parcel config={() => System.import('@home-hub/react-parcel') as any} />
		</div>
	);
}
