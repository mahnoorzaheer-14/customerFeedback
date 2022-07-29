<template>
    <div id="card-bottom">
        <div class="flex justify-center">
            <div class="card bg-white w-[50rem] ">
                <div class="card-body">
                    <p class="mb-2 text-lg">{{ question }}</p>
                    <textarea maxlength="1000"
                        class="border border-gray-300 focus:outline-none h-32 placeholder:text-[0.9rem] placeholder:text-[#888888] text-base px-3 py-2 rounded"
                        v-model="message" placeholder="Tell us what your think"></textarea>
                    <div class="text-sm font-inter text-[#888888] italic text-right -mb-2">Max 1000 characters
                        allowed.
                        {{
                                message.length
                        }}
                        characters
                        written.</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'


export default Vue.extend({
    name: "CardBottom",
    data() {
        return {
            message: ''
        }
    },
    props: {
        question: String
    }

})

</script>