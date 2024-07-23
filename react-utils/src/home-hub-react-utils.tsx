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
	const authObj: AuthInfo = JSON.parse(auth);
	if (!location.pathname.includes(authObj.authId.toString())) {
		return { authInfo: undefined, isAuthenticated: false };
	}
	return { authInfo: authObj, isAuthenticated: true };
}
