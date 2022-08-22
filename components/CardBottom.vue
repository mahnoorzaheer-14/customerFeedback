<template>
    <div id="card-bottom">
        <div class="card bg-white rounded-none md:rounded-2xl lg:rounded-2xl">
            <div class="card-body">
                <p class="mb-2 text-lg">{{ question }}</p>
                <textarea maxlength="1000" @input="updateMyValue"
                    class="border focus:ring-0 h-32 placeholder:text-[0.9rem] placeholder:text-[#888888] text-base px-3 py-2 rounded"
                    :class="{
                    
                        'border-[#c4c4c4] focus:border-[#c4c4c4]': message.length < 151,
                        'border-[#A28888] focus:border-[#A28888]': (message.length >= 151 && message.length < 251),
                        'border-[#A67171] focus:border-[#A67171]': (message.length >= 251 && message.length < 351),
                        'border-[#A98888] focus:border-[#A98888]': (message.length >= 351 && message.length < 451),
                        'border-[#AC8888] focus:border-[#AC8888]': (message.length >= 451 && message.length < 551),
                        'border-[#A97B7B] focus:border-[#A97B7B]': (message.length >= 551 && message.length < 651),
                        'border-[#BA7B7B] focus:border-[#BA7B7B]': (message.length >= 651 && message.length < 751),
                        'border-[#9E5B5B] focus:border-[#9E5B5B]': (message.length >= 751 && message.length < 851),
                        'border-[#9A4848] focus:border-[#9A4848]': (message.length >= 851 && message.length < 951),
                        'border-[#993838] focus:border-[#993838]': (message.length >= 951 && message.length <= 1000)
                    }" v-model="message" placeholder="Tell us what your think"></textarea>

                <div class="text-sm font-inter italic text-right -mb-2" v-bind:class="{
                    'text-[#888888]': message.length < 151,
                    'text-[#A28888]': (message.length >= 151 && message.length < 251),
                    'text-[#A67171]': (message.length >= 251 && message.length < 351),
                    'text-[#A98888]': (message.length >= 351 && message.length < 451),
                    'text-[#AC8888]': (message.length >= 451 && message.length < 551),
                    'text-[#A97B7B]': (message.length >= 551 && message.length < 651),
                    'text-[#BA7B7B]': (message.length >= 651 && message.length < 751),
                    'text-[#9E5B5B]': (message.length >= 751 && message.length < 851),
                    'text-[#9A4848]': (message.length >= 851 && message.length < 951),
                    'text-[#993838]': (message.length >= 951 && message.length <= 1000)
                
                
                
                }">
                    Max
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

    // setting exisiting data coming from DB
    mounted: function () {
        if ("improve_experience" in (this.$store.getters['EmojiStore/getJsonData'])) {
            this.message = (this.$store.getters['EmojiStore/getJsonData'])["improve_experience"]
        }
    },

    methods: {
        updateMyValue(event) {
            this.mobile_msg = event.target.value
            this.autoSave()
        },
        autoSave: _.debounce(function () {
            this.$store.commit('EmojiStore/setInput', ["improve_experience", this.message])

        }, 1000)
    }

})

</script>