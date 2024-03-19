import { create } from 'zustand';

export interface Product {
  id: number;
  name: string;
  pantone_value: string;
  year: number;
  color: string;
}

interface StoreState {
  pageProducts: Product[];
  lastProductOnFirstPage: Product | null;
  lastTwoProductsOnLastPage: Product[];
  productById: Product[];
  id: number | null;
  loading: boolean;
  prevPath: string;
}

interface StoreActions {
  setPageProducts: (products: Product[]) => void;
  setLastProductOnFirstPage: (lastProduct: Product | null) => void;
  setLastTwoProductsOnLastPage: (lastTwoProducts: Product[]) => void;
  setProductById: (product: Product[]) => void;
  setId: (id: number) => void;
  setLoading: (loading: boolean) => void;
  setPrevPath: (path: string) => void;
}

const store = create<StoreState & StoreActions>(set => ({
  pageProducts: [],
  lastProductOnFirstPage: null,
  lastTwoProductsOnLastPage: [],
  productById: [],
  id: null,
  loading: false,
  prevPath: '/',
  setPageProducts: products => set({ pageProducts: products }),
  setLastProductOnFirstPage: lastProduct =>
    set({ lastProductOnFirstPage: lastProduct }),
  setLastTwoProductsOnLastPage: lastTwoProducts =>
    set({ lastTwoProductsOnLastPage: lastTwoProducts }),
  setProductById: product => set({ productById: product }),
  setId: id => set({ id: id }),
  setLoading: loading => set({ loading: loading }),
  setPrevPath: path => set(() => ({ prevPath: path })),
}));

export default store;
