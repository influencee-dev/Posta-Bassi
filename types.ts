
export interface MenuItem {
  id: string;
  name: string;
  ingredients: string;
  price: number;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface BookingData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
}

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}
