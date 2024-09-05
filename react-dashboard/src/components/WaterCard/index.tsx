import { Box, Typography } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { PieChart } from '@mui/x-charts';
import WaterIcon from '../../assets/water.png';

const WaterCard = () => {
	return (
		<Card sx={{ background: '#F5F5F5' }}>
			<CardContent>
				<Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
					<img src={WaterIcon} alt='Water Icon' style={{ width: 50, height: 50 }} />
					<Typography color={'#E65100'}>Consumo de Água</Typography>
					<PieChart
						series={[
							{
								data: [
									{ id: 0, value: 10, label: 'Chuveiros' },
									{ id: 1, value: 15, label: 'Piscina' },
									{ id: 2, value: 20, label: 'Lava e seca' },
								],
							},
						]}
						sx={{ marginTop: 2 }}
						width={300}
						height={131}
					/>
				</Box>
			</CardContent>
		</Card>
	);
};
export default WaterCard;
