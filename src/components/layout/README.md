# Layout Components

This folder contains reusable layout components for the portfolio website.

## Components

### Navbar

- **File**: `navbar.tsx`
- **Description**: Responsive navigation bar with desktop and mobile menus
- **Props**:
  - `scrolled`: boolean - Whether the page has been scrolled
  - `menuOpen`: boolean - Mobile menu state
  - `setMenuOpen`: function - Function to toggle mobile menu
  - `active`: string - Currently active section
  - `scrollTo`: function - Function to scroll to a section

### Footer

- **File**: `footer.tsx`
- **Description**: Simple footer with copyright information
- **Props**: None

## Usage

```tsx
import { Navbar, Footer } from '../components/layout';

// In your component
<Navbar
  scrolled={scrolled}
  menuOpen={menuOpen}
  setMenuOpen={setMenuOpen}
  active={active}
  scrollTo={scrollTo}
/>

// Later in the component
<Footer />
```
