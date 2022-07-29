<template>
    <div id="order-details">
        <div class="flex justify-center">
            <div class="card bg-white w-[50rem] ">
                <div class="card-body">
                    <div class="grid grid-cols-2">
                        <div class="bg-[#F4F4F4] w-56 bg-cover rounded">
                            <p class="text-sm p-2">!!! Feedback for Order#{{
                                    details[0].OrderNum
                            }}</p>
                        </div>
                        <p class="text-sm font-inter mt-2 text-[#888888] italic text-right">Seller Feedback</p>
                    </div>

                    <div>
                        <div class="space-y-4" v-for="items in details.length">
                            <div>
                                <hr class="my-2">
                                <div class="pb-5 pt-1">

                                    <div class="flex space-x-9 ">

                                        <img :src="details[items - 1].image" class="flex-none w-[12rem]" />

                                        <div class="text-left space-y-2 flex-1 w-[18.5rem]">

                                            <div class="flex text-base space-x-4">
                                                <div class="flex-none font-inter w-14 text-[#888888]">Name</div>
                                                <div class="flex-none font-inter">{{ details[items - 1].name }}</div>
                                            </div>
                                            <div class="flex text-base space-x-4">
                                                <div class="flex-none font-inter w-14 text-[#888888]">Brand</div>
                                                <div class="flex-none font-inter">{{ details[items - 1].brand }}</div>
                                            </div>


                                            <div class="font-inter text-base pt-5">Does this item match as the seller
                                                described?
                                            </div>

                                            <div class="grid grid-rows-2 pt-1 space-y-1">
                                                <div class="space-x-1">
                                                    <input type="radio" id="yes" value="Yes"
                                                        v-model="picked[items - 1]" />
                                                    <label for="Yes" class="font-inter pb-3 text-base">Yes</label>
                                                </div>
                                                <div class="space-x-1">
                                                    <input type="radio" id="no" value="No"
                                                        v-model="picked[items - 1]" />
                                                    <label for="No" class="font-inter text-base mb-3">No</label>
                                                </div>
                                            </div>


                                            <div class="pt-5">
                                                <div class="font-inter text-base">How do you feel about the product
                                                    received?</div>
                                            </div>
                                            <EmotionsRadio class="pt-4" @child-checkbox="checkboxValue"
                                                :itemID="details[items - 1].ID" />

                                        </div>


                                    </div>
                                </div>
                            </div>
                            <!-- <h1>H1 tag{{ $store.state.EmojiStore.counter }}</h1> -->
                            <!-- <h1>THIS IS MY DICTIONARY {{ JSON.stringify(this.$store.getters['EmojiStore/getDictionary']) }} -->
                            <!-- </h1> -->
                            <h1>THIS IS MY DICTIONARY {{ JSON.stringify($store.state.EmojiStore.itemState) }}</h1>
                            <h3>Test variable: {{ itemState }}</h3>


                            <!-- <div v-if="(($store.getters['emojiStore/getDictionary'])[(items)]) == true">
                                <CheckboxOptions />
                                {{ ($store.getters['emojiStore/getDictionary']) }}
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>
import Vue from 'vue'
import EmotionsRadio from './EmotionsRadio.vue'
import CheckboxOptions from './CheckboxOptions.vue'
import Dislike from "~/assets/Dislike.svg?inline";
import Neutral from "~/assets/Neutral.svg?inline";
import Poor from "~/assets/Poor.svg?inline";
import Like from "~/assets/Like.svg?inline";
import Love from "~/assets/Love.svg?inline";
import DislikeColored from "~/assets/DislikeColored.svg?inline";
import PoorColored from "~/assets/PoorColored.svg?inline";
import LoveColored from "~/assets/LoveColored.svg?inline";
import LikeColored from "~/assets/LikeColored.svg?inline";
import NeutralColored from "~/assets/NeutralColored.svg?inline";
// import { useEmojiStore } from "@/stores/EmojiStore";
import store from '~/store/EmojiStore.js';
import { mapActions, mapGetters } from "vuex";
// import { EmojiStore } from 'vuex'








export default Vue.extend({
    name: "OrderDetails",

    data() {
        return {
            pick1: String,
            pick2: String,
            pick3: String,
            picked: [this.pick1, this.pick2, this.pick3],
            is_hidden1: false,
            is_hidden2: false,
            isHidden3: false,
            isHidden4: false,
            isHidden5: false,
            upHere: Boolean,
            selected: '',
            selectedRating: Boolean,
            rating_x: Number,
            check: false,
            item_id: [],
            str1: '',
            str2: '',
            fullState: '',
            itemStateDict: {},
            test: ''

        }
    },
    watch: {
        itemState(newValue, oldValue) {
            this.test = newValue
            console.log("Old:", oldValue, "new:", newValue)
        }
    },

    computed: {
        itemState() {
            console.log("this is in order details' computed", this.$store.state.EmojiStore.itemState)
            return this.$store.state.EmojiStore.itemState

        }
    },

    props: {
        details: Array
    },
    components: {
        EmotionsRadio,
        Poor, Dislike, Neutral, Like, Love, PoorColored, DislikeColored, LoveColored, LikeColored, NeutralColored,
        CheckboxOptions,
    },

    mounted: function () {
        // this.randDictionary = this.$store.getters['emojiStore/getDictionary']
        console.log("*************")

        // this.randDictionary = this.$store.getters['emojiStore/getDictionary']

        for (let i = 0; i < this.details.length; i++) {
            // console.log("Block statement execution no." + i);
            this.str1 = this.details[i].name
            this.str2 = (this.details[i].ID).toString()
            this.fullState = this.str1.concat(this.str2.toString());
            this.fullState = this.fullState.replace(/\s/g, '')
            this.item_id.push(this.fullState);
            this.itemStateDict[i.toString()] = false

        }

    },


    methods: {
        gettingUpdated() {
        },
        checkboxValue: function ($event) {
            console.log($event)
            console.log($event[0])
            console.log($event[1])
            this.itemStateDict[event[1]] = event[0]
        },
    },


})
</script>
<style>
.visibility .icon-b {
    display: none;
}

.visibility:hover .icon-a,
.visibility:active .icon-a {
    display: none;
}

.visibility:hover .icon-b,
.visibility:focus .icon-b {
    display: block;
}

.parent-div+.text-b {
    display: none;
}

.parent-div:hover+.text-a {
    display: none;
}

.parent-div:hover+.text-b {
    display: block;
}
</style>