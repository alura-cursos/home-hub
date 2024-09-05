import { Box, Divider, Typography } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const ReminderCard = () => {
	return (
		<Card sx={{ background: '#F5F5F5' }}>
			<CardContent>
				<Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
					<Typography color={'#E65100'}>Lembretes</Typography>
				</Box>
				<Box display={'flex'} alignItems={'center'} justifyContent={'start'} sx={{ marginTop: 2 }}>
					<Typography variant='body2'>Ligar para fulano de tal</Typography>
				</Box>
				<Divider sx={{ color: '#000000' }} style={{ marginTop: 8 }} />
				<Box display={'flex'} alignItems={'center'} justifyContent={'start'} sx={{ marginTop: 1 }}>
					<Typography variant='body2'>Matricular em um novo curso da Alura</Typography>
				</Box>
				<Divider sx={{ color: '#000000' }} style={{ marginTop: 8 }} />
				<Box display={'flex'} alignItems={'center'} justifyContent={'start'} sx={{ marginTop: 1 }}>
					<Typography variant='body2'>Publicar meu projeto no GitHub</Typography>
				</Box>
				<Divider sx={{ color: '#000000' }} style={{ marginTop: 8 }} />
				<Box display={'flex'} alignItems={'center'} justifyContent={'start'} sx={{ marginTop: 1 }}>
					<Typography variant='body2'>Beber água</Typography>
				</Box>
			</CardContent>
		</Card>
	);
};
export default ReminderCard;
