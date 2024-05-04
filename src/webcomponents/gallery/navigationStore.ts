import create from 'zustand';

interface NavigationStoreState {
  location: string;
  navigate: (to: string) => void;
}

const useNavigationStore = create<NavigationStoreState>((set) => ({
  location: '/',
  navigate: (to) => set({ location: to }),
}));

export default useNavigationStore;
