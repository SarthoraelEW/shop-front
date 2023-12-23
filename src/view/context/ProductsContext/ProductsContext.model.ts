import { Collection } from '../../../model/Collection';
import { Offer } from '../../../model/Offer';
import { Product } from '../../../model/Product';

export type ProductsContextType = {
  offers: Offer[];
  collections: Collection[];
  products: Product[];
};
