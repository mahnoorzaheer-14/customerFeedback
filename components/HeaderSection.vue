<template>
    <div>
        <div class="flex flex-col items-center">
            <div class="flex flex-row">
                <h3
                    class="font-inter text-base antialiased font-bold font-feature-default mt-10 font-inter tracking-wide text-[#222222] text-3xl">
                    We would love your
                    feedback!</h3>
            </div>
            <p class="text-[1.28rem] m-[3px] text-[#666666]">This feedback is for {{ itemCount[0] }} out of {{
                    itemCount[1]
            }} items
                in
                your
                order</p>
        </div>

    </div>

</template>

<script lang="ts">
import Vue from 'vue'


export default Vue.extend({
    name: "HeaderSection",
    components: {

    },
    props: {
        itemCount: Array
    }
})


</script>