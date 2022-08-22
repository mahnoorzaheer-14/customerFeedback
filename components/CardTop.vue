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

export default {
    name: "CardTop",
    props: {
        question: String,
        answer: Array,
    },
    data() {
        return {
            rating: String,
            error: null
        }
    },

    // setting exisiting data coming from DB
    mounted: function () {
        if ("recomended" in (this.$store.getters['EmojiStore/getJsonData'])) {
            this.rating = (this.$store.getters['EmojiStore/getJsonData'])["recomended"]
            this.$emit('rating', this.rating);
        }
    },

    methods: {
        setRating(event) {
            this.$store.commit('EmojiStore/setRating', ["recomended", event.target.value])
            this.$emit('rating', event.target.value);
        },
    }

}

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
</style>