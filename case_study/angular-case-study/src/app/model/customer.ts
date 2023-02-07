import {CustomerType} from "./customer-type";

export interface Customer {
  id?: number;
  name?: string;
  date?: string;
  gender?: number;
  idCard?: string;
  phoneNumber?: string;
  address?: string;
customerType?: CustomerType;
}
