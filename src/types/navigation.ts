export interface MenuItem {
  label: string;
  path?: string;
  items?: (string | SubMenuItem)[];
}

export interface SubMenuItem {
  label: string;
  subitems: string[];
}

export interface SubMenuProps {
  label: string;
  items?: (string | SubMenuItem)[];
  isOpen: boolean;
  onToggle: () => void;
}