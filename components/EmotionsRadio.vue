<template>
    <div>
        <!-- <p class="text-[12px]">{{ $store.state.EmojiStore.id }}</p>

        <p>{{ (($store.getters['EmojiStore/getDictionary'])[(itemID)]) }}</p> -->
        <div class="grid gap-x-5 md:gap-x-11 lg:gap-x-11 grid-cols-5">

            <div class="space-y-2">
                <div v-if="!isHidden1" class="text-sm text-[#888888] ml-1.5 md:ml-1.5 lg:ml-1.5">Poor</div>
                <div v-if="isHidden1" class="text-sm text-[#222222] ml-1.5 md:ml-1.5 lg:ml-1.5">Poor</div>
                <button name="rating" v-on:click="appear1()"
                    class="bg-transparent text-gray-600 border border-transparent rounded">
                    <Poor v-if="!isHidden1" class="icon-a hover:drop-shadow-md" />
                    <PoorColored v-if="isHidden1" class="icon-b" />
                </button>
            </div>


            <div class="space-y-2 ">
                <div v-if="!isHidden2" class="text-sm text-[#888888] ">Dislike</div>
                <div v-if="isHidden2" class="text-sm text-[#222222] ">Dislike</div>
                <button name="rating" v-on:click="appear2()"
                    class="bg-transparent text-gray-600 border border-transparent rounded ">
                    <Dislike v-if="!isHidden2" class="icon-a hover:drop-shadow-md" />
                    <DislikeColored v-if="isHidden2" class="icon-b" />
                </button>
            </div>

            <div class="space-y-2">
                <div v-if="!isHidden3" class="text-sm text-[#888888] lg:-ml-1">Neutral</div>
                <div v-if="isHidden3" class="text-sm text-[#222222] lg:-ml-1">Neutral</div>
                <button name="rating" v-on:click="appear3()"
                    class="bg-transparent text-gray-600 border border-transparent rounded">
                    <Neutral v-if="!isHidden3" class="icon-a hover:drop-shadow-md" />
                    <NeutralColored v-if="isHidden3" class="icon-b" />
                </button>
            </div>

            <div class="space-y-2">
                <div v-if="!isHidden4" class="text-sm text-[#888888] ml-2 md:ml-2 lg:ml-2">Like</div>
                <div v-if="isHidden4" class="text-sm text-[#222222] ml-2 md:ml-2 lg:ml-2">Like</div>
                <button name="rating" v-on:click="appear4()"
                    class="bg-transparent text-gray-600 border border-transparent rounded">
                    <Like v-if="!isHidden4" class="icon-a hover:drop-shadow-md" />
                    <LikeColored v-if="isHidden4" class="icon-b" />
                </button>
            </div>

            <div class="space-y-2">
                <div v-if="!isHidden5" class="text-sm text-[#888888] ml-1.5 md:ml-1.5 lg:ml-1.5">Love</div>
                <div v-if="isHidden5" class="text-sm text-[#222222] ml-1.5 md:ml-1.5 lg:ml-1.5">Love</div>
                <button name="rating" v-on:click="appear5()"
                    class="bg-transparent text-gray-600 border border-transparent rounded">
                    <Love v-if="!isHidden5" class="icon-a hover:drop-shadow-md" />
                    <LoveColored v-if="isHidden5" class="icon-b" />
                </button>
            </div>
        </div>
    </div>
</template>

<script >
import Vue from 'vue'
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
import CheckboxOptions from './CheckboxOptions.vue';
import axios from 'axios'
// import { useEmojiStore } from "@/stores/EmojiStore";
// import { mapMutations } from 'vuex'



export default Vue.extend({
    name: "EmotionsRadio",
    data() {
        return {
            isHidden1: false,
            isHidden2: false,
            isHidden3: false,
            isHidden4: false,
            isHidden5: false,
            upHere: Boolean,
            selected: '',
            rating: Number,
            checkbox: false,
            item_id: "" + (this.itemID),

            // item_id: (this.itemID).toString(),
        }
    },
    props: {
        itemID: Number
    },
    components: {
        Poor, Dislike, Neutral, Like, Love, PoorColored, DislikeColored, LoveColored, LikeColored, NeutralColored, CheckboxOptions,

    },
    watch: {
        isHidden1: function () {
            // Emit this information to the parents component
            // console.log("hidden state", this.isHidden1)
            console.log(typeof +this.item_id)
            this.item_id = +this.item_id
            this.$emit("child-checkbox", [this.isHidden1, +this.item_id]);

        }
    },

    computed: {
        counter() {
            console.log("Counter from Store:", this.$store.state.counter)
            return this.$store.state.counter
        },

    },
    mounted: function () {
        let keyword = "P" + this.itemID + "_satisfaction"

        let tempKeyword = "satisfaction_item_" + this.itemID // satisfaction_item_10

        if ("itemID" in (this.$store.getters['EmojiStore/getJsonData'])) {
            let tempDiction = (this.$store.getters['EmojiStore/getJsonData'])["itemID"]

            // console.log("!!!!!", tempDiction)

            if (tempDiction[tempKeyword] == 'Poor') {
                this.isHidden1 = true
                this.$store.commit('EmojiStore/increment', [this.isHidden1, parseInt(this.item_id)])
            }

            if (tempDiction[tempKeyword] == 'Dislike') {
                this.isHidden2 = true
                this.$store.commit('EmojiStore/increment', [this.isHidden2, parseInt(this.item_id)])
            }

            if (tempDiction[tempKeyword] == 'Neutral') {
                this.isHidden3 = true
            }

            if (tempDiction[tempKeyword] == 'Like') {
                this.isHidden4 = true
            }

            if (tempDiction[tempKeyword] == 'Love') {
                this.isHidden5 = true
            }


            // setting already exisiting match value
            // if (tempKeyword in tempDiction) {

            //     this.YesNoList[j] = tempDiction[tempKeyword1] + "-" + this.details[j].id
            // }
            if (keyword in (this.$store.getters['EmojiStore/getJsonData'])) {
                console.log("YES I SATISFY EXIST HERE", keyword, (this.$store.getters['EmojiStore/getJsonData'])[keyword])


                if ((this.$store.getters['EmojiStore/getJsonData'])[keyword] == 'Poor') {
                    this.isHidden1 = true
                    this.$store.commit('EmojiStore/increment', [this.isHidden1, parseInt(this.item_id)])


                }

                if ((this.$store.getters['EmojiStore/getJsonData'])[keyword] == 'Dislike') {
                    this.isHidden2 = true
                    this.$store.commit('EmojiStore/increment', [this.isHidden2, parseInt(this.item_id)])


                }

                if ((this.$store.getters['EmojiStore/getJsonData'])[keyword] == 'Neutral') {
                    this.isHidden3 = true

                }

                if ((this.$store.getters['EmojiStore/getJsonData'])[keyword] == 'Like') {
                    this.isHidden4 = true

                }

                if ((this.$store.getters['EmojiStore/getJsonData'])[keyword] == 'Love') {
                    this.isHidden5 = true

                }

                //   this.selectedCheckOptions = (this.$store.getters['EmojiStore/getJsonData'])[(this.qTag.concat("_issues"))]
            }


        }
    },
    methods: {

        setSatisfaction(response) {
            console.log("vendor satisfaction", response)
            let key = "P" + this.itemID + "_satisfaction"
            this.$store.state.EmojiStore.anotherDict["satisfaction_item_" + this.itemID] = response   // {satisfaction_item_5:Poor}
            this.$store.state.EmojiStore.keywordItemID["itemID"] = this.$store.state.EmojiStore.anotherDict  // {itemID:{match_item_5:Yes}}
            // console.log("now check in emotionsradio", this.$store.state.EmojiStore.keywordItemID)
            this.$store.commit('EmojiStore/setVendorSatisfaction', this.$store.state.EmojiStore.keywordItemID)

        },

        async sendSellerFeedback_satisfaction(num) {

            console.log("num", num)
            // console.log(splitted)
            // var response = splitted[0]
            // var id = splitted[1]
            try {
                // const response = await axios.post('http://localhost:1337/api/restaurants', this.modifiedData)
                let feedback_num = ("seller_feedback_P").concat(this.itemID)
                const obj = { meta: { key: feedback_num, value: { 'satisfaction': num } } }
                await axios.post('https://staging-feedback-form-7j5z7gqdsa-uc.a.run.app/test2', obj)
            } catch (error) {
                console.log("Error encountered", error);
            }

        },
        appear1() {
            return (
                console.log("event triggered in smileys"),
                this.isHidden1 = true,
                this.isHidden2 = false,
                this.isHidden3 = false,
                this.isHidden4 = false,
                this.isHidden5 = false,
                this.setSatisfaction("Poor"),
                // this.sendSellerFeedback_satisfaction(1),
                // console.log("Id recvd from parent as props", this.item_id),
                this.$emit("child-checkbox", [this.isHidden1, +this.item_id]),

                this.$store.commit('EmojiStore/increment', [this.isHidden1, parseInt(this.item_id)])

                // this.$store.commit('EmojiStore/increment', [this.isHidden2, parseInt(this.item_id)])


            )
        },
        appear2() {
            return (
                console.log("event2 triggered in smileys"),
                this.isHidden2 = true,
                this.isHidden1 = false,
                this.isHidden3 = false,
                this.isHidden4 = false,
                this.isHidden5 = false,
                // this.sendSellerFeedback_satisfaction(2),
                this.setSatisfaction("Dislike"),

                this.$store.dispatch('EmojiStore/increment', [this.isHidden2, parseInt(this.item_id)])
                // this.$store.dispatch('EmojiStore/increment', [this.isHidden2, parseInt(this.item_id)])

                // this.$store.commit('emojiStore/increment', [this.isHidden1, parseInt(this.item_id)])

            )

        },
        appear3() {
            return (
                this.isHidden3 = true,
                this.isHidden2 = false,
                this.isHidden1 = false,
                this.isHidden4 = false,
                this.isHidden5 = false,
                // this.sendSellerFeedback_satisfaction(3),
                this.setSatisfaction("Neutral"),


                this.$store.dispatch('EmojiStore/increment', [this.isHidden1, parseInt(this.item_id)])
                // this.$store.dispatch('EmojiStore/increment', [this.isHidden2, parseInt(this.item_id)])

                // this.$store.commit('emojiStore/increment', [this.isHidden1, parseInt(this.item_id)])

            )

        },
        appear4() {
            return (
                this.isHidden4 = true,
                this.isHidden2 = false,
                this.isHidden3 = false,
                this.isHidden1 = false,
                this.isHidden5 = false,
                this.setSatisfaction("Like"),
                // this.sendSellerFeedback_satisfaction(4),

                this.$store.dispatch('EmojiStore/increment', [this.isHidden1, parseInt(this.item_id)])
                // this.$store.dispatch('EmojiStore/increment', [this.isHidden2, parseInt(this.item_id)])

                // this.$store.commit('emojiStore/increment', [this.isHidden1, parseInt(this.item_id)])

            )
        },
        appear5() {
            return (
                this.isHidden5 = true,
                this.isHidden1 = false,
                this.isHidden3 = false,
                this.isHidden4 = false,
                this.isHidden2 = false,
                this.setSatisfaction("Love"),

                // this.sendSellerFeedback_satisfaction(5),

                this.$store.dispatch('EmojiStore/increment', [this.isHidden1, parseInt(this.item_id)])
                // this.$store.dispatch('EmojiStore/increment', [this.isHidden2, parseInt(this.item_id)])

                // this.$store.commit('emojiStore/increment', [this.isHidden1, parseInt(this.item_id)])
            )

        },

    }
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