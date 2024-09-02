import * as React from 'react';

import {
	Card,
	CardContent,
	Snackbar,
	SnackbarCloseReason,
	Stack,
	Switch,
	Typography,
} from '@mui/material';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const marks = [
	{
		value: 16,
		label: '16°C',
	},
	{
		value: 27,
		label: '27°C',
	},
];

function valuetext(value: number) {
	return `${value}°C`;
}

const AcCard = () => {
	const [isSnackbarOpen, setIsSnackbarOpen] = React.useState(false);
	const [isAcOn, setIsAcOn] = React.useState(true);

	const handleClose = (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
		if (reason === 'clickaway') {
			return;
		}
		setIsSnackbarOpen(false);
	};
	return (
		<Card sx={{ background: '#F5F5F5' }}>
			<CardContent sx={{ marginX: 5, marginY: 2 }}>
				<Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
					<Typography color={'#E65100'}>Ar-Condicionado</Typography>
				</Box>
				<Box>
					<Stack direction='row' spacing={1} alignItems='center'>
						<Typography>Off</Typography>
						<Switch
							defaultChecked
							inputProps={{ 'aria-label': 'ant design' }}
							onClick={() => {
								setIsAcOn(!isAcOn);
								setIsSnackbarOpen(true);
							}}
						/>
						<Typography>On</Typography>
					</Stack>
					<Slider
						defaultValue={20}
						getAriaValueText={valuetext}
						valueLabelDisplay='auto'
						marks={marks}
						min={16}
						max={27}
					/>
				</Box>
			</CardContent>
			{isSnackbarOpen && (
				<Snackbar
					open={isSnackbarOpen}
					autoHideDuration={2000}
					onClose={handleClose}
					message={`Ar-Condicionado ${isAcOn ? 'ligado' : 'desligado'}.`}
				/>
			)}
		</Card>
	);
};

export default AcCard;
