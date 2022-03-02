<template>
  <div ref="animation" class="animation-tile container my-4">
    <div class="main-photo-slot">
      <img :src="photo" class="photo-slot" alt="...">
      <div>
        <p class="role-text text-size-1">Fernando Koji Yamashiro</p>
        <p class="role-text text-size-2">Desenvolvedor Web Junior</p>
      </div>
    </div>
    <div :style="'height: ' + animationWidth/4 + 'px'"  class="strip"></div>
    <div class="strip strip-layer-1"></div>
    <div class="strip strip-layer-2"></div>
    <div class="strip strip-layer-3"></div>
    <div class="strip strip-layer-4"></div>
    <div class="strip strip-layer-5"></div>
    <!-- <div class="strip"></div> -->
  </div>
</template>

<script>
export default {
  name: 'Animation',
  data() {
    return {
      animationWidth: 0,
      photo: require("@/assets/logo.png")
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
@import url('https://fonts.googleapis.com/css2?family=Redressed&display=swap');

@keyframes slide {
  0% {
    transform:translateX(-50%);
  }
  100% {
    transform:translateX(-10%);
  }
}

/* @media (max-width: 511.98px) {
  .photo-slot{
    width: 20%;
  }
}
@media (min-width: 512px) and (max-width: 767.98px) {
  .photo-slot{
    width: 16%;
  }
} */
@media(max-width: 991.98px){
  .photo-slot{
    width: 16%;
  }
}
@media (min-width: 992px) {
  .photo-slot{
    width: 12%;
  }
}

.animation-tile{
  height: auto;
  /* padding-bottom: 35%; */
  display: grid;
  grid-template-columns: 1fr;
  overflow: hidden;
  align-items: center;
  background: rgba(177, 110, 223, 0.3);
}

.strip {
  animation:slide 3s ease-in-out infinite alternate;
  grid-row-start: 1;
  grid-column-start: 1;
  height: 100%;
  width: 250%;
  z-index:-1;
}

.strip-layer-1 {
  animation-duration:3s;
  background-image: linear-gradient(-60deg, rgba(57, 170, 199, 0.5) 50%, rgba(79, 94, 114, 0) 50%) !important;
}

.strip-layer-2 {
  /* animation-direction:alternate-reverse; */
  animation-duration:4s;
  background-image: linear-gradient(240deg, rgba(228, 67, 56, 0.5) 50%, rgba(79, 94, 114, 0) 50%) !important;
}

.strip-layer-3 {
  animation-duration:4.5s;
  background-image: linear-gradient(-60deg, rgba(69, 178, 197, 0.5) 50%, rgba(79, 94, 114, 0) 50%) !important;
}

.strip-layer-4 {
  animation-duration:3.5s;
  background-image: linear-gradient(240deg, rgba(207, 73, 185, 0.5) 50%, rgba(79, 94, 114, 0) 50%) !important;
}

.strip-layer-5 {
  animation-duration:2.5s;
  background-image: linear-gradient(240deg, rgba(128, 128, 128, 0.3) 50%, rgba(79, 94, 114, 0) 50%) !important;
}

.text-size-1{
  font-size: 28px;
}

.text-size-2{
  font-size: 24px;
}

.main-photo-slot{
  grid-row-start: 1;
  grid-column-start: 1;
}

.photo-slot{
  border-radius: 50%;
  background: red;
}

.role-text{
  /* font-family: 'Georgia', Georgia, 'Times New Roman', Times, serif; */
  font-family: 'Redressed', cursive;
  text-shadow: 0px 0px 3px rgb(32, 32, 32), 0 0 1em rgba(4, 100, 33, 0.8);
  font-weight: bold;
  color: white;
  margin-bottom: 0;
}

</style>
