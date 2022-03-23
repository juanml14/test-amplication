export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastLogin: Date | null;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
