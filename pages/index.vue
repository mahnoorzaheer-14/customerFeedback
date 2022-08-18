<template>
  <div>
    <!-- {{ isLoading }} {{ $fetchState.pending }} {{ orderDeets }} -->
    <!-- <div v-if="$fetchState.pending"> -->
    <!-- {{ showError }} -->
    <div v-if="showError == true">

      <div class="bg-cover bg-white min-h-screen">
        <div class="flex flex-col justify-center items-center h-screen -mt-5">
          <div>
            <a href="https://laam.pk/">
              <LaamLogo_black class="w-32" />
            </a>
          </div>
          <div class="text-[#333333] font-inter font-semibold text-[110px] md:text-[140px] lg:text-[140px] -mt-5">404
          </div>
          <div class="text-[15px] text-[#3333338A] -mt-6">This form does not exist</div>

          <a href="https://laam.pk/">
            <button class="bg-black text-white mt-6 md:mt-8 lg:mt-8 w-48 font-inter text-[14px] py-2 px-4"
              type="button">
              Visit Laam.pk
            </button>
          </a>
        </div>
      </div>
    </div>

    <div v-if="alreadySubmitError == true">
      <div class="bg-cover bg-white min-h-screen">
        <div class="flex flex-col justify-center items-center h-screen -mt-5">
          <div>
            <a href="https://laam.pk/">
              <LaamLogo_black class="w-32" />
            </a>
          </div>
          <div class="text-[#333333] font-inter font-semibold text-[90px] md:text-[110px] lg:text-[110px] -mt-5">OOPS
          </div>
          <div class="text-[13px] md:text-[15px] lg:text-[15px] text-[#3333338A] -mt-3 md:-mt-6 lg:-mt-6 mb-0">
            Seems like you have already submitted the form
          </div>
          <div class="text-[13px] md:text-[15px] lg:text-[15px] text-[#3333338A] ">To shop more, visit our website
          </div>

          <a href="https://laam.pk/">
            <button class="bg-black text-white mt-6 md:mt-8 lg:mt-8 w-48 font-inter text-[14px] py-2 px-4"
              type="button">
              Laam.pk
            </button>
          </a>
        </div>
      </div>
    </div>

    <div v-if="internalError == true">
      <div class="bg-cover bg-white min-h-screen">

        <div class="flex flex-col justify-center items-center h-screen -mt-5">
          <div>
            <a href="https://laam.pk/">
              <LaamLogo_black class="w-32" />
            </a>
          </div>
          <div class="text-[#333333] font-inter font-semibold text-[110px] md:text-[140px] lg:text-[140px] -mt-5">500
          </div>
          <div class="text-[13px] md:text-[15px] lg:text-[15px] text-[#3333338A] -mt-3 md:-mt-6 lg:-mt-6 mb-0">Internal
            Server Error. Try
            again after a little while!
          </div>
          <div class="text-[13px] md:text-[15px] lg:text-[15px] text-[#3333338A] ">In the meantime, visit our website
          </div>

          <a href="https://laam.pk/">
            <button class="bg-black text-white mt-7 md:mt-8 lg:mt-8 w-48 font-inter text-[14px] py-2 px-4"
              type="button">
              Laam.pk
            </button>
          </a>
        </div>
      </div>
    </div>


    <div
      v-if="(orderDeets.length == 0) && (showError == false) && (internalError == false) && (alreadySubmitError == false)">
      <!-- <div v-if="(orderDeets.length == 0)"> -->



      <div class="bg-cover bg-[#F4F4FA] min-h-screen">
        <Navbar />
        <div class="flex flex-col items-center justify-center mt-10">
          <div class="px-32 py-4 md:px-64 md:py-6 lg:px-64 lg:py-6 bg-slate-200 rounded mb-3 animate-pulse"></div>
          <div class="px-32 py-3 md:px-64 md:py-3 lg:px-64 lg:py-3 bg-slate-200 rounded animate-pulse"></div>
        </div>
        <div class="text-center mt-40 md:mt-64 lg:mt-64">
          <div role="status">
            <svg class="inline mr-2 w-14 h-14 text-gray-200 animate-spin dark:text-gray-600 fill-slate-400"
              viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor" />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill" />
            </svg>
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>

      <!-- </div> -->

    </div>


    <!-- <div v-else class=" bg-cover bg-[#F4F4FA] pb-20"> -->
    <div v-else-if="(orderDeets.length != 0) && (popup == false)" class="bg-cover bg-[#F4F4FA] pb-20">


      <Navbar />
      <HeaderSection :itemCount="itemsShipped" />

      <div class="flex flex-col justify-center items-center mt-9">
        <div class="w-full md:w-[45rem] lg:w-[49rem] space-y-8">


          <card-top :question="Q.quest" :answer="Q.ans" @rating="getRating" />
          <order-cards :details="orderDeets" :storeDiction="myDiction" />
          <div v-if="(incomingRating == 1) || (incomingRating == 2)" class="space-y-8">
            <ConditionalCards :question="questions[0]" :checkOptions="options[0]" :qTag="questionTag[0]" />
            <ConditionalCards :question="questions[1]" :checkOptions="options[1]" :qTag="questionTag[1]" />
            <ConditionalCards :question="questions[2]" :checkOptions="options[2]" :qTag="questionTag[2]" />
          </div>
          <card-bottom :question="formQuestion" />

          <div class="flex justify-center">
            <button class="bg-black text-white w-60 md:w-70 lg:w-70 font-inter text-[14px] py-2 px-4 rounded"
              type="button" @click="submitForm()">
              <!-- <button class="bg-black text-white w-60 md:w-72 lg:w-72 font-inter text-[14px] py-2 px-4 rounded"
              type="button" @click="submitForm()"> -->
              Submit
            </button>


          </div>

        </div>
      </div>
    </div>

    <div v-if="(this.$store.state.EmojiStore.modalShow) && (popup == true)">

      <div class="bg-cover bg-white min-h-screen">

        <div class="flex flex-col justify-center items-center h-screen -mt-5">
          <div>
            <a href="https://laam.pk/">
              <LaamLogo_black class="w-32" />
            </a>
          </div>
          <div
            class="text-[#333333] font-inter font-semibold text-[55px] md:text-[110px] lg:text-[110px] md:-mt-5 lg:-mt-5">
            Thank
            You
          </div>
          <div class="text-[13px] md:text-[15px] lg:text-[15px] text-[#3333338A] md:-mt-6 lg:-mt-6 mb-0">To shop
            more, visit our website
          </div>

          <a href="https://laam.pk/">
            <button class="bg-black text-white mt-7 md:mt-8 lg:mt-8 w-48 font-inter text-[14px] py-2 px-4"
              type="button">
              Laam.pk
            </button>
          </a>
        </div>
      </div>



    </div>
  </div>





