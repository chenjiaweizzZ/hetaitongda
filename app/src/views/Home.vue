<template>
    <div class="home-wrapper">
        <content-A/>
        <!-- <content-B/> -->
        <!-- <content-c/> -->
        <content-special/>
        <conten-diff-a/>
        <contact/>
    </div>
</template>
  
<script>
import contentA from './components/contentA.vue';
// import contentB from './components/contentB.vue';
// import contentC from './components/contentC.vue';
import contenDiffA from './components/contenDiffA.vue';
import contentSpecial from './components/contentSpecial.vue';
import contact from './components/contact.vue';
export default {
    name: 'Home',
    components: { 
        contentA,
        contenDiffA,
        contentSpecial,
        contact
        // contentB,
        // contentC
     }, 
    data() {
        return {
        }
    }
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
