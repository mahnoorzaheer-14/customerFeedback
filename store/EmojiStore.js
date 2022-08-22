import axios from "axios";

const state = () => ({
    counter: 500,
    id: 0,
    itemState: {},
    checkOptions: [],
    jsonObject: {},
    keywordItemID: {},
    anotherDict: {},
    url_hash: '',
    order_count: {}
})

const mutations = {
    increment(state, value) {
        state.id++
        state.itemState[value[1]] = value[0]
    },
    setOrderCount(state, value) {
        state.order_count = value
    },

    setHash(state, value) {
        state.url_hash = value
    },

    setExisitingData(state, value) {

        if (value == null) {
            state.jsonObject = {}
        }
        else {
            state.jsonObject = value
        }
    },

    setExperience(state, value) {

        state.jsonObject[value[0]] = value[1]
        this.commit("EmojiStore/postData", state.jsonObject)
    },

    setRating(state, value) {

        state.jsonObject[value[0]] = value[1]
        this.commit("EmojiStore/postData", state.jsonObject)
    },

    setExperienceIssues(state, value) {

        state.jsonObject[value[0]] = value[1]
        this.commit("EmojiStore/postData", state.jsonObject)

    },

    setVendorMatch(state, value) {
        state.jsonObject["itemID"] = value["itemID"]
        this.commit("EmojiStore/postData", state.jsonObject)

    },

    setVendorSatisfaction(state, value) {

        state.jsonObject["itemID"] = value["itemID"]
        this.commit("EmojiStore/postData", state.jsonObject)

    },

    setVendorIssues(state, value) {

        state.jsonObject["itemID"] = value["itemID"]
        this.commit("EmojiStore/postData", state.jsonObject)

    },

    setInput(state, value) {

        state.jsonObject[value[0]] = value[1]
        this.commit("EmojiStore/postData", state.jsonObject)
    },

    async postData(state, value) {
        try {
            axios.post(`${process.env.baseUrl}/feedback/${state.url_hash}/`, value)
        } catch (error) {
            console.log("Error encountered", error);
        }
    },

    addArrays(state, value) {
        state.checkOptions.push(value)
    },
}

const getters = {
    getCount: (state) => { return state.counter },
    getDictionary: (state) => { return state.itemState },
    getJsonData: (state) => { return state.jsonObject }
}
const actions = {
    increment({ commit }, value) {
        commit('increment', value)
    }
}

export default {
    state, getters, actions, mutations
}
