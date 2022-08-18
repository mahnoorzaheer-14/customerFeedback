<template>
    <div>
        <div class="flex flex-col items-center mt-10">
            <div class=" r-text-size font-inter font-semibold text-center">We would love your
                feedback</div>
            <p class="tag-text -my-1 text-[#666666] text-center">This feedback is for {{
                    $store.state.EmojiStore.order_count["shipped_items_num"]
            }} out of
                {{ $store.state.EmojiStore.order_count["order_items_num"] }} items
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

<style>
.r-text-size {
    font-size: 35px;
}

.tag-text {
    font-size: 23px;
}


@media (max-width: 640px) {
    .r-text-size {
        font-size: 20px;
    }

    .tag-text {
        font-size: 14px;
    }
}
</style>