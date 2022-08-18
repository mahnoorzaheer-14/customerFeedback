import axios from "axios";

const state = () => ({
    storeRating: 0,
    counter: 500,
    id: 0,
    itemState: {},
    checkOptions: [],
    jsonObject: {},
    keywordItemID: {},
    anotherDict: {},
    modalShow: false,
    url_hash: '',
    order_count: {}
})

const mutations = {
    increment(state, value) {
        // state.counter++
        state.id++
        console.log("Val recvd from child component to store nuxt", value)
        console.log(value[0])
        console.log(typeof (value[1]))
        state.itemState[value[1]] = value[0]
        console.log("Im getting updated man", state.itemState)
    },
    setOrderCount(state, value) {
        state.order_count = value
    },

    setHash(state, value) {
        state.url_hash = value
    },

    setModal(state, value) {
        console.log("value in set modal", value)
        state.modalShow = value
    },

    setExisitingData(state, value) {

        console.log("exisiting value coming from backend", value)
        if (value == null) {
            state.jsonObject = {}
            console.log("coming here or")
        }
        else {
            state.jsonObject = value
            console.log(" here !!!")

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
        console.log("getting triggered")
        console.log("JSON in match", value)
        console.log(value["itemID"])
        state.jsonObject["itemID"] = value["itemID"]
        this.commit("EmojiStore/postData", state.jsonObject)

    },

    setVendorSatisfaction(state, value) {

        console.log("JSON in satisfaction", value)
        state.jsonObject["itemID"] = value["itemID"]
        this.commit("EmojiStore/postData", state.jsonObject)

    },

    setVendorIssues(state, value) {

        console.log("JSON in issues", value)
        // let data = value.value
        // let keyword = "P" + value.key + "_issues"
        state.jsonObject["itemID"] = value["itemID"]
        this.commit("EmojiStore/postData", state.jsonObject)

    },

    setInput(state, value) {

        state.jsonObject[value[0]] = value[1]
        this.commit("EmojiStore/postData", state.jsonObject)
    },

    async postData(state, value) {
        try {
            axios.post(`https://staging-feedback-form-7j5z7gqdsa-uc.a.run.app/feedbacks/${state.url_hash}/`, value)
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
    increment({ commit, state }, value) {
        commit('increment', value)
    }
}


export default {
    state, getters, actions, mutations
}
