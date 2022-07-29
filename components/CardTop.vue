<template>
    <div id='card-top'>
        <div class="flex justify-center">
            <div class="card bg-white lg:w-[50rem] md:w-24">
                <div class="card-body">
                    <p class="mb-4 text-lg">{{ sawaal }}</p>
                    <!-- <p class="mb-4 text-lg">{{ rating }}</p> -->
                    <div class="grid grid-cols-3">
                        <div>
                            <p class="mt-12 ml-14 text-sm">Not at all likely</p>
                        </div>
                        <div>
                            <div class="flex justify-center space-x-10 sm:space-x-6">

                                <div class="form-check form-check-inline grid grid-rows-2 space-y-4">
                                    <label class="form-check-label inline-block text-gray-800 ml-1.5"
                                        for="inlineRadio10">1</label>
                                    <input type="radio" id="one" value=1 class="h-[1.20rem] w-[1.20rem]"
                                        v-model="rating" />
                                </div>
                                <div class="form-check form-check-inline grid grid-rows-2 space-y-4">
                                    <label class="form-check-label inline-block text-gray-800 ml-1.5"
                                        for="inlineRadio20">2</label>
                                    <input type="radio" id="two" value=2 class="h-[1.20rem] w-[1.20rem]"
                                        v-model="rating" />
                                </div>
                                <div class="form-check form-check-inline grid grid-rows-2 space-y-4">
                                    <label class="form-check-label inline-block text-gray-800 ml-1.5"
                                        for="inlineRadio10">3</label>
                                    <input type="radio" id="three" value=3 class="h-[1.20rem] w-[1.20rem]"
                                        v-model="rating" />
                                </div>
                                <div class="form-check form-check-inline grid grid-rows-2 space-y-4">
                                    <label class="form-check-label inline-block text-gray-800 ml-1.5"
                                        for="inlineRadio10">4</label>
                                    <input type="radio" id="four" value=4 class="h-[1.20rem] w-[1.20rem]"
                                        v-model="rating" />
                                </div>
                                <div class="form-check form-check-inline grid grid-rows-2 space-y-4">
                                    <label class="form-check-label inline-block text-gray-800 ml-1.5"
                                        for="inlineRadio10">5</label>
                                    <input type="radio" id="five" value=5 class="h-[1.20rem] w-[1.20rem]"
                                        v-model="rating" />
                                </div>
                            </div>
                        </div>
                        <div>
                            <p class="mt-12 ml-20 text-sm">Extremely likely</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div v-if="rating == 1">

            <AnotherComponent />
        </div>
    </div>

</template>


<script lang="ts">

import Vue from 'vue'
import Dislike from "~/assets/Dislike.svg?inline";
import Neutral from "~/assets/Neutral.svg?inline";
import Poor from "~/assets/Poor.svg?inline";
import AnotherComponent from './AnotherComponent.vue'
import { MediaQueryProvider, MatchMedia } from 'vue-component-media-queries'

// import 'tw-elements';



export default Vue.extend({
    name: "CardTop",
    props: {
        question: String,
        answer: Array,
    },
    data() {
        return {
            sawaal: this.question,
            isHidden1: false,
            isHidden2: false,
            isHidden3: false,
            isHidden4: false,
            isHidden5: false,
            selected: '',
            rating: String,



            // jawaab: {
            //     "key1": [this.answer[0], Heart],
            //     "key2": [this.answer[1], Vector],
            //     "key3": [this.answer[2], Vector],
            //     "key4": [this.answer[3], Vector],
            //     "key5": [this.answer[4], Vector],
            // },
        }
    },

    components: {
        Dislike, Neutral, Poor, AnotherComponent,
    },

    methods: {
        changeSVG(reaction: string) {
            console.log(reaction)
            return Dislike
        },
        // onChange(event) {
        //     var data = event.target.value;
        //     console.log(data);
        // },
        appear1() {
            return (this.isHidden2 = false,
                this.isHidden3 = false,
                this.isHidden4 = false,
                this.isHidden5 = false)
        },
        appear2() {
            return (this.isHidden1 = false,
                this.isHidden3 = false,
                this.isHidden4 = false,
                this.isHidden5 = false)

        },
        appear3() {
            return (this.isHidden2 = false,
                this.isHidden1 = false,
                this.isHidden4 = false,
                this.isHidden5 = false)

        },
        appear4() {
            return (this.isHidden2 = false,
                this.isHidden3 = false,
                this.isHidden1 = false,
                this.isHidden5 = false)
        },
        appear5() {
            return (this.isHidden1 = false,
                this.isHidden3 = false,
                this.isHidden4 = false,
                this.isHidden2 = false)

        },
        captureRating(rate: number): void {
            console.log(this.rating)
            console.log(rate)


        }

    }

}
)
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

/* a:link,
a:visited,
a:hover,
a:active {
    color: rgba(0, 0, 16, 0.8);
    text-decoration: none;
}

a:hover,
a:active {
    border-bottom: 0.1em solid rgba(0, 0, 16, 0.8);
    color: rgba(0, 0, 16, 0.8);
    text-decoration: none;
}

span {
    color: rgba(0, 0, 16, 0.4);
    font-size: 70%;
}

header {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: auto;
    width: 34.6rem;
}

header h1 {
    font-size: 2.8em;
}

.card {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: auto;
    -webkit-box-shadow: 0 0.5rem 1rem rgba(0, 0, 16, 0.19), 0 0.3rem 0.3rem rgba(0, 0, 16, 0.23);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 16, 0.19), 0 0.3rem 0.3rem rgba(0, 0, 16, 0.23);
    background-color: rgb(255, 255, 255);
    padding: 0.8rem;
    width: 33rem;
}

.rating-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: 0.4rem 0.8rem;
    width: 100%;
}


.rating {
    background-color: rgba(0, 0, 16, 0.8);
    padding: 0.4rem 0.4rem 0.1rem 0.4rem;
    border-radius: 2.2rem;
}

svg {
    fill: rgb(242, 242, 242);
    height: 3.6rem;
    width: 3.6rem;
    margin: 0.2rem;
} */

/* 
.rating-form-2 svg {
    height: 3rem;
    width: 3rem;
    margin: 0.5rem;
} */

/* #radios label {
    position: relative;
}

.input[type="radio"] {
    position: absolute;
    opacity: 0;
}

.input[type="radio"]+svg {
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
}

.input+.svg {
    cursor: pointer;
}


input[class="super-happy"] .svg-b {
    display: none;
}

input[class="super-happy"] .svg-b:hover,
input[class="super-happy"] .svg-b:checked {
    display: block;
}

input[class="super-happy"] .svg-a:hover,
input[class="super-happy"] .svg-a:checked {
    display: none;
}



input[class="happy"]:hover+svg,
input[class="happy"]:checked+svg,
input[class="happy"]:focus+svg {
    fill: rgb(0, 204, 79);
}

input[class="neutral"]:hover+svg,
input[class="neutral"]:checked+svg,
input[class="neutral"]:focus+svg {
    fill: rgb(232, 214, 0);
}

input[class="sad"]:hover+svg,
input[class="sad"]:checked+svg,
input[class="sad"]:focus+svg {
    fill: rgb(229, 132, 0);
}

input[class="super-sad"]:hover+svg,
input[class="super-sad"]:checked+svg,
input[class="super-sad"]:focus+svg {
    fill: rgb(239, 42, 16);
} */
</style>