<template>

  <div class="card bg-white rounded-none md:rounded-2xl lg:rounded-2xl">
    <div class="card-body">
      <div class="flex flex-row pb-3">
        <p class="mb-4 text-[16px]">{{ question }}</p>
      </div>
      <div class="flex justify-center">
        <div class="flex flex-row -mt-4 space-x-6 md:space-x-[65px] lg:space-x-[65px] justify-center">

          <div class="space-y-2">
            <div v-if="!isH1" class="text-sm text-[#888888] pl-1.5 md:pl-3 lg:pl-3">Poor</div>
            <div v-if="isH1" class="text-sm text-[#222222] pl-1.5 md:pl-3 lg:pl-3">Poor</div>
            <button name="emoRate" v-on:click="A1()"
              class="bg-transparent text-gray-600 border border-transparent rounded">
              <Poor v-if="!isH1" class="icon-a md:w-14 md:h-12 lg:w-14 lg:h-12 hover:drop-shadow-md" />
              <PoorColored v-if="isH1" class="icon-b md:w-14 md:h-12 lg:w-14 lg:h-12" />
            </button>
          </div>

          <div class="space-y-2">
            <div v-if="!isH2" class="text-sm text-[#888888] md:pl-[9px] lg:pl-[9px]">Dislike</div>
            <div v-if="isH2" class="text-sm text-[#222222] md:pl-[9px] lg:pl-[9px]">Dislike</div>
            <button name="emoRate" v-on:click="A2()"
              class="bg-transparent text-gray-600 border border-transparent rounded">
              <Dislike v-if="!isH2" class="icon-a md:w-14 md:h-12 lg:w-14 lg:h-12 hover:drop-shadow-md" />
              <DislikeColored v-if="isH2" class="icon-b md:w-14 md:h-12 lg:w-14 lg:h-12" />
            </button>
          </div>

          <div class="space-y-2">
            <div v-if="!isH3" class="text-sm text-[#888888] md:pl-1.5 lg:pl-1.5">Neutral</div>
            <div v-if="isH3" class="text-sm text-[#222222] md:pl-1.5 lg:pl-1.5">Neutral</div>
            <button name="emoRate" v-on:click="A3()"
              class="bg-transparent text-gray-600 border border-transparent rounded">
              <Neutral v-if="!isH3" class="icon-a md:w-14 md:h-12 lg:w-14 lg:h-12 hover:drop-shadow-md" />
              <NeutralColored v-if="isH3" class="icon-b md:w-14 md:h-12 lg:w-14 lg:h-12" />
            </button>
          </div>

          <div class="space-y-2">
            <div v-if="!isH4" class="text-sm text-[#888888] pl-1 md:pl-3 lg:pl-3">Like</div>
            <div v-if="isH4" class="text-sm text-[#222222] pl-1 md:pl-3 lg:pl-3">Like</div>
            <button name="emoRate" v-on:click="A4()"
              class="bg-transparent text-gray-600 border border-transparent -ml-1 rounded">
              <Like v-if="!isH4" class="icon-a md:w-14 md:h-12 lg:w-14 lg:h-12 hover:drop-shadow-md" />
              <LikeColored v-if="isH4" class="icon-b md:w-14 md:h-12 lg:w-14 lg:h-12" />
            </button>
          </div>

          <div class="space-y-2">
            <div v-if="!isH5" class="text-sm text-[#888888] pl-1 md:pl-3 lg:pl-3">Love</div>
            <div v-if="isH5" class="text-sm text-[#222222] pl-1 md:pl-3 lg:pl-3">Love</div>
            <button name="emoRate" v-on:click="A5()"
              class="bg-transparent text-gray-600 border border-transparent rounded">
              <Love v-if="!isH5" class="icon-a md:w-14 md:h-12 lg:w-14 lg:h-12 hover:drop-shadow-md" />
              <LoveColored v-if="isH5" class="icon-b md:w-14 md:h-12 lg:w-14 lg:h-12" />
            </button>
          </div>
        </div>
      </div>


      <div v-if="(isH1 == true) || (isH2 == true)">
        <p class="text-[13px] font-inter text-[#888888] italic text-left">Can
          select multiple options</p>
        <ul class=" flex flex-wrap mt-2">
          <li v-for="item in checkOptions.length" class="pr-2 pb-2 md:pr-3 lg:pr-3">
            <input type="checkbox" :id="(checkOptions[item - 1]).concat(item - 1)" :value="checkOptions[item - 1]"
              v-model="selectedCheckOptions" class="peer hidden" @change="updateMyValue">
            <label :for="(checkOptions[item - 1]).concat(item - 1)"
              class="flex py-1.5 px-2.5 bg-white border border-[#D9D9D9] justify-center text-center text-[13px] text-[#666666] font-inter rounded-full cursor-pointer peer-checked:bg-black peer-checked:text-white peer-checked:border-transparent">
              {{ checkOptions[item - 1] }}
            </label>
          </li>
        </ul>
      </div>


    </div>
  </div>


