<template>
    <div id='card-top'>
        <div class="card bg-white rounded-none md:rounded-2xl lg:rounded-2xl">
            <div class="card-body -mt-1">
                <p class="mb-4 text-[16px]">How likely would your reccomend LAAM to your friends and family?</p>
                <div class="pb-8 md:pb-0 lg:-mt-1 lg:pb-2.5">
                    <div class="to-left font-inter text-[#666666]">Not at all likely</div>
                    <div class="flex justify-center space-x-8 lg:space-x-10 ">
                        <div class="form-check form-check-inline grid grid-rows-2 space-y-3">
                            <label class="ml-1.5">1</label>
                            <input type="radio" value=1
                                class="h-[1.20rem] w-[1.20rem] focus:text-black checked:text-black focus:ring-0"
                                v-model="rating" @input="setRating" />
                        </div>
                        <div class="form-check form-check-inline grid grid-rows-2 space-y-3">
                            <label class="ml-1.5" for="inlineRadio20">2</label>
                            <input type="radio" id="two" value=2
                                class="h-[1.20rem] w-[1.20rem] focus:text-black checked:text-black focus:ring-0"
                                v-model="rating" @input="setRating" />
                        </div>
                        <div class="form-check form-check-inline grid grid-rows-2 space-y-3">
                            <label class="ml-1.5" for="inlineRadio10">3</label>
                            <input type="radio" id="three" value=3
                                class="h-[1.20rem] w-[1.20rem] focus:text-black checked:text-black focus:ring-0"
                                v-model="rating" @input="setRating" />
                        </div>
                        <div class="form-check form-check-inline grid grid-rows-2 space-y-3">
                            <label class="ml-1.5" for="inlineRadio10">4</label>
                            <input type="radio" id="four" value=4
                                class="h-[1.20rem] w-[1.20rem] focus:text-black checked:text-black focus:ring-0"
                                v-model="rating" @input="setRating" />
                        </div>
                        <div class="form-check form-check-inline grid grid-rows-2 space-y-3">
                            <label class="ml-1.5" for="inlineRadio10">5</label>
                            <input type="radio" id="five" value=5
                                class="h-[1.20rem] w-[1.20rem] focus:text-black checked:text-black focus:ring-0"
                                v-model="rating" @input="setRating" />
                        </div>
                    </div>
                    <div class="to-right font-inter text-[#666666]">Extremely Likely</div>
                </div>
            </div>
        </div>
    </div>

</template>


<script>

import Vue from 'vue'
import Dislike from "~/assets/Dislike.svg?inline";
import Neutral from "~/assets/Neutral.svg?inline";
import Poor from "~/assets/Poor.svg?inline";
import AnotherComponent from './AnotherComponent.vue'
import axios from 'axios';
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
            error: null
        }
    },

    components: {
        Dislike, Neutral, Poor, AnotherComponent,
    },
    mounted: function () {
        console.log("In card top, json data", this.$store.state.jsonData)
        console.log("recomended" in (this.$store.getters['EmojiStore/getJsonData']))
        if ("recomended" in (this.$store.getters['EmojiStore/getJsonData'])) {
            this.rating = (this.$store.getters['EmojiStore/getJsonData'])["recomended"]
            this.$emit('rating', this.rating);
        }
    },

    computed: {
        // storeRating() {
        //     return this.$store.state.storeRating
        // }
    },

    methods: {
        setRating(event) {
            console.log("inside rating", event.target.value)
            this.$store.commit('EmojiStore/setRating', ["recomended", event.target.value])
            this.$emit('rating', event.target.value);
        },

        async sendRating(event) {
            // console.log("eventt", event.target.value)
            // this.$store.commit('EmojiStore/setRating', event.target.value)
            // this.$emit('rating', event.target.value);
            // try {
            //     // const response = await axios.post('http://localhost:1337/api/restaurants', this.modifiedData)
            //     const obj = { meta: { "recomended": event.target.value } }
            //     await axios.post(`http://127.0.0.1:8080/laamfeedback/${'jcbcdhcj'}`, obj)
            // } catch (error) {
            //     console.log("Error encountered", error);
            // }

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

.to-left {
    position: absolute;
    bottom: 38px;
    left: 85px;
    font-size: 15px;
}

.to-right {
    position: absolute;
    bottom: 38px;
    right: 70px;
    font-size: 15px;
}

@media (max-width: 640px) {

    .to-left {
        position: absolute;
        bottom: 30px;
        left: 32px;
        font-size: 14px;
    }

    .to-right {
        position: absolute;
        bottom: 30px;
        right: 32px;
        font-size: 14px;

    }
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