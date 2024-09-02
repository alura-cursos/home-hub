import Cookies from 'universal-cookie';

export type AuthInfo = {
	email: string;
	authId: number;
	firstName?: string;
	lastName?: string;
};

export function loginFunction(email: AuthInfo['email']) {
	const authId = email.replace('@', '').replace('.', '').codePointAt(0);
	const cookies = new Cookies(null, { path: '/' });
	cookies.set('auth', { email: email, authId: authId });
	location.replace(`/dashboard/${authId}/`);
}

export function logoutFunction() {
	const cookies = new Cookies(null, { path: '/' });
	cookies.remove('auth');
	return location.replace('/');
}

export function checkIsAuthenticated() {
	const cookies = new Cookies(null, { path: '/' });
	const auth = cookies.get('auth');
	if (!auth) {
		return { authInfo: undefined, isAuthenticated: false };
	}
	if (!location.pathname.includes(auth.authId.toString())) {
		return { authInfo: undefined, isAuthenticated: false };
	}
	return { authInfo: auth, isAuthenticated: true };
}

export function editAuthInfo(data: AuthInfo) {
	const cookies = new Cookies(null, { path: '/' });
	const auth = cookies.get('auth');
	if (!location.pathname.includes(auth.authId.toString())) {
		return logoutFunction();
	}
	cookies.set('auth', data);
	return;
}
