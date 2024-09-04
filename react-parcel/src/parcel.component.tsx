import * as React from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>;
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction='up' ref={ref} {...props} />;
});

interface ParcelProps {
	title: string;
	description: string;
	leftBtnText: string;
	rightBtnText: string;
	leftBtnFn: () => void;
	rightBtnFn: () => void;
	isVisible: boolean;
}

export default function Parcel({
	description,
	isVisible,
	leftBtnFn,
	leftBtnText,
	rightBtnFn,
	rightBtnText,
	title,
}: ParcelProps) {
	const [open, setOpen] = React.useState(isVisible);

	const _rightBtnFn = () => {
		rightBtnFn();
		setOpen(false);
	};

	const _leftBtnFn = () => {
		leftBtnFn();
		setOpen(false);
	};

	return (
		<React.Fragment>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				onClose={() => setOpen(false)}
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
		</React.Fragment>
	);
}
