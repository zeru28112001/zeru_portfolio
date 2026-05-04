export interface NavbarProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  active: string;
  scrollTo: (id: string) => void;
}