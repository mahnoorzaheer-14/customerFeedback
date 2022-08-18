<template>
    <nav class="flex items-center justify-center py-2 bg-[#222222] shadow w-full">

        <div class="flex justify-center"></div>
        <!-- <a href="/"> -->
        <LaamLogo class=" w-[90px] -my-1 md:w-28 lg:w-28 md:my-1 lg:my-1" />
        <!-- </a> -->
        <!-- <div class="flex-1 pr-3">
            <Close class="w-12 ml-auto" />
        </div> -->

    </nav>
</template>

<script>

import Vue from 'vue';
import LaamLogo from "~/assets/LaamLogo.svg?inline";
import Close from "~/assets/Close.svg?inline";




export default Vue.extend({
    name: "Navbar",
    components: {
        LaamLogo, Close
    }
})
</script>