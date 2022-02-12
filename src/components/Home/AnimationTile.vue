<template>
  <div ref="animation" class="animation-tile container my-4">
    <div :style="'height: ' + animationWidth + 'px'"  class="strip"></div>
    <div class="strip layer-2"></div>
    <div class="strip layer-3"></div>
    <!-- <div class="strip"></div>
    <div class="strip"></div>
    <div class="strip"></div> -->
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
        this.animationWidth = this.$refs.animation.clientWidth/3
      }
    }
  },
  mounted() {
    this.animationWidth = this.$refs.animation.clientWidth/3
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
    transform:translateX(0);
  }
}

.strip {
  animation:slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, rgba(28, 185, 224, 0.50) 50%, rgba(79, 94, 114, 0) 50%);
  grid-row-start: 1;
  grid-column-start: 1;
  height: 100%;
  width: 200%;
  z-index:-1;
}

.layer-2 {
  animation-direction:alternate-reverse;
  animation-duration:5s;
  background-image: linear-gradient(60deg, rgba(202, 44, 33, 0.50) 50%, rgba(79, 94, 114, 0) 50%) !important;
}

.layer-3 {
  animation-direction:alternate-reverse;
  animation-duration:3s;
  animation-delay: 1s;
  background-image: linear-gradient(-60deg, rgba(27, 179, 206, 0.5) 50%, rgba(79, 94, 114, 0) 50%) !important;
}

.animation-tile{
  height: auto;
  /* padding-bottom: 35%; */
  /* background-color: var(--accent-color); */
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
}


</style>
