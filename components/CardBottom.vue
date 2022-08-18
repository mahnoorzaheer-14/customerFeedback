<template>
    <div id="card-bottom">
        <div class="card bg-white rounded-none md:rounded-2xl lg:rounded-2xl">
            <div class="card-body">
                <p class="mb-2 text-lg">{{ question }}</p>
                <textarea maxlength="1000" @input="updateMyValue"
                    class="border border-gray-300 focus:border-gray-300 focus:ring-0 h-32 placeholder:text-[0.9rem] placeholder:text-[#888888] text-base px-3 py-2 rounded"
                    v-model="message" placeholder="Tell us what your think"></textarea>
                <div v-if="message.length <= 900" class="text-sm font-inter text-[#888888] italic text-right -mb-2">Max
                    1000 characters
                    allowed. {{ mobile_msg.length }} characters written.</div>
                <div v-if="message.length > 900" class="text-sm font-inter text-red-700 italic text-right -mb-2">Max
                    1000 characters
                    allowed. {{ mobile_msg.length }} characters written.</div>
            </div>
        </div>

    </div>
</template>

<script >
import Vue from 'vue'
import _ from 'lodash';


export default Vue.extend({
    name: "CardBottom",
    data() {

        return {
            message: '',
            mobile_msg: ''
        }
    },
    props: {
        question: String
    },
    mounted: function () {
        console.log("In card bottom, json data" in (this.$store.getters['EmojiStore/getJsonData']))
        if ("improve_experience" in (this.$store.getters['EmojiStore/getJsonData'])) {
            this.message = (this.$store.getters['EmojiStore/getJsonData'])["improve_experience"]
        }
    },
    methods: {
        updateMyValue(event) {
            console.log("in card bottom change", event.target.value) // Formatting example   
            this.mobile_msg = event.target.value
            this.autoSave()
            // setTimeout(function () { console.log("After 5 s, this is user input:", event.target.value) }, 8000)
            // setTimeout(function (event) { this.$store.dispatch('EmojiStore/setInput', event.target.value) }, 10000);

        },

        autoSave: _.debounce(function () {
            console.log("this is autosave", this.message)
            // alert('THIS IS AUTO SAVE ALERT')
            this.$store.commit('EmojiStore/setInput', ["improve_experience", this.message])

        }, 1000)
    }

})

</script>