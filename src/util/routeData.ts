import { teams } from '$lib/teams';

export type Route = '/' | string;

type RouteMeta = {
	name: string;
	primaryColor: string;
	secondaryColor: string;
};

const staticRoutes: Record<string, RouteMeta> = {
	'/': {
		name: 'Home',
		primaryColor: '#1E6CFF',
		secondaryColor: '#082863'
	}
};

const getTeamSlugFromRoute = (route: string): string | null => {
	const match = route.match(/^\/([^\/]+)$/);
	if (match && match[1] in teams) {
		return match[1];
	}
	return null;
};

export const getColorsByRoute = (
	route: Route
): { primaryColor: string; secondaryColor: string } => {
	if (typeof route === 'string' && route in staticRoutes) {
		return staticRoutes[route];
	}

	const teamSlug = getTeamSlugFromRoute(route as string);
	if (teamSlug && teamSlug in teams) {
		const team = teams[teamSlug];
		return {
			primaryColor: team.primaryColor,
			secondaryColor: team.secondaryColor
		};
	}

	return staticRoutes['/'];
};

export const getTeamnameByRoute = (route: Route): string => {
	if (typeof route === 'string' && route in staticRoutes) {
		return staticRoutes[route].name;
	}

	const teamSlug = getTeamSlugFromRoute(route as string);
	if (teamSlug && teamSlug in teams) {
		return teams[teamSlug].name;
	}

	return 'Home';
};
