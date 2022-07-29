<template>
    <div>
        <div class="grid grid-cols-5 space-x-3">

            <div class="space-y-2">
                <div v-if="!isHidden1" class="text-sm text-[#888888]">Poor</div>
                <div v-if="isHidden1" class="text-sm text-[#222222]">Poor</div>
                <button name="rating" v-on:click="(isHidden1 = true) && (appear1())"
                    class="bg-transparent md:h-20 sm:h-15 sm:w-5 text-gray-600  md:py-3 md:px-4 border border-transparent rounded">
                    <Poor v-if="!isHidden1" class="icon-a hover:drop-shadow-md" />
                    <PoorColored v-if="isHidden1" class="icon-b" />
                </button>
            </div>

            <div class="space-y-2 parent-div">
                <div v-if="!isHidden2" class="text-sm text-[#888888] text-a">Dislike</div>
                <div v-if="isHidden2" class="text-sm text-[#222222] text-b">Dislike</div>
                <button name="rating" v-on:click="(isHidden2 = true) && (appear2())"
                    class="bg-transparent md:h-20 sm:h-15 sm:w-5 text-gray-600 md:py-3 md:px-4 border border-transparent rounded">
                    <Dislike v-if="!isHidden2" class="icon-a hover:drop-shadow-md" />
                    <DislikeColored v-if="isHidden2" class="icon-b" />
                </button>
            </div>

            <div class="space-y-2 hover:drop-shadow-md">
                <div v-if="!isHidden3" class="text-sm text-[#888888]">Neutral</div>
                <div v-if="isHidden3" class="text-sm text-[#222222]">Neutral</div>
                <button name="rating" v-on:click="(isHidden3 = true) && (appear3())"
                    class="bg-transparent md:h-20 sm:h-15 sm:w-5 text-gray-600 md:py-3 md:px-4 border border-transparent rounded">
                    <Neutral v-if="!isHidden3" class="icon-a hover:drop-shadow-md" />
                    <NeutralColored v-if="isHidden3" class="icon-b" />
                </button>
            </div>

            <div class="space-y-2">
                <div v-if="!isHidden4" class="text-sm text-[#888888]">Like</div>
                <div v-if="isHidden4" class="text-sm text-[#222222]">Like</div>
                <button name="rating" v-on:click="(isHidden4 = true) && (appear4())"
                    class="bg-transparent md:h-20 sm:h-15 sm:w-5 text-gray-600 md:py-3 md:px-4 border border-transparent rounded">
                    <Like v-if="!isHidden4" class="icon-a hover:drop-shadow-md" />
                    <LikeColored v-if="isHidden4" class="icon-b" />
                </button>
            </div>

            <div class="space-y-2">
                <div v-if="!isHidden5" class="text-sm text-[#888888]">Love</div>
                <div v-if="isHidden5" class="text-sm text-[#222222]">Love</div>
                <button name="rating" v-on:click="(isHidden5 = true) && (appear5())"
                    class="bg-transparent md:h-20 sm:h-15 sm:w-5 text-gray-600 md:py-3 md:px-4 border border-transparent rounded">
                    <Love v-if="!isHidden5" class="icon-a hover:drop-shadow-md" />
                    <LoveColored v-if="isHidden5" class="icon-b" />
                </button>
            </div>
        </div>
        <!-- <h2> {{ $store.state.emojiStore.counter }}</h2> -->
        <!-- <h2> {{ this.$store.state.emojiStore.itemState }}</h2> -->
        <h1>THIS IS COUNTER: {{ this.$store.state.EmojiStore.counter }}</h1>

        <button @click="addOne('Orange')">Add</button>
        <div v-if="isHidden1 == true">
            Hidden checked
        </div>
    </div>
</template>

<script lang="">
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
import CheckboxOptions from './CheckboxOptions.vue'
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
            item_id: (this.itemID).toString(),
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
        }
    },
    methods: {

        appear1() {
            return (
                this.isHidden2 = false,
                this.isHidden3 = false,
                this.isHidden4 = false,
                this.isHidden5 = false,
                console.log("Id recvd from parent as props", this.item_id),
                this.$emit("child-checkbox", [this.isHidden1, +this.item_id]),

                this.$store.dispatch('EmojiStore/increment', [this.isHidden1, parseInt(this.item_id)])

            )
        },
        appear2() {
            return (
                this.isHidden1 = false,
                this.isHidden3 = false,
                this.isHidden4 = false,
                this.isHidden5 = false,

                this.$store.dispatch('EmojiStore/increment', [this.isHidden1, parseInt(this.item_id)])
                // this.$store.commit('emojiStore/increment', [this.isHidden1, parseInt(this.item_id)])

            )

        },
        appear3() {
            return (
                this.isHidden2 = false,
                this.isHidden1 = false,
                this.isHidden4 = false,
                this.isHidden5 = false,

                this.$store.dispatch('EmojiStore/increment', [this.isHidden1, parseInt(this.item_id)])
                // this.$store.commit('emojiStore/increment', [this.isHidden1, parseInt(this.item_id)])

            )

        },
        appear4() {
            return (this.isHidden2 = false,
                this.isHidden3 = false,
                this.isHidden1 = false,
                this.isHidden5 = false,

                this.$store.dispatch('EmojiStore/increment', [this.isHidden1, parseInt(this.item_id)])
                // this.$store.commit('emojiStore/increment', [this.isHidden1, parseInt(this.item_id)])

            )
        },
        appear5() {
            return (this.isHidden1 = false,
                this.isHidden3 = false,
                this.isHidden4 = false,
                this.isHidden2 = false,

                this.$store.dispatch('EmojiStore/increment', [this.isHidden1, parseInt(this.item_id)])
                // this.$store.commit('emojiStore/increment', [this.isHidden1, parseInt(this.item_id)])
            )

        },

    },
    // setup() {
    //     const EmojiStore = useEmojiStore();

    //     return {
    //         EmojiStore,
    //     };
    // },


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