import { Box, Grid } from '@mui/material';

import AcCard from '../components/AcCard';
import DoorCard from '../components/DoorCard';
import HeroCard from '../components/HeroCard';

const Devices = () => {
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
						title='Dispositos'
						subtitle='Controle seus dispositivos de perto ou de longe!'
					/>
				</Grid>
				<Grid item xs={4}>
					<AcCard />
				</Grid>
				<Grid item xs={4}>
					<DoorCard />
				</Grid>
			</Grid>
		</Box>
	);
};

export default Devices;
