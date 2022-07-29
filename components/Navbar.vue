<template>
    <nav class="relative w-screen flex items-center justify-between py-4 bg-[#222222] text-white-500 shadow-lg">
        <div class="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <a class="text-xl text-white" href="#"> LAAM
                <!-- <div justify="center" align="center" class="pt-4">
                    <LaamLogo />
                </div> -->
            </a>
        </div>
    </nav>
</template>

<script>

import LaamLogo from "./LaamLogo.vue";
import Vue from 'vue';


export default Vue.extend({
    name: "Navbar",
    components: { LaamLogo }
})
</script>