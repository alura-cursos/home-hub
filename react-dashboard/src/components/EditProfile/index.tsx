import { AuthInfo, checkIsAuthenticated, editAuthInfo } from '@home-hub/react-utils';
import { Box, Button, TextField } from '@mui/material';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';

import Parcel from 'single-spa-react/parcel';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

type FormValues = Omit<typeof AuthInfo, 'authId'>;

const EditProfile = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const { authInfo } = checkIsAuthenticated();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>({ defaultValues: authInfo });

	const onSubmit = (data: FormValues) => editAuthInfo({ ...data, authId: authInfo.authId });

	const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

	const handleClose = (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
		if (reason === 'clickaway') {
			return;
		}

		setIsSnackbarOpen(false);
	};

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
			<TextField
				id='email'
				label='Email'
				variant='standard'
				sx={{ marginTop: '16px', marginX: '32px' }}
				error={!!errors.email}
				helperText={errors.email?.message}
				{...register('email', {
					required: 'Campo de e-mail obrigatório.',
					pattern: { value: /\S+@\S+\.\S+/, message: 'E-mail inválido.' },
				})}
			/>
			<TextField
				id='firstName'
				label='Nome'
				variant='standard'
				sx={{ marginTop: '16px', marginX: '32px' }}
				error={!!errors.firstName}
				helperText={errors.firstName?.message}
				{...register('firstName')}
			/>
			<TextField
				id='lastName'
				label='Sobrenome'
				variant='standard'
				sx={{ marginTop: '16px', marginX: '32px' }}
				error={!!errors.lastName}
				helperText={errors.lastName?.message}
				{...register('lastName')}
			/>
			<Button
				variant='contained'
				sx={{ backgroundColor: '#9C27B0', marginTop: '20px', marginX: '32px' }}
				onClick={() => setIsDialogOpen(true)}
			>
				Editar perfil
			</Button>
			{isDialogOpen && (
				<Parcel
					config={() => System.import('@home-hub/react-parcel') as any}
					isOpen={isDialogOpen}
					title='Home Hub'
					description='Deseja salvar as alterações?'
					leftBtnText='Cancelar'
					rightBtnText='Salvar'
					leftBtnFn={() => setIsDialogOpen(false)}
					rightBtnFn={() => {
						setIsDialogOpen(false);
						handleSubmit((data) => onSubmit(data))();
						setTimeout(() => setIsSnackbarOpen(true), 500);
					}}
				/>
			)}
			{isSnackbarOpen && (
				<Snackbar
					open={isSnackbarOpen}
					autoHideDuration={5000}
					onClose={handleClose}
					message='Perfil editado com sucesso!'
				/>
			)}
		</Box>
	);
};

export default EditProfile;
