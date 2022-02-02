<template>
  <div class="home">
    <AnimationTile />
    <InfoTile />
  </div>
</template>

<script>
import AnimationTile from '@/components/Home/AnimationTile.vue'
import InfoTile from '@/components/Home/InfoTile.vue'

export default {
  name: 'Home',
  components: {
    AnimationTile,
    InfoTile
  }
}
</script>
