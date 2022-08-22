<template>
    <nav class="flex items-center justify-center py-2 bg-[#222222] shadow w-full">

        <div class="flex justify-center"></div>
        <LaamLogo class=" w-[90px] -my-1 md:w-28 lg:w-28 md:my-1 lg:my-1" />
    </nav>
</template>

<script>

import LaamLogo from "~/assets/LaamLogo.svg?inline";

export default {
    name: "Navbar",
    components: {
        LaamLogo
    }
}
</script>