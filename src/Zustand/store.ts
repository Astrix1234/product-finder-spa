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
  productById: Product[];
  id: number | null;
  loading: boolean;
}

interface StoreActions {
  setPageProducts: (products: Product[]) => void;
  setProductById: (product: Product[]) => void;
  setId: (id: number) => void;
  setLoading: (loading: boolean) => void;
}

const store = create<StoreState & StoreActions>(set => ({
  pageProducts: [],
  productById: [],
  id: null,
  loading: false,
  setPageProducts: products => set({ pageProducts: products }),
  setProductById: product => set({ productById: product }),
  setId: id => set({ id: id }),
  setLoading: loading => set({ loading: loading }),
}));

export default store;
