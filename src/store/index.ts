import { createStore } from 'vuex'

export interface State {
    id: string
}

export const store = createStore<State>({
    state: {
        id: ""
    },
    getters: {
    },
    mutations: {
        set(state, id) {
            state.id = id
        },
        unset(state) {
            state.id = ""
        },
    },
    actions: {

    }
});


