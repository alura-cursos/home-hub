import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Dashboard from '../screens/Dashboard';
import Devices from '../screens/Devices';
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
	{
		path: '/dashboard/:authId/devices',
		element: <Devices />,
	},
]);

export const DashboardRoutes = () => <RouterProvider router={router} />;
