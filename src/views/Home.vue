<template>
  <div class="home">
    <div id="navBar" /> 
    <AnimationTile />
    <InfoTile />
    <div id="footer" />
  </div>
</template>

<script>
import AnimationTile from '@/components/AnimationTile.vue'
import InfoTile from '@/components/InfoTile.vue'

export default {
  name: 'Home',
  components: {
    AnimationTile,
    InfoTile
  }
}
</script>
