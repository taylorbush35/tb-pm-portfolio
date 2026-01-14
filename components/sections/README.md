# Section Components

## Canonical Routes & Anchor IDs

This file documents the canonical placement of each section component:

- **ProductWork** (`/about#other-cool-stuff`)
  - Component: `components/sections/ProductWork.tsx`
  - Anchor ID: `other-cool-stuff`
  - Canonical page: `/about`

- **PassionProjects** (`/about#passion-projects`)
  - Component: `components/sections/PassionProjects.tsx`
  - Anchor ID: `passion-projects`
  - Canonical page: `/about`

- **ToolsILove** (`/work#tools`)
  - Component: `components/sections/ToolsILove.tsx`
  - Anchor ID: `tools`
  - Canonical page: `/work`

- **OutsideTheRoadmap** (`/work#outside-the-roadmap`)
  - Component: `components/sections/OutsideTheRoadmap.tsx`
  - Anchor ID: `outside-the-roadmap`
  - Canonical page: `/work`

## Usage

Each section component is a single source of truth. Pages should import and render these components rather than duplicating their JSX.
