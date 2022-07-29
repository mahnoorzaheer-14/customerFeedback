<template>
    <div>
        <div class="">
            <div>Checked names: {{ selected }}</div>


            <!-- 
            <div v-for="item in options.length">
                <input type="checkbox" :id="item" :value="item" v-model="checkedNames" class="">
                <label :for="item"
                    class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-lg border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">

                    <div class="block">
                        <div class="w-full text-lg font-semibold">{{ options[item - 1] }}</div>
                    </div>
                </label>
            </div> -->



            <ul class=" grid grid-rows-2 grid-flow-col gap-4">
                <li v-for="item in options.length">
                    <input type="checkbox" :id="item" :value="item" v-model="selected"
                        :disabled="deactiveButtons(selected, options) && notChoosen(item, selected)">
                    <label :for="item"
                        class="inline-flex justify-between items-center p-5 w-full text-gray-500 bg-white rounded-full border-2 border-gray-200 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <div class="block">
                            <div class="w-full text-lg font-semibold">{{ options[item - 1] }}</div>

                        </div>
                    </label>
                </li>
                {{ eyeD }}
            </ul>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'


export default Vue.extend({
    name: "CheckboxOptions",
    data() {
        return {
            vals: [1, 2, 3, 4, 5, 6, 7, 8],
            options: ['Fabric Quality', 'Insufficient Fabric', 'Stitching Quality', 'Insufficient Merchandise', 'Color Difference', 'Damaged Product', 'Different to picture', 'Size Chart'],
            selected: [],
            checkedNames: []
        }
    },
    props: {
        eyeD: Number
    },
    methods: {
        deactiveButtons(choosen, ind) {
            if (choosen.length > 2 && choosen.indexOf(ind) === -1) {
                return true
            }
            return false
        },

        notChoosen(elem, inputList) {
            console.log("ELEMENT:", elem, "LIST", inputList)
            if (inputList.includes(elem) == false) {
                return true
            }
            return false
        }
    }
})

</script>
<style>
</style>