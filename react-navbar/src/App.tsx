import {
	AppBar,
	Box,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	Toolbar,
} from '@mui/material';
import { AuthInfo, checkIsAuthenticated, logoutFunction } from '@home-hub/react-utils';
import { useEffect, useState } from 'react';

import { AccountCircle } from '@mui/icons-material';
import HomeHubLogo from './assets/home-hub.png';
import LogoutIcon from '@mui/icons-material/Logout';
import Parcel from 'single-spa-react/parcel';
import PersonIcon from '@mui/icons-material/Person';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import WifiIcon from '@mui/icons-material/Wifi';

export default function App() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [authInfo, setAuthInfo] = useState<typeof AuthInfo | undefined>();

	useEffect(() => {
		const { isAuthenticated, authInfo: authObj } = checkIsAuthenticated();
		if (!isAuthenticated) {
			return location.replace('/');
		}
		setAuthInfo(authObj);
	}, []);

	const isMenuOpen = Boolean(anchorEl);

	const [open, setOpen] = useState(false);
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	console.log(isDialogOpen);

	const DrawerList = (
		<Box sx={{ width: 250 }} role='presentation' onClick={toggleDrawer(false)}>
			<List>
				<ListItem disablePadding onClick={() => location.replace(`/dashboard/${authInfo.authId}/`)}>
					<ListItemButton>
						<ListItemIcon>
							<SpaceDashboardIcon />
						</ListItemIcon>
						<ListItemText primary={'Visão geral'} />
					</ListItemButton>
				</ListItem>
				<ListItem
					disablePadding
					onClick={() => location.replace(`/dashboard/${authInfo.authId}/devices`)}
				>
					<ListItemButton>
						<ListItemIcon>
							<WifiIcon />
						</ListItemIcon>
						<ListItemText primary={'Dispositivos'} />
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
	);

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const renderMenu = (
		<Menu
			anchorEl={anchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			open={isMenuOpen}
			onClose={handleMenuClose}
		>
			<MenuItem onClick={handleMenuClose}>
				{!!authInfo?.firstName ? `${authInfo?.firstName} ${authInfo?.lastName}` : authInfo?.email}
			</MenuItem>
			<Divider />
			<ListItem
				disablePadding
				onClick={() => location.replace(`/dashboard/${authInfo.authId}/edit-profile`)}
			>
				<ListItemButton>
					<ListItemIcon>
						<PersonIcon />
					</ListItemIcon>
					<ListItemText primary={'Perfil'} />
				</ListItemButton>
			</ListItem>
			<Divider />
			<ListItem disablePadding onClick={() => setIsDialogOpen(true)}>
				<ListItemButton>
					<ListItemIcon>
						<LogoutIcon />
					</ListItemIcon>
					<ListItemText primary={'Sair'} />
				</ListItemButton>
			</ListItem>
		</Menu>
	);

	return (
		<div id='single-spa-application:react-navbar'>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='static' sx={{ backgroundColor: '#9C27B0' }}>
					<Toolbar>
						<MenuItem onClick={toggleDrawer(true)}>
							<img src={HomeHubLogo} style={{ width: '176px' }} />
						</MenuItem>
						<Box sx={{ flexGrow: 1 }} />
						<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
							<MenuItem onClick={handleProfileMenuOpen}>
								<IconButton
									size='large'
									edge='end'
									aria-label='account of current user'
									aria-haspopup='true'
									onClick={() => {}}
									color='inherit'
								>
									<AccountCircle />
								</IconButton>
							</MenuItem>
						</Box>
					</Toolbar>
				</AppBar>
				<Drawer open={open} onClose={toggleDrawer(false)}>
					{DrawerList}
				</Drawer>
				{renderMenu}
			</Box>
			{isDialogOpen && (
				<Parcel
					config={() => System.import('@home-hub/react-parcel') as any}
					isOpen={isDialogOpen}
					title='Home Hub'
					description='Deseja efetuar logout?'
					leftBtnText='Cancelar'
					rightBtnText='Sair'
					leftBtnFn={() => setIsDialogOpen(false)}
					rightBtnFn={() => {
						setIsDialogOpen(false);
						logoutFunction();
					}}
				/>
			)}
		</div>
	);
}
