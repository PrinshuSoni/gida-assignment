import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        actionDialog: false,
        graphDialog: false
    },
    mutations: {
        toggleActionDialog (state) {
            state.actionDialog = !state.actionDialog;
        },
        toggleGraphDialog (state) {
            state.graphDialog = !state.graphDialog;
        }
    }
})

export default store;