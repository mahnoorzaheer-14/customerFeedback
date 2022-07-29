<template>
  <!-- <MediaQueryProvider queries="mobile: '(max-width: 760px)"> -->
  <div>
    <div class=" bg-cover bg-[#F4F4FA] pb-56">
      <Navbar />
      <HeaderSection :itemCount="itemsShipped" />



      <div class="flex space-y-4 justify-center mt-8 grid grid-rows-1">
        <card-top :question="Q.quest" :answer="Q.ans" class="md:w-32" />
        <order-details :details="orderDeets" />
        <!-- <div class="card bg-white rounded w-[50rem] shadow-lg">
          <div class="card-body">
            <div class="mb-5">
              <p class="mb-4">How satisfied are you with the product received?</p>
              <div v-for="item in 5" class="grid grid-cols-5 lg:gap-5 md:gap-3 sm:gap-2">
                <button
                  class="bg-transparent md:h-20 sm:h-15 sm:w-5 hover:bg-gray-400 text-gray-600 hover:text-white md:py-3 md:px-4 border border-gray-400 hover:border-transparent rounded">
                  {{ item }}
                </button>
              </div>
            </div>
          </div>
        </div> -->
        <!-- <card-bottom :question="formQuestion" /> -->

        <!-- <div class="card bg-white w-96 rounded shadow-xl">
        <div class="card-body">
          <div class="mb-5">
            <p class="mb-4">How satisfied are you with the product received?</p>
            <div v-for="item in 5" class="grid grid-cols-5 lg:gap-5 md:gap-3 sm:gap-2">
              <button @click="asyncData" class="collective-highlight bg-transparent text-gray-600 rounded">
                {{ item }}
              </button>
            </div>
          </div>
        </div>
      </div> -->
      </div>
    </div>
  </div>
  <!-- </MediaQueryProvider> -->
</template>

<script lang="ts">
import Navbar from '~/components/Navbar.vue'
import HeaderSection from "~/components/HeaderSection.vue"
import CardTop from '~/components/CardTop.vue'
import OrderDetails from '~/components/OrderDetails.vue'
import axios from "axios";
import questions from '~/static/questions.json'
import orderData from '~/static/orderData.json'
import { MediaQueryProvider } from "vue-component-media-queries";



const queries = {
  mobile: '(max-width: 760px)'
};


// console.log(orderData[0].pic)


export default {
  name: "IndexPage",

  data() {
    return {
      Q: {
        quest: questions[0].Q,
        ans: questions[0].ans
      },
      itemsShipped: [3, 5],
      formQuestion: 'How can we improve your experience?',
      orderDeets: orderData,
      queries: {

      },

    }
  },

  components: {
    Navbar,
    HeaderSection,
    CardTop,
    OrderDetails,
    MediaQueryProvider,
  },

  props: {

  },

  methods: {
    jsonData(): object {
      console.log(questions)
      return questions
    },
    asyncData(): object {
      console.log(questions)

      return { questions }
    }
  }

}

</script>
<style>
.width-css {
  width: 1000px;
}
</style>