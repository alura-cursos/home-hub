import LoginBox from './components/LoginBox';
import backgroundImg from './components/assets/background.png';
import { helloWorld } from '@home-hub/react-utils';

export default function Root() {
	helloWorld();
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
