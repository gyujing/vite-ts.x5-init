import { defineStore } from 'pinia'
import { store } from '@/store';


export const useUserStore = defineStore({
    id: 'app-user',
    state: () => {
        return {
            // 所有这些属性都将自动推断出它们的类型
            count: 0,
            name: 'Eduardo',
            isAdmin: true,
            items: [],
            hasChanged: true,
        }
    },
    persist: {
        enabled: true,
        strategies: [
            { storage: localStorage, paths: ['count'] }
        ],
    },
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
        randomizeCounter() {
            this.count = Math.round(100 * Math.random())
        },
    },
})

// Need to be used outside the setup
export function useUserStoreWithOut() {
    return useUserStore(store);
}
