// navigationStore.js
import create from 'zustand';

const useNavigationStore = create((set) => ({
  location: '/',
  navigate: (to) => set({ location: to }),
}));

export default useNavigationStore;
