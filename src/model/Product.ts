export type ProductVariant = {
  id: string;
  style: string;
  size: string;
  color: string;
  price: number;
};

export type Product = {
  id: string;
  name: string;
  label: string;
  description: string;
  images: string[];
  sale: number | null;
  variants: ProductVariant[];
};
