import {ProductType} from "./product-type";

export interface Product {
 id ?: number;
 name?: string;
 price?: string;
 amount?: string;
 color?: string;
 productType?:ProductType;
}
