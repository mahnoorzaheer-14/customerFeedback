<template>
    <div>
        <ul class=" flex flex-wrap">
            {{ "IN HERE" }}
            <li v-for="item in options.length">
                <input type="checkbox" :id="item" :value="item" v-model="checkedNames[items - 1].value"
                    class="peer hidden" :disabled="deactiveButtons(selected, options) && notChoosen(item, selected)">
                <label :for="item"
                    class="flex p-5 bg-white border border-gray-300 rounded-lg cursor-pointer focus:outline-none hover:bg-gray-50 peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent">
                    <div class="text-lg font-semibold text-[13px]">{{ options[item - 1] }}</div>
                </label>
            </li>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue'


export default Vue.extend({
    name: "CheckboxOptions",
    data() {
        return {
            vals: [1, 2, 3, 4, 5, 6, 7, 8],
            options: ['Fabric Quality', 'Insufficient Fabric', 'Stitching Quality', 'Color Difference', 'Damaged Product', 'Different to picture', 'Size Chart'],
            selected: [],
            checkedNames: [],
            checked: String,
            incomingDeets: this.deets,
            emptyArray: [],
            id: Number
        }
    },
    props: {
        eyeD: Number,
        deets: Array
    },

    computed: {
        checkOptions() {
            return this.$store.state.checkOptions
        }
    },

    // setting exisiting data coming from DB
    mounted: function () {
        for (let i = 0; i < this.incomingDeets.length; i++) {
            this.id = this.incomingDeets[i].ID
            this.checkedNames.push({ id: [] });
        }
    },

    methods: {
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
    }
})

</script>
