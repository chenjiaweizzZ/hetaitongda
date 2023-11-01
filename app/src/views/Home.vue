<template>
    <div class="home-wrapper">
        <content-A/>
        <content-B/>
        <content-c/>
    </div>
</template>
  
<script>
import contentA from './components/contentA.vue';
import contentB from './components/contentB.vue';
import contentC from './components/contentC.vue';
export default {
    name: 'Home',
    components: { 
        contentA,
        contentB,
        contentC
     }, 
    data() {
        return {
        }
    }
}
</script>
