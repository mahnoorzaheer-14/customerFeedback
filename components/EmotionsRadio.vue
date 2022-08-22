<template>
    <div>
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
            this.item_id = +this.item_id
            this.$emit("child-checkbox", [this.isHidden1, +this.item_id]);

        }
    },

    computed: {
        counter() {
            return this.$store.state.counter
        },

    },
    mounted: function () {
        let keyword = "P" + this.itemID + "_satisfaction"

        let tempKeyword = "satisfaction_item_" + this.itemID // satisfaction_item_10

        if ("itemID" in (this.$store.getters['EmojiStore/getJsonData'])) {
            let tempDiction = (this.$store.getters['EmojiStore/getJsonData'])["itemID"]

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

            if (keyword in (this.$store.getters['EmojiStore/getJsonData'])) {

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

            }


        }
    },
    methods: {

        setSatisfaction(response) {
            this.$store.state.EmojiStore.anotherDict["satisfaction_item_" + this.itemID] = response   // {satisfaction_item_5:Poor}
            this.$store.state.EmojiStore.keywordItemID["itemID"] = this.$store.state.EmojiStore.anotherDict  // {itemID:{match_item_5:Yes}}
            this.$store.commit('EmojiStore/setVendorSatisfaction', this.$store.state.EmojiStore.keywordItemID)

        },

        appear1() {
            return (
                this.isHidden1 = true,
                this.isHidden2 = false,
                this.isHidden3 = false,
                this.isHidden4 = false,
                this.isHidden5 = false,
                this.setSatisfaction("Poor"),
                this.$store.commit('EmojiStore/increment', [this.isHidden1, parseInt(this.item_id)])
            )
        },
        appear2() {
            return (
                this.isHidden2 = true,
                this.isHidden1 = false,
                this.isHidden3 = false,
                this.isHidden4 = false,
                this.isHidden5 = false,
                this.setSatisfaction("Dislike"),
                this.$store.dispatch('EmojiStore/increment', [this.isHidden2, parseInt(this.item_id)])
            )
        },
        appear3() {
            return (
                this.isHidden3 = true,
                this.isHidden2 = false,
                this.isHidden1 = false,
                this.isHidden4 = false,
                this.isHidden5 = false,
                this.setSatisfaction("Neutral"),
                this.$store.dispatch('EmojiStore/increment', [this.isHidden1, parseInt(this.item_id)])
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
                this.$store.dispatch('EmojiStore/increment', [this.isHidden1, parseInt(this.item_id)])
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
                this.$store.dispatch('EmojiStore/increment', [this.isHidden1, parseInt(this.item_id)])
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