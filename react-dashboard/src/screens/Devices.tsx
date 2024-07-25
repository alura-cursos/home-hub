import { Box, Grid } from '@mui/material';

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
					<HeroCard title='Hello' subtitle='World' />
				</Grid>
			</Grid>
		</Box>
	);
};

export default Devices;