</template>


<script>
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



export default {
  name: "ConditionalCards",
  data() {
    return {
      isH1: false,
      isH2: false,
      isH3: false,
      isH4: false,
      isH5: false,
      selectedCheckOptions: [],
      obj: {}
    }
  },
  components: {
    Poor, Dislike, Neutral, Like, Love, PoorColored, DislikeColored, LoveColored, LikeColored, NeutralColored
  },

  // setting exisiting DB data
  mounted: function () {

    if ((this.qTag.concat("_issues")) in (this.$store.getters['EmojiStore/getJsonData'])) {

      this.selectedCheckOptions = (this.$store.getters['EmojiStore/getJsonData'])[(this.qTag.concat("_issues"))]
    }

    if (this.qTag in (this.$store.getters['EmojiStore/getJsonData'])) {

      if ((this.$store.getters['EmojiStore/getJsonData'])[(this.qTag)] == 1) {
        this.isH1 = true

      }

      if ((this.$store.getters['EmojiStore/getJsonData'])[(this.qTag)] == 2) {
        this.isH2 = true

      }

      if ((this.$store.getters['EmojiStore/getJsonData'])[(this.qTag)] == 3) {
        this.isH3 = true

      }

      if ((this.$store.getters['EmojiStore/getJsonData'])[(this.qTag)] == 4) {
        this.isH4 = true

      }

      if ((this.$store.getters['EmojiStore/getJsonData'])[(this.qTag)] == 5) {
        this.isH5 = true

      }
    }
  },
  props: {
    question: String,
    checkOptions: Array,
    qTag: String
  },
  methods: {

    async sendCheckOptions(arr) {
      let keyword = ''
      if (arr.length != 0) {
        let temp = arr[0].split(",", 2)
        keyword = temp[1]
      }
      let finalArr = []
      for (let x = 0; x < arr.length; x++) {
        let temp = arr[x].split(",", 2)
        let val = temp[0]
        finalArr.push(val)
      }
      let obj = {}
      obj[keyword] = finalArr
    },

    updateMyValue(event) {
      this.$store.commit('EmojiStore/setExperienceIssues', [this.qTag.concat("_issues"), this.selectedCheckOptions])
    },

    A1() {
      return (
        this.isH1 = true,
        this.isH2 = false,
        this.isH3 = false,
        this.isH4 = false,
        this.isH5 = false,
        this.$store.commit('EmojiStore/setExperience', [this.qTag, 1])
      )
    },
    A2() {
      return (
        this.isH1 = false,
        this.isH2 = true,
        this.isH3 = false,
        this.isH4 = false,
        this.isH5 = false,
        this.$store.commit('EmojiStore/setExperience', [this.qTag, 2])
      )

    },
    A3() {
      return (
        this.isH1 = false,
        this.isH2 = false,
        this.isH3 = true,
        this.isH4 = false,
        this.isH5 = false,
        this.$store.commit('EmojiStore/setExperience', [this.qTag, 3])
      )

    },
    A4() {
      return (
        this.isH1 = false,
        this.isH2 = false,
        this.isH3 = false,
        this.isH4 = true,
        this.isH5 = false,
        this.$store.commit('EmojiStore/setExperience', [this.qTag, 4])
      )
    },
    A5() {
      return (
        this.isH1 = false,
        this.isH2 = false,
        this.isH3 = false,
        this.isH4 = false,
        this.isH5 = true,
        this.$store.commit('EmojiStore/setExperience', [this.qTag, 5])

      )
    }
  },
}

</script>