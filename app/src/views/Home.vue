<template>
    <div class="home-wrapper">
        <content-A/>
        <!-- <content-B/>
        <content-c/> -->
        <conten-diff-a/>
        <content-special/>
    </div>
</template>
  
<script>
import contentA from './components/contentA.vue';
// import contentB from './components/contentB.vue';
// import contentC from './components/contentC.vue';
import contenDiffA from './components/contenDiffA.vue';
import contentSpecial from './components/contentSpecial.vue';
export default {
    name: 'Home',
    components: { 
        contentA,
        contenDiffA,
        contentSpecial
        // contentB,
        // contentC
     }, 
    data() {
        return {
        }
    }
}
</script>
