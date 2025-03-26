/* 
A utility file to store route data 
Right now is only used to dynamically change the color of the navbar based on the route
May be useful for anything that dynamically changes depending on the current route
*/


export type route =
	| '/'
	| '/algo'
	| '/ai'
	| '/design'
	| '/dev'
	| '/game-dev'
	| '/oss'
	| '/general'
	| '/icpc'
	| '/nodebuds';

type RouteColorPalette = {
	primaryColor: string;
	secondaryColor: string;
}


// TODO: Add color pallete for the rest of the routes
export const getColorsByRoute = (route: route): RouteColorPalette => {
	switch (route) {
		case '/':
			return { primaryColor: '#1E6CFF', secondaryColor: '#082863' };
		case '/algo':
			return { primaryColor: '#AF3FFF', secondaryColor: '#AF3FE0' };
		case '/oss':
			return { primaryColor: '#0EAC90', secondaryColor: '#11D4B1' };
		default:
			return { primaryColor: '#1E6CFF', secondaryColor: '#082863' };
	}
};

export const getTeamnameByRoute = (route: route): string => {
	switch (route) {
		case '/':
			return 'Home';
		case '/algo':
			return 'Algo';
		case '/ai':
			return 'AI';
		case '/design':
			return 'Design';
		case '/dev':
			return 'Dev';
		case '/game-dev':
			return 'Game Dev';
		case '/oss':
			return 'OSS';
		case '/general':
			return 'General';
		case '/icpc':
			return 'ICPC';
		case '/nodebuds':
			return 'Node Buds';
		default:
			return 'Home';
	}
};
