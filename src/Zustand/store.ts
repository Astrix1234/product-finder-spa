import { create } from 'zustand';

interface Product {
  id: number;
  name: string;
  pantone_value: string;
  year: number;
}

interface StoreState {
  firstPageProducts: Product[];
  lastProductOnFirstPage: Product | null;
  secondPageProducts: Product[];
  lastTwoProductsOnSecondPage: Product[];
  productById: Product | null;
  perPage: number;
  id: number | null;
  loading: boolean;
}

interface StoreActions {
  setFirstPageProducts: (products: Product[]) => void;
  setLastProductOnFirstPage: (lastProduct: Product | null) => void;
  setSecondPageProducts: (products: Product[]) => void;
  setLastTwoProductsOnSecondPage: (lastTwoProducts: Product[]) => void;
  setProductById: (product: Product | null) => void;
  setPerPage: (perPage: number) => void;
  setId: (id: number) => void;
  setLoading: (loading: boolean) => void;
}

const store = create<StoreState & StoreActions>(set => ({
  firstPageProducts: [],
  lastProductOnFirstPage: null,
  secondPageProducts: [],
  lastTwoProductsOnSecondPage: [],
  productById: null,
  perPage: 5,
  id: null,
  loading: false,
  setFirstPageProducts: products => set({ firstPageProducts: products }),
  setLastProductOnFirstPage: lastProduct =>
    set({ lastProductOnFirstPage: lastProduct }),
  setSecondPageProducts: products => set({ secondPageProducts: products }),
  setLastTwoProductsOnSecondPage: lastTwoProducts =>
    set({ lastTwoProductsOnSecondPage: lastTwoProducts }),
  setProductById: product => set({ productById: product }),
  setPerPage: perPage => set({ perPage: perPage }),
  setId: id => set({ id: id }),
  setLoading: loading => set({ loading: loading }),
}));

export default store;
