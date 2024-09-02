import { Box, Card, CardContent, Divider, Typography } from '@mui/material';

const RemindersCard = () => {
	return (
		<Card sx={{ background: '#F5F5F5' }}>
			<CardContent>
				<Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
					<Typography color={'#E65100'}>Lembretes</Typography>
				</Box>
				<Box display={'flex'} alignItems={'center'} justifyContent={'start'} sx={{ marginTop: 2 }}>
					<Typography variant='body2'>Comprar pão</Typography>
				</Box>
				<Divider sx={{ color: '#000000' }} style={{ marginTop: 8 }} />
				<Box display={'flex'} alignItems={'center'} justifyContent={'start'} sx={{ marginTop: 1 }}>
					<Typography variant='body2'>Telefonar para o Fulano</Typography>
				</Box>
				<Divider sx={{ color: '#000000' }} style={{ marginTop: 8 }} />
				<Box display={'flex'} alignItems={'center'} justifyContent={'start'} sx={{ marginTop: 1 }}>
					<Typography variant='body2'>Estudar micro-frontend na Alura</Typography>
				</Box>
				<Divider sx={{ color: '#000000' }} style={{ marginTop: 8 }} />
				<Box display={'flex'} alignItems={'center'} justifyContent={'start'} sx={{ marginTop: 1 }}>
					<Typography variant='body2'>Selecionar um novo curso na Alura</Typography>
				</Box>
			</CardContent>
		</Card>
	);
};

export default RemindersCard;
