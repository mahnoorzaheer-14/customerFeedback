<template>
    <div id="order-cards">
        <div class="card bg-white rounded-none md:rounded-2xl lg:rounded-2xl">
            <div class="card-body mt-2 divide-y-[1px] divide-[#D9D9D9]">
                <div class="flex flex-row pb-3">
                    <p class="flex-none text-[13px] order-tag"><span class="p-2">Feedback for Order # {{
                            details[0].orderNum
                    }}</span></p>
                    <p class="text-[13px] font-inter text-[#888888] italic text-right">Seller Feedback</p>
                </div>
                <div v-for="items in details.length" class="pb-3">
                    <div class="flex relative mt-4 pb-2">
                        <img :src="details[items - 1].image"
                            class="flex-none object-scale-down w-[6rem] md:w-[13.3rem] lg:w-[13.3rem] lg:rounded-2xl" />
                        <div class="text-left pl-3 -mt-1 md:ml-6 lg:ml-5 md:mt-1 lg:mt-1 space-y-1.5">
                            <div class="flex text-base space-x-8">
                                <div class=" font-inter text-[#888888] text-[13px] md:text-[15px] lg:text-[15px]">Name
                                </div>
                                <div class="font-inter text-[13px] md:text-[15px] lg:text-[15px]">{{ details[items -
                                        1].title
                                }}
                                </div>
                            </div>
                            <div class="flex text-base space-x-8">
                                <div class="font-inter text-[#888888] text-[13px] md:text-[15px] lg:text-[15px]">Brand
                                </div>
                                <div class="font-inter text-[13px] md:text-[15px] lg:text-[15px]">{{ details[items -
                                        1].brand_name
                                }}
                                </div>
                            </div>


                            <div class="desktop">
                                <!-- {{ YesNoList }} -->
                                <div class="font-inter text-[15px] mt-6">Does the product match as the seller described?
                                </div>
                                <div class="grid grid-rows-2 pt-2 space-y-1">
                                    <div class="space-x-1">
                                        <input type="radio" :id="'Yes-' + details[items - 1].id"
                                            :value="'Yes-' + details[items - 1].id" v-model="YesNoList[items - 1]"
                                            class="focus:text-black checked:text-black focus:ring-0"
                                            @input="setMatch" />
                                        <label for="Yes"
                                            class="font-inter text-[13px] md:text-[14px] lg:text-[14px]">Yes</label>
                                    </div>
                                    <div class="space-x-1">
                                        <input type="radio" :id="'No-' + details[items - 1].id"
                                            :value="'No-' + details[items - 1].id" v-model="YesNoList[items - 1]"
                                            class="focus:text-black checked:text-black focus:ring-0"
                                            @input="setMatch" />
                                        <label for="No"
                                            class="font-inter text-[13px] md:text-[14px] lg:text-[14px]">No</label>
                                    </div>

                                </div>
                                <div class="font-inter text-[15px] mt-7">How satisfied are you with the product?</div>
                                <EmotionsRadio class="pt-4" :itemID="details[items - 1].id" />

                            </div>
                        </div>



                    </div>


                    <div class="mt-2 mobile">

                        <div class="font-inter text-[13px] md:text-[15px] lg:text-[15px] "> Does the product
                            match as the seller described? </div>
                        <div class="grid grid-rows-2 pt-1 space-y-1">
                            <div class="space-x-1">
                                <input type="radio" :id="'Yes-' + details[items - 1].id"
                                    :value="'Yes-' + details[items - 1].id" v-model="YesNoList[items - 1]"
                                    class="focus:text-black checked:text-black focus:ring-0" @input="setMatch" />
                                <label :for="'Yes-' + details[items - 1].id" class="font-inter text-[13px]">Yes</label>
                            </div>
                            <div class="space-x-1">
                                <input type="radio" :id="'No-' + details[items - 1].id"
                                    :value="'No-' + details[items - 1].id" v-model="YesNoList[items - 1]"
                                    class="focus:text-black checked:text-black focus:ring-0" @input="setMatch" />
                                <label :for="'No-' + details[items - 1].id" class="font-inter text-[13px]">No</label>
                            </div>
                        </div>
                        <div class="font-inter text-[13px] mt-4">How satisfied are you with the product?</div>

                        <EmotionsRadio class="pt-4" :itemID="details[items - 1].id" />

                    </div>

                    <p class="text-[0px]">{{ $store.state.EmojiStore.id }}</p>
                    <div v-if="storeDiction[details[items - 1].id]">


                        <div class="flex flex-row pb-3 mt-3">
                            <p class="font-inter text-[15px]">What exactly did not meet your expectations?</p>
                            <p class="desktop text-[13px] font-inter text-[#888888] italic text-right">Can select
                                multiple
                                options
                            </p>
                        </div>
                        <p class="mobile text-[13px] font-inter text-[#888888] italic mb-2">Can select multiple
                            options
                        </p>
                        <ul class=" flex flex-wrap pb-5">
                            <li v-for="i in options.length" class="pr-2 mt-2 md:pr-3 lg:pr-3 md:mt-3 lg:mt-3">
                                <input type="checkbox" :id="(options[i - 1]).concat(items - 1)"
                                    :value="options[i - 1] + '-' + details[items - 1].id + '-' + (items - 1)"
                                    v-model="checkedNames[items - 1].value" class="peer hidden" @change="setIssues">

                                <label :for="(options[i - 1]).concat(items - 1)"
                                    class="flex py-1.5 px-3 bg-white border border-[#D9D9D9] justify-center text-center text-[12px] text-[#666666] font-inter rounded-full cursor-pointer peer-checked:bg-black peer-checked:text-white peer-checked:border-transparent">
                                    {{ options[i - 1] }}
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>


