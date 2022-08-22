<template>
  <div>

    <div v-if="showError">
      <FormNotPresent />
    </div>

    <div v-if="alreadySubmitError">
      <FormAlreadySubmitted />
    </div>

    <div v-if="internalError">
      <InternalError />
    </div>


    <div v-if="!orderDeets.length && !showError && !internalError && !alreadySubmitError">
      <Loader />
    </div>


    <div v-else-if="orderDeets.length && !isSubmit" class="bg-cover bg-[#F4F4FA] pb-20">
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
              <svg v-if="popup" role="status" class="inline -mt-0.5 mr-1 -ml-6 w-4 h-4 text-white animate-spin"
                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB" />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor" />
              </svg>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="transition delay-[5000ms]" v-if="(isSubmit)">
      <FormSubmitted />
    </div>

  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue';
import HeaderSection from "~/components/HeaderSection.vue";
import CardTop from '~/components/CardTop.vue';
import axios from "axios";
import questions from '~/static/questions.json';
import EmotionsRadio from '~/components/EmotionsRadio.vue';
import CheckboxOptions from '~/components/CheckboxOptions.vue';
import ConditionalCards from '~/components/ConditionalCards.vue';


import FormNotPresent from '~/components/FormNotPresent.vue';
import FormAlreadySubmitted from '~/components/FormAlreadySubmitted.vue';
import FormSubmitted from '~/components/FormSubmitted.vue';
import InternalError from '~/components/InternalError.vue';
import Loader from '../components/Loader.vue';


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
      myDiction: this.$store.getters['EmojiStore/getDictionary'],
      rating: String,
      questionTag: ["website_experience", "delivery_experience", "customer_service"],
      options: [['Can not find the product', 'Reward points not working', 'Filters not functioning'], ["Late delievery", "Tracking issues", "Incorrect order", "Packaging", "Delievery on wrong address", "Incomplete order", "Courier service"], ["No Response", "Delayed Response", "Return / Refund Delay", "Behaviour", "Tracking number not working", "Customer service not reachable"]],
      questions: ["How was your website experience?", "How was your delivery experience?", "How helpful was LAAM's Customer service in receiving your order?"],
      incomingRating: 0,
      isLoading: false,
      showError: false,
      internalError: false,
      alreadySubmitError: false,
      popup: false,
      isSubmit: false
    }
  },
  head() {
    return {
      title: "LAAM feedback"
    };
  },
  components: {
    Navbar, HeaderSection, CardTop, EmotionsRadio, CheckboxOptions, ConditionalCards, FormNotPresent, FormAlreadySubmitted,
    FormSubmitted, InternalError,
    Loader
  },

  async mounted() {
    try {

      let dynamic_attr = this.$nuxt.$route.path
      let catch_hash = dynamic_attr.slice(1)
      this.$store.commit('EmojiStore/setHash', catch_hash)

      let res = await axios.get(`${process.env.baseUrl}/check-hash/`, { params: { 'hash': catch_hash } })
      let initData = res.data
      let exisitingUserResponse = initData.pop()

      let order_count_details = initData.pop()
      this.$store.commit('EmojiStore/setOrderCount', order_count_details)

      this.orderDeets = initData
      this.$store.commit('EmojiStore/setExisitingData', exisitingUserResponse)

      this.isLoading = true

    } catch (error) {

      console.log(error)
      if (error.response.status === 404) {
        this.showError = true

      }
      if (error.response.status === 422) {
        this.alreadySubmitError = true

      }
      if (error.response.status === 500) {
        this.internalError = true

      }

    }
  },

  methods: {
    async submitForm() {
      try {
        let res = await axios.post(`${process.env.baseUrl}/submit-feedback/${this.$store.state.EmojiStore.url_hash}`, (this.$store.state.EmojiStore.url_hash))
        this.popup = true
        if (res.data.status_code == 200) {
          setTimeout(() => {
            this.isSubmit = true
          }, 1000);
        }
        if (res.data.status_code == 500) {
          this.internalError = true
        }
      }
      catch (error) {
        console.log("Error encountered", error);
        if (res.data.status_code == 500) {
          this.internalError = true
        }
      }
    },

    getRating(value) {
      this.incomingRating = value
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>