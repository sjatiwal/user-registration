export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  phone: number;
  email: string;
  [key: string]: any; // allows new fields dynamically ⭐
}