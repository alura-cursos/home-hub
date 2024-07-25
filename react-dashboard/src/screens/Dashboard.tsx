import { Box, Grid } from '@mui/material';

import HeroCard from '../components/HeroCard';
import UsersCard from '../components/UsersCard';
import WaterCard from '../components/WaterCard';
import { checkIsAuthenticated } from '@home-hub/react-utils';

const Dashboard: React.FC = () => {
	const { authInfo } = checkIsAuthenticated();
	const heroCardTitle = `Olá, ${
		!!authInfo?.firstName ? `${authInfo?.firstName} ${authInfo?.lastName}` : authInfo?.email
	}
	!`;
	return (
		<Box
			width={3 / 4}
			my={4}
			display='flex'
			alignItems='center'
			gap={4}
			p={2}
			sx={{ margin: 'auto' }}
		>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<HeroCard
						title={heroCardTitle}
						subtitle='Confira as informações da sua casa inteligente!'
					/>
				</Grid>
				<Grid item xs={4}>
					<UsersCard />
				</Grid>
				<Grid item xs={4}>
					<WaterCard />
				</Grid>
			</Grid>
		</Box>
	);
};

export default Dashboard;
