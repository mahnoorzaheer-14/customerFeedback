// import { defineStore } from "pinia";
// // import $axios
// import axios from "axios";

// export const useEmojiStore = defineStore("EmojiStore", {

const state = () => ({
    counter: 500,
    flag: false,
    id: 0,
    fruit: [],
    itemState: {}
})

const mutations = {
    increment(state, value) {
        state.counter++
        console.log("Val recvd from child component to store nuxt", value)
        console.log(value[0])
        console.log(typeof (value[1]))
        state.itemState[value[1]] = value[0]
        // console.log("Im getting updated man", state.itemState)
    },
}

const getters = {
    getCount: (state) => { return state.counter },
    getDictionary: (state) => { return state.itemState }
}
const actions = {
    increment({ commit, state }, value) {
        commit('increment', value)
    },
}


export default {
    state, getters, actions, mutations
}
