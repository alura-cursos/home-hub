import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Dashboard from '../screens/Dashboard';
import EditProfileScreen from '../screens/EditProfile';

const router = createBrowserRouter([
	{
		path: '/dashboard/:authId',
		element: <Dashboard />,
	},
	{
		path: '/dashboard/:authId/edit-profile',
		element: <EditProfileScreen />,
	},
]);