</template>

<script>
import Navbar from '~/components/Navbar.vue';
import HeaderSection from "~/components/HeaderSection.vue";
import CardTop from '~/components/CardTop.vue';
import OrderDetails from '~/components/OrderDetails.vue';
import axios from "axios";
import questions from '~/static/questions.json';
import orderData from '~/static/orderData.json';
import EmotionsRadio from '~/components/EmotionsRadio.vue';
import CheckboxOptions from '~/components/CheckboxOptions.vue';
import ConditionalCards from '~/components/ConditionalCards.vue';
import Popup from '~/components/Popup.vue';


import Dislike from '../assets/Dislike.svg?inline';
// import Dislike from "~/assets/Dislike.svg?inline";
import Neutral from "~/assets/Neutral.svg?inline";
import Poor from "~/assets/Poor.svg?inline";
import Like from "~/assets/Like.svg?inline";
import Love from "~/assets/Love.svg?inline";
import DislikeColored from "~/assets/DislikeColored.svg?inline";
import PoorColored from "~/assets/PoorColored.svg?inline";
import LoveColored from "~/assets/LoveColored.svg?inline";
import LikeColored from "~/assets/LikeColored.svg?inline";
import NeutralColored from "~/assets/NeutralColored.svg";
import LaamLogo_black from "~/assets/LaamLogo_black.svg?inline";



// https://staging-feedback-form-7j5z7gqdsa-uc.a.run.app



