import Cookies from 'universal-cookie';

export type AuthInfo = {
	email: string;
	authId: number;
	firstName?: string;
	lastName?: string;
};

export const loginFunction = (email: AuthInfo['email']) => {
	const authId = email.replace('@', '').replace('.', '').codePointAt(0);
	const cookies = new Cookies(null, { path: '/' });
	cookies.set('myCat', { email: email, authId: authId });
	location.replace(`/dashboard/${authId}/`);
};
