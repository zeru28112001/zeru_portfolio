# Data Folder

This folder contains all static data and constants used throughout the portfolio application.

## Files

### `portfolio.ts`

Contains all portfolio-related data constants:

- **`NAV_LINKS`**: Array of navigation menu items
- **`PROJECTS`**: Array of project objects with title, description, tech stack, etc.
- **`SKILLS`**: Array of skill objects with name and proficiency level
- **`TOOLS`**: Array of tool names used
- **`STATS`**: Array of statistics for the hero section (years exp, projects, satisfaction)
- **`SOCIAL_LINKS`**: Array of social media links

## Usage

```typescript
import { PROJECTS, SKILLS, NAV_LINKS } from '../data/portfolio';

// Use in components
{NAV_LINKS.map(link => <NavItem key={link} label={link} />)}
{PROJECTS.map(project => <ProjectCard key={project.title} {...project} />)}
```

## Benefits

- **Centralized Data**: All static content in one place
- **Easy Maintenance**: Update content without touching component logic
- **Type Safety**: TypeScript interfaces ensure data consistency
- **Reusability**: Data can be imported and used across multiple components
