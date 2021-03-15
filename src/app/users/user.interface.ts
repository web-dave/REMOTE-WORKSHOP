export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  account: string;
  password: string;
  enabled: boolean;
  rights: IRight[];
}
export interface IRight {
  id: number;
  userRight: string;
  description: string;
}
