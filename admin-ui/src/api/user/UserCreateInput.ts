export type UserCreateInput = {
  firstName?: string | null;
  lastLogin?: Date | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
};
