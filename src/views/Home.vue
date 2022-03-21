<template>
  <div class="container-fluid">
    <AnimationTile :windowWidth="windowWidth"/>
    <InfoTile :windowWidth="windowWidth" />
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
  },
  data() {
    return {
      windowWidth: 0,
    }
  },
  methods: {
    handleResize () {
      this.windowWidth = window.innerWidth
    }
  },
  mounted() {
    this.windowWidth = window.innerWidth
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
}
</script>
