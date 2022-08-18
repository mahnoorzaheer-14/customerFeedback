<template>
    <div>
        <div v-if="showModal"
            class="overflow-hidden fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
            <div class="relative w-auto ">
                <div class="bg-cover bg-white min-h-screen px-32">

                    <div class="flex flex-col justify-center items-center h-screen -mt-5">
                        <div>
                            <a href="https://laam.pk/">
                                <LaamLogo_black class="w-32" />
                            </a>
                        </div>
                        <div
                            class="text-[#333333] font-inter font-semibold text-[50px] md:text-[80px] lg:text-[80px] -mt-5">
                            Thank You
                        </div>
                        <div
                            class="text-[13px] md:text-[15px] lg:text-[15px] text-[#3333338A] -mt-3 md:-mt-6 lg:-mt-6 mb-0">
                            To shop more, visit our website
                        </div>

                        <a href="https://laam.pk/">
                            <button
                                class="bg-black text-white mt-7 md:mt-8 lg:mt-8 w-48 font-inter text-[14px] py-2 px-4"
                                type="button">
                                Laam.pk
                            </button>
                        </a>
                    </div>
                </div>


                <!--content-->
                <!-- <div
                    class="border-0 px-52 pt-6 pb-4 py-10 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div class="flex flex-col items-center justify-center border-solid border-slate-200 rounded-t">
                        <h3 class="text-3xl font-semibold">
                            Thank you
                        </h3>
                        <p class="my-4 text-slate-500 text-lg leading-relaxed">
                            Team LAAM thanks you for your valuable feedback!
                        </p>
                        
                    </div>
                </div> -->
            </div>
        </div>
        <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
</template>

<script>
import LaamLogo_black from "~/assets/LaamLogo_black.svg?inline";


export default {
    name: "Popup",
    data() {
        return {

        }
    },
    components: {
        LaamLogo_black
    },
    props: {
        showModal: Boolean
    },
    methods: {
        toggleModal: function () {
            this.showModal = !this.showModal;
        }
    }
}
</script>