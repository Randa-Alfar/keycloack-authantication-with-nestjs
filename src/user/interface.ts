export interface IUser {
  name: string;
  password: number;
}
export interface IAttributes {
  dob: Date;
  phone: number;
}
export interface ICredential {
  type: string;
  value: string;
  temporary: boolean;
}
export interface KIUser {
  enabled: boolean;
  attributes: IAttributes;
  group: [];
  email: string;
  emailvarified: string;
  firstName: string;
  lastName: string;
  username: string;
  credentials: ICredential;
}
