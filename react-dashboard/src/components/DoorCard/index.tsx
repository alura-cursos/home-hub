import {
	Button,
	Card,
	CardContent,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from '@mui/material';

import Box from '@mui/material/Box';
import { useState } from 'react';

const DoorCard = () => {
	const [selectedDoor, setSelectedDoor] = useState({ door: 'entrada', isOpen: false });
	return (
		<Card sx={{ background: '#F5F5F5' }}>
			<CardContent sx={{ marginX: 5, marginY: 2 }}>
				<Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
					<Typography color={'#E65100'}>Portas</Typography>
				</Box>
				<Box>
					<FormControl fullWidth>
						<InputLabel id='simple-select-label'>Porta</InputLabel>
						<Select
							labelId='simple-select-label'
							id='simple-select'
							value={selectedDoor.door}
							label='Age'
							onChange={({ target }) =>
								setSelectedDoor({ ...selectedDoor, door: target.value.toString() })
							}
						>
							<MenuItem value='entrada'>Entrada</MenuItem>
							<MenuItem value='serviço'>Serviço</MenuItem>
							<MenuItem value='lateral'>Lateral</MenuItem>
						</Select>
					</FormControl>
					<Button
						variant='contained'
						size='large'
						sx={{ backgroundColor: '#9C27B0', marginTop: '20px', marginX: '32px' }}
						onClick={() => setSelectedDoor({ ...selectedDoor, isOpen: true })}
					>
						Abrir
					</Button>
					<Button
						variant='contained'
						size='large'
						sx={{ backgroundColor: 'red', marginTop: '20px', marginX: '32px' }}
						onClick={() => setSelectedDoor({ ...selectedDoor, isOpen: false })}
					>
						Trancar
					</Button>
				</Box>
			</CardContent>
		</Card>
	);
};

export default DoorCard;
