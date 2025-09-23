import type { PageLoadEvent } from './$types';
import type { Gallery } from '$lib/public/gallery';
import { getTeamBySlug, isValidTeamSlug } from '$lib/teams';
import { error } from '@sveltejs/kit';

export async function load({ params, fetch, url }: PageLoadEvent) {
  const teamSlug = params.team;
  
  // Validate team slug and throw 404 if invalid
  if (!isValidTeamSlug(teamSlug)) {
    throw error(404, `Team "${teamSlug}" not found`);
  }
  
  const teamConfig = getTeamBySlug(teamSlug)!; // We know it exists after validation
  
  try {
    const response = await fetch(`/api/files?type=${encodeURIComponent(teamSlug)}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch gallery data');
    }
    
    const gallery = (await response.json()) as Gallery;
    console.log(`Loaded gallery for ${teamSlug}:`, gallery);
    
    return {
      team: teamConfig,
      gallery
    };
  } catch (err) {
    console.error(`Error loading gallery for ${teamSlug}:`, err);
    // Return empty gallery instead of failing completely
    return {
      team: teamConfig,
      gallery: []
    };
  }
}