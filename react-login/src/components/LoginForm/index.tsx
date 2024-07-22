import { Box, Button, TextField } from '@mui/material';

import { loginFunction } from '@home-hub/react-utils';
import { useForm } from 'react-hook-form';

type FormValues = {
	email: string;
	password: string;
};

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>();

	const onSubmit = (data: FormValues) => loginFunction(data.email);

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
				id='password'
				label='Password'
				variant='standard'
				type='password'
				sx={{ marginTop: '16px', marginX: '32px' }}
				error={!!errors.password}
				helperText={errors.password?.message}
				{...register('password', { required: 'Senha obrigatória.' })}
			/>
			<Button
				variant='contained'
				sx={{ backgroundColor: '#9C27B0', marginTop: '20px', marginX: '32px' }}
				onClick={handleSubmit(onSubmit)}
			>
				Login
			</Button>
		</Box>
	);
};

export default LoginForm;
