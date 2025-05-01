/* 
A utility file to store route data 
Right now is only used to dynamically change the color of the navbar based on the route
May be useful for anything that dynamically changes depending on the current route
*/


export type Route =
	| '/'
	| '/algo'
	| '/ai'
	| '/design'
	| '/dev'
	| '/game-dev'
	| '/oss'
	| '/general'
	| '/icpc'

type RouteMeta = {
	name: string;
	primaryColor: string;
	secondaryColor: string;
};

const routeInfo: Record<Route, RouteMeta> = {
	'/': {
		name: 'Home',
		primaryColor: '#1E6CFF',
		secondaryColor: '#082863'
	},
	'/algo': {
		name: 'Algo',
		primaryColor: '#AF3FFF',
		secondaryColor: '#AF3FE0'
	},
	'/ai': {
		name: 'AI',
		primaryColor: '#21d19f',
		secondaryColor: '#22e3ac'
	},
	'/design': {
		name: 'Design',
		primaryColor: '#fc3263',
		secondaryColor: '#75172f'
	},
	'/dev': {
		name: 'Dev',
		primaryColor: '#2341a1',
		secondaryColor: '#335ee8'
	},
	'/game-dev': {
		name: 'Game Dev',
		primaryColor: '#d41153',
		secondaryColor: '#f71461'
	},
	'/oss': {
		name: 'OSS',
		primaryColor: '#0EAC90',
		secondaryColor: '#11D4B1'
	},
	'/general': {
		name: 'General',
		primaryColor: '#1E6CFF',
		secondaryColor: '#082863'
	},
	'/icpc': {
		name: 'ICPC',
		primaryColor: '#c2590c',
		secondaryColor: '#c76116'
	}
};

// Reusable accessors
export const getColorsByRoute = (route: Route) => {
	const { primaryColor, secondaryColor } = routeInfo[route] ?? routeInfo['/'];
	return { primaryColor, secondaryColor };
};

export const getTeamnameByRoute = (route: Route) => {
	return routeInfo[route]?.name ?? 'Home';
};