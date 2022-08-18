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
                        <!-- {{ checkedNames[items - 1] }} -->
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
import axios from 'axios';


export default ({
    name: "OrderCards",
    data() {
        return {
            itemsYesNo: {},
            temp: [{ key: 1, value: [] }, { key: 2, value: [] }, { key: 3, value: [] }],
            YesNoList: [],
            str1: '',
            checkedNames: [],
            selected: [],
            options: ['Fabric Quality', 'Insufficient Merchandise', 'Insufficient Fabric', 'Stitching Quality', 'Color Difference', 'Damaged Product', 'Different to picture', 'Size Chart'],



        }
    },
    props: {
        details: [],
        storeDiction: {}
    },
    // mounted: function () {
    //     console.log("In order cards, json data", (this.$store.getters['EmojiStore/getJsonData']))
    //     // if ("improve_experience" in (this.$store.getters['EmojiStore/getJsonData'])) {
    //     //     this.message = (this.$store.getters['EmojiStore/getJsonData'])["improve_experience"]
    //     // }
    // },
    methods: {
        setMatch(event) {
            console.log("vendor match", event.target.value)
            var parse = event.target.value.split("-", 2)
            this.$store.state.EmojiStore.anotherDict["match_item_" + parse[1]] = parse[0]   // {match_item_5:Yes}
            this.$store.state.EmojiStore.keywordItemID["itemID"] = this.$store.state.EmojiStore.anotherDict  // {itemID:{match_item_5:Yes}}
            // console.log("now check ", this.$store.state.EmojiStore.keywordItemID)

            this.$store.commit('EmojiStore/setVendorMatch', this.$store.state.EmojiStore.keywordItemID)

        },
        setIssues(event) {
            console.log("issues with vendor", event.target.value)
            var parse = event.target.value.split("-", 3)
            console.log("parse", parse)
            var key = "P" + parse[1] + "_issues"
            // console.log(typeof (parse[1]))
            var iteration_num = +parse[2]
            var itemIssuesDict = this.checkedNames[iteration_num]
            this.$store.state.EmojiStore.anotherDict["issues_item_" + parse[1]] = this.checkedNames[iteration_num].value // {issues_item_5:["Fabric Quality"]}
            this.$store.state.EmojiStore.keywordItemID["itemID"] = this.$store.state.EmojiStore.anotherDict  // {itemID:{match_item_5:Yes}}
            // console.log("now check in issues", this.$store.state.EmojiStore.keywordItemID)




            // var prod_id: number = +parse[1]

            // // console.log(typeof (prod_id))

            // console.log(this.checkedNames[iteration_num])

            this.$store.commit('EmojiStore/setVendorIssues', this.$store.state.EmojiStore.keywordItemID)

        },
        async sendSellerFeedback_match(event) {
        },

        async sendSellerFeedback_disappointment(id, match, satisfaction, disappointment) {

            try {
                // const response = await axios.post('http://localhost:1337/api/restaurants', this.modifiedData)
                let feedback_num = ("seller_feedback_P").concat(id)
                const obj = { meta: { feedback_num: { 'disappointment': disappointment } } }
                await axios.post('https://staging-feedback-form-7j5z7gqdsa-uc.a.run.app/test2', obj)
            } catch (error) {
                console.log("Error encountered", error);
            }

        },

        // const obj = { meta: { feedback_num : {'match': match, 'satisfaction': satisfaction, 'disappointment': disappointment} } }


        deactiveButtons(choosen, ind) {
            if (choosen.length > 2 && choosen.indexOf(ind) === -1) {
                return true
            }
            return false
        },

        notChoosen(elem, inputList) {
            if (inputList.includes(elem) == false) {
                return true
            }
            return false
        }
    },
    mounted: function () {
        for (let i = 0; i < this.details.length; i++) {
            this.str1 = this.details[i].OrderNum
            this.itemsYesNo[this.str1] = ''
            this.YesNoList.push('');
            this.$store.commit('EmojiStore/addArrays', [])
            this.id = this.details[i].ID
            console.log("details", this.details[i].id)
            this.checkedNames.push({ key: this.details[i].id, value: [] })
        }

        console.log("In order cards, json data", (this.$store.getters['EmojiStore/getJsonData']))
        for (let j = 0; j < this.details.length; j++) {
            console.log(this.details[j].id)


            if ("itemID" in (this.$store.getters['EmojiStore/getJsonData'])) {

                let tempDiction = (this.$store.getters['EmojiStore/getJsonData'])["itemID"]


                let tempKeyword1 = "match_item_" + this.details[j].id
                let tempKeyword2 = "issues_item_" + this.details[j].id

                // setting already exisiting match value
                if (tempKeyword1 in tempDiction) {

                    this.YesNoList[j] = tempDiction[tempKeyword1] + "-" + this.details[j].id
                }

                // setting already exisiting issues value []
                if (tempKeyword2 in tempDiction) {

                    this.checkedNames[j].value = tempDiction[tempKeyword2]

                }
            }
            // let keyword2 = "P" + this.details[j].id + "_issues"
            // if (keyword2 in (this.$store.getters['EmojiStore/getJsonData'])) {
            //     console.log("CHECK HERE OR NOT", this.checkedNames[j])
            //     let tempDict = {}
            //     // tempDict = this.checkedNames[j]

            //     // tempDict[this.details[j].id] = (this.$store.getters['EmojiStore/getJsonData'])[keyword2]
            //     this.checkedNames[j].value = (this.$store.getters['EmojiStore/getJsonData'])[keyword2]
            //     console.log(this.checkedNames)
            //     console.log(this.checkedNames[j].value)
            // }

        }




    },



})




</script>