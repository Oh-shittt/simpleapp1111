interface IAddress {
  street: string;
  city: string;
}

export interface IUser {
  name: string;
  address: IAddress;
}