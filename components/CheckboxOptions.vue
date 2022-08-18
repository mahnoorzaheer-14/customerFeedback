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
            console.log("Counter from Store for checkOptions:", this.$store.state.checkOptions)
            return this.$store.state.checkOptions
        }
    },

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
.container {
    max-width: 640px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 13px;
}

ul.ks-cboxtags {
    list-style: none;
    padding: 20px;
}

ul.ks-cboxtags li {
    display: inline;
}

ul.ks-cboxtags li label {
    display: inline-block;
    background-color: rgba(255, 255, 255, .9);
    border: 2px solid rgba(139, 139, 139, .3);
    color: #adadad;
    border-radius: 25px;
    white-space: nowrap;
    margin: 3px 0px;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    transition: all .2s;
}

ul.ks-cboxtags li label {
    padding: 8px 12px;
    cursor: pointer;
}

ul.ks-cboxtags li label::before {
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    font-size: 12px;
    padding: 2px 6px 2px 2px;
    content: "\f067";
    transition: transform .3s ease-in-out;
}

ul.ks-cboxtags li input[type="checkbox"]:checked+label::before {
    content: "\f00c";
    transform: rotate(-360deg);
    transition: transform .3s ease-in-out;
}

ul.ks-cboxtags li input[type="checkbox"]:checked+label {
    border: 2px solid #1bdbf8;
    background-color: #12bbd4;
    color: #fff;
    transition: all .2s;
}

ul.ks-cboxtags li input[type="checkbox"] {
    display: absolute;
}

ul.ks-cboxtags li input[type="checkbox"] {
    position: absolute;
    opacity: 0;
}

ul.ks-cboxtags li input[type="checkbox"]:focus+label {
    border: 2px solid #e9a1ff;
}
</style>