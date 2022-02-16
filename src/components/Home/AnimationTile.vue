<template>
  <div ref="animation" class="animation-tile container my-4">
    <div :style="'height: ' + animationWidth/4 + 'px'"  class="strip"></div>
    <div class="strip layer-2"></div>
    <div class="strip layer-3"></div>
    <div class="strip layer-4"></div>
    <div class="strip layer-5"></div>
    <!-- <div class="strip"></div> -->
  </div>
</template>

<script>
export default {
  name: 'Animation',
  data() {
    return {
      animationWidth: 0
    }
  },
  methods: {
    handleResize () {
      if (this.$refs.animation) {
        this.animationWidth = this.$refs.animation.clientWidth
      }
    }
  },
  mounted() {
    this.animationWidth = this.$refs.animation.clientWidth
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
}
</script>

<style scoped>
@keyframes slide {
  0% {
    transform:translateX(-50%);
  }
  100% {
    transform:translateX(-10%);
  }
}

.strip {
  animation:slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, rgba(68, 197, 230, 0.5) 50%, rgba(79, 94, 114, 0) 50%);
  grid-row-start: 1;
  grid-column-start: 1;
  height: 100%;
  width: 250%;
  z-index:-1;
}

.layer-2 {
  /* animation-direction:alternate-reverse; */
  animation-duration:4s;
  background-image: linear-gradient(240deg, rgba(206, 77, 67, 0.5) 50%, rgba(79, 94, 114, 0) 50%) !important;
}

.layer-3 {
  animation-duration:4.5s;
  background-image: linear-gradient(-60deg, rgba(69, 178, 197, 0.5) 50%, rgba(79, 94, 114, 0) 50%) !important;
}

.layer-4 {
  animation-duration:2.5s;
  background-image: linear-gradient(240deg, rgba(207, 73, 185, 0.5) 50%, rgba(79, 94, 114, 0) 50%) !important;
}

.layer-5 {
  animation-duration:3.5s;
  background-image: linear-gradient(240deg, rgba(211, 209, 209, 0.3) 50%, rgba(79, 94, 114, 0) 50%) !important;
}

.animation-tile{
  height: auto;
  /* padding-bottom: 35%; */
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}


</style>