export default {
  name: "IndexPage",
  data() {
    return {
      dataFromBE: [],
      Q: {
        quest: questions[0].Q,
        ans: questions[0].ans
      },
      itemsShipped: [3, 5],
      formQuestion: 'How can we improve your experience?',
      orderDeets: [],
      orderDeets2: Object,
      init_data: [],
      myDiction: this.$store.getters['EmojiStore/getDictionary'],
      rating: String,
      isH1: false,
      isH2: false,
      isH3: false,
      isH4: false,
      isH5: false,
      questionTag: ["website_experience", "delivery_experience", "customer_service"],
      options: [['Can not find the product', 'Reward points not working', 'Filters not functioning'], ["Late delievery", "Tracking issues", "Incorrect order", "Packaging", "Delievery on wrong address", "Incomplete order", "Courier service"], ["No Response", "Delayed Response", "Return / Refund Delay", "Behaviour", "Tracking number not working", "Customer service not reachable"]],
      selectedItems: [],
      questions: ["How was your website experience?", "How was your delivery experience?", "How helpful was LAAM's Customer service in receiving your order?"],
      incomingRating: 0,
      isLoading: false,
      showError: false,
      internalError: false,
      alreadySubmitError: false,
      popup: false
    }
  },
  async mounted() {
    try {
      let _hash = '4e76b562567b30e61ce802ed97ede548d84ae33f2d3ec26d49e8c4966dc4db93'
      console.log(this.$nuxt.$route.path)
      let dynamic_attr = this.$nuxt.$route.path
      let catch_hash = dynamic_attr.slice(1)
      console.log("catch_hash", catch_hash)
      this.$store.commit('EmojiStore/setHash', catch_hash)


      let res = await axios.post(`https://staging-feedback-form-7j5z7gqdsa-uc.a.run.app/check_hash/${catch_hash}`, catch_hash)
      console.log(this.$nuxt.$route.path)
      let response_code = res.data.status_code
      console.log(res.data)
      // if (res.status_code === 200) {
      console.log('RESPONSE:', res.data.status_code)
      console.log('RESPONSE:', res.data)

      console.log(response_code, "*****", res.data)
      let initData = res.data
      let exisitingUserResponse = initData.pop()

      let order_count_details = initData.pop()
      this.$store.commit('EmojiStore/setOrderCount', order_count_details)


      this.orderDeets = initData
      console.log("GHDJHWJDH", initData)
      this.$store.commit('EmojiStore/setExisitingData', exisitingUserResponse)


      this.isLoading = true
      // }
      // else if (res.status_code === 404) {
      //   console.log("404 response")
      // }

    } catch (error) {
      console.log("ERRROOOOOR")

      console.log(error)
      if (error.response.status === 404) {
        // console.log("losl")
        this.showError = true

      }
      if (error.response.status === 422) {
        // console.log("losl")
        this.alreadySubmitError = true

      }
      if (error.response.status === 500) {
        this.internalError = true

      }

    }
  },

  // async postHash(_hash) {
  //   console.log("INSIDE HASH")
  //   try {
  //     axios.post(`https://staging-feedback-form-7j5z7gqdsa-uc.a.run.app/check_hash/`, _hash)
  //   } catch (error) {
  //     console.log("Error encountered", error);
  //   }
  // },

  async fetch() {
    console.log("fetchhhh", this.isLoading)
    if (this.isLoading === true) {
      // console.log("")
      // console.log("inside if")
      // const initResponse = await fetch(`http://127.0.0.1:5000/formdata/`)
      // const initData = await initResponse.json()
      // console.log(initData)
      // var existingUserResponse = initData.pop()
      // console.log("last index", existingUserResponse)
      // console.log("remaining", initData)

      // this.orderDeets = initData
      // this.$store.commit('EmojiStore/setExisitingData', existingUserResponse)
    }


  },

  components: {
    Navbar,
    HeaderSection,
    CardTop,
    OrderDetails,
    EmotionsRadio,
    CheckboxOptions,
    ConditionalCards,
    Poor,
    Dislike,
    Neutral,
    Like,
    Love,
    PoorColored,
    DislikeColored,
    LoveColored,
    LikeColored,
    NeutralColored,
    LaamLogo_black,
    Popup,
  },

  methods: {
    submitForm() {
      // this.$store.commit('EmojiStore/setModal', true)

      try {
        let obj = { "status": 'SUBMITTED' }
        axios.post(`https://staging-feedback-form-7j5z7gqdsa-uc.a.run.app/submitFeedback/${this.$store.state.EmojiStore.url_hash}`, (this.$store.state.EmojiStore.url_hash))
        this.$store.commit('EmojiStore/setModal', true)
        this.popup = true
      } catch (error) {
        console.log("Error encountered", error);
        this.$store.commit('EmojiStore/setModal', false)
      }
    },

    getRating(value) {
      this.incomingRating = value
    },
    jsonData() {
      return questions
    },
    asyncData() {
      return { questions }
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



.width-css {
  width: 1000px;
}

.r-card-size {
  width: 30rem;
  border-radius: 20px;
}

.desktop {
  display: block;
}

.mobile {
  display: none;
}

@media screen and (max-width: 768px) {

  .desktop {
    display: none;
  }

  .mobile {
    display: block;
  }

}




.order-deets-right {
  position: absolute;
  bottom: 30px;
  top: 90px;
  right: 320px;

}



.order-tag span {
  display: inline;
  background-color: #F4F4F4;
  border-radius: 2px;
}

@media (max-width: 640px) {
  .r-card-size {
    width: screen;
    border-radius: 0%;
  }
}
</style>