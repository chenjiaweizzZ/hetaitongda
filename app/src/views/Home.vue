<template>
    <div class="home-wrapper">
        <content-swiper />
        <content-A />
        <!-- <content-B/> -->
        <!-- <content-c/> -->
        <content-special />
        <conten-diff-a />
        <!-- <contact/> -->
        <content-AA />
        <c-footer></c-footer>
    </div>
</template>
  
<script>
import contentA from './components/contentA.vue';
// import contentB from './components/contentB.vue';
// import contentC from './components/contentC.vue';
import contenDiffA from './components/contenDiffA.vue';
import contentSpecial from './components/contentSpecial.vue';
import ContentAA from './components/contentAA.vue';
import cFooter from '@/components/cFooter.vue';
import contentSwiper from './components/contentSwiper.vue';
// import contact from './components/contact.vue';
// import request from '@/request'

export default {
    name: 'HomeE',
    components: {
        contentA,
        contenDiffA,
        contentSpecial,
        ContentAA,
        cFooter,
        contentSwiper,
        // contact
        // contentB,
        // contentC
    },
    data() {
        return {
        }
    },
    
}
</script>

<style scoped>
.home-wrapper {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow-y: scroll;
}
</style>
