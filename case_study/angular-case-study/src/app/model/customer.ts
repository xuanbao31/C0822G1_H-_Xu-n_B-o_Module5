import {CustomerType} from "./customer-type";

export interface Customer {
  id?: number;
  name?: string;
  date?: string;
  gender?: string;
  idCard?: number;
  phoneNumber?: number;
  email?: string;
  address?: string;
  customerType?: CustomerType;
}