</template>


<script>

export default ({
    name: "OrderCards",
    data() {
        return {
            itemsYesNo: {},
            YesNoList: [],
            str1: '',
            checkedNames: [],
            options: ['Fabric Quality', 'Insufficient Merchandise', 'Insufficient Fabric', 'Stitching Quality', 'Color Difference', 'Damaged Product', 'Different to picture', 'Size Chart'],

        }
    },
    props: {
        details: [],
        storeDiction: {}
    },
    methods: {
        setMatch(event) {
            var parse = event.target.value.split("-", 2)
            this.$store.state.EmojiStore.anotherDict["match_item_" + parse[1]] = parse[0]   // {match_item_5:Yes}
            this.$store.state.EmojiStore.keywordItemID["itemID"] = this.$store.state.EmojiStore.anotherDict  // {itemID:{match_item_5:Yes}}
            this.$store.commit('EmojiStore/setVendorMatch', this.$store.state.EmojiStore.keywordItemID)
        },
        setIssues(event) {
            var parse = event.target.value.split("-", 3)
            var iteration_num = +parse[2]
            this.$store.state.EmojiStore.anotherDict["issues_item_" + parse[1]] = this.checkedNames[iteration_num].value // {issues_item_5:["Fabric Quality"]}
            this.$store.state.EmojiStore.keywordItemID["itemID"] = this.$store.state.EmojiStore.anotherDict  // {itemID:{match_item_5:Yes}}
            this.$store.commit('EmojiStore/setVendorIssues', this.$store.state.EmojiStore.keywordItemID)
        },
    },
    mounted: function () {
        for (let i = 0; i < this.details.length; i++) {
            this.str1 = this.details[i].OrderNum
            this.itemsYesNo[this.str1] = ''
            this.YesNoList.push('');
            this.$store.commit('EmojiStore/addArrays', [])
            this.id = this.details[i].ID
            this.checkedNames.push({ key: this.details[i].id, value: [] })
        }

        for (let j = 0; j < this.details.length; j++) {
            if ("itemID" in (this.$store.getters['EmojiStore/getJsonData'])) {

                let tempDiction = (this.$store.getters['EmojiStore/getJsonData'])["itemID"]
                let tempKeyword1 = "match_item_" + this.details[j].id
                let tempKeyword2 = "issues_item_" + this.details[j].id
                if (tempKeyword1 in tempDiction) {

                    this.YesNoList[j] = tempDiction[tempKeyword1] + "-" + this.details[j].id
                }
                if (tempKeyword2 in tempDiction) {

                    this.checkedNames[j].value = tempDiction[tempKeyword2]

                }
            }
        }
    },
})




</script>