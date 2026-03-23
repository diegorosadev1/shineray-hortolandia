import { create } from 'zustand';

interface Filters {
  category: string;
  yearMin: number;
  yearMax: number;
  priceMax: number;
}

interface BikesState {
  searchTerm: string;
  filters: Filters;
  setSearchTerm: (term: string) => void;
  setFilters: (filters: Partial<Filters>) => void;
  applyFilters: () => void;
}

export const useBikesStore = create<BikesState>((set) => ({
  searchTerm: '',
  filters: {
    category: '',
    yearMin: 0,
    yearMax: 0,
    priceMax: 100000,
  },
  setSearchTerm: (term) => set({ searchTerm: term }),
  setFilters: (newFilters) => set((state) => ({ 
    filters: { ...state.filters, ...newFilters } 
  })),
  applyFilters: () => {
    // Logic to filter bikes would go here
    console.log('Filters applied');
  },
}));
