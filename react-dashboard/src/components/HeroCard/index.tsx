import { Box, Typography } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import VisaoGeral from '../../assets/visao-geral.png';
import { checkIsAuthenticated } from '@home-hub/react-utils';

const HeroCard = () => {
	const { authInfo } = checkIsAuthenticated();
	return (
		<Card sx={{ background: '#FFF3E0' }}>
			<CardContent>
				<Box
					display={'flex'}
					flexDirection={'row'}
					alignItems={'center'}
					justifyContent={'space-evenly'}
				>
					<Box>
						<Typography variant='h5'>
							Olá,{' '}
							{!!authInfo?.firstName
								? `${authInfo?.firstName} ${authInfo?.lastName}`
								: authInfo?.email}
							!
						</Typography>
						<Typography>Confira as informações da sua casa inteligente!</Typography>
					</Box>
					<img src={VisaoGeral} alt='Visão Geral' height={140} />
				</Box>
			</CardContent>
		</Card>
	);
};
export default HeroCard;
