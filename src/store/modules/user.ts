import { defineStore } from 'pinia';
import { store } from '@/store';

export const useUserStore = defineStore({
  id: 'app-user',
  state: () => {
    return {
      // 所有这些属性都将自动推断出它们的类型
    };
  },
  // persist: {
  //     enabled: true,
  //     strategies: [
  //         { storage: localStorage, paths: ['count'] }
  //     ],
  // },

  actions: {},
});

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
