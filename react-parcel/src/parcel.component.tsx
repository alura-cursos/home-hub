import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

interface ParcelProps {
	title: string;
	description: string;
	leftBtnFn: () => void;
	rightBtnFn: () => void;
	leftBtnText: string;
	rightBtnText: string;
	isOpen: boolean;
}

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction='up' ref={ref} {...props} />;
});

export default function Parcel({
	description,
	isOpen,
	leftBtnFn,
	leftBtnText,
	rightBtnFn,
	rightBtnText,
	title,
}: ParcelProps) {
	const [open, setOpen] = React.useState(isOpen);

	const _leftBtnFn = () => {
		leftBtnFn();
		setOpen(false);
	};

	const _rightBtnFn = () => {
		rightBtnFn();
		setOpen(false);
	};

	return (
		<Dialog
			open={open}
			TransitionComponent={Transition}
			keepMounted
			onClose={_leftBtnFn}
			aria-describedby='alert-dialog-slide-description'
		>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>
				<DialogContentText id='alert-dialog-slide-description'>{description}</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={_leftBtnFn}>{leftBtnText}</Button>
				<Button onClick={_rightBtnFn}>{rightBtnText}</Button>
			</DialogActions>
		</Dialog>
	);
}
