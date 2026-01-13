# Architecture

## Overview

Gallery-ACM is a SvelteKit application that displays photo galleries for various ACM CSUF teams. The application fetches images from Google Drive and presents them in a team-organized gallery interface.

## Tech Stack

- **Framework**: SvelteKit (TypeScript)
- **Deployment**: Cloudflare Workers
- **APIs**: Google Drive API (googleapis)
- **Build Tool**: Vite
- **Package Manager**: Bun

## Core Components

### Routes
- `/` - Home page
- `/[team]` - Dynamic team gallery pages
- `/api/files` - API endpoint for file operations
- `/api/getGallery` - Gallery data fetching
- `/api/getDrive` - Google Drive integration

### Key Modules
- `src/lib/teams.ts` - Team configuration (AI, Algo, Design, Dev, Game Dev, ICPC, Node Buds, OSS)
- `src/util/routeData.ts` - Route data management
- `src/lib/public/gallery.ts` - Public gallery utilities

## Data Flow

1. User navigates to a team page
2. Application fetches images from Google Drive via API routes
3. Gallery displays images organized by team configuration
4. Team-specific styling applied based on team config (colors, logos)

## Deployment

The application is deployed to Cloudflare Workers using the SvelteKit Cloudflare adapter. Build and deployment are handled through Wrangler CLI and
Cloudflare Workers GitHub integration.
