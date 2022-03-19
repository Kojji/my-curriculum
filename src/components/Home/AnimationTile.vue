<template>
  <div ref="animation" class="animation-tile container mb-4" :style="'height: ' + animationHeight + 'px'">
    <div class="row">
      <div v-if="windowWidth > 767.98" class="col">
        <div class="info-grid">
          <div class="title">
            Titulo
            <!-- <div class="main-text-slot">
              <div>
                <p class="role-text text-size-1">Fernando Koji Yamashiro</p>
                <p class="role-text text-size-2">Desenvolvedor Web Junior</p>
              </div>
            </div> -->
          </div>
          <div class="subtitle">
            Texto
          </div>
          <div class="call-to-action">
            Botão
          </div>
        </div>
      </div>
      <div class="col">
        <Animation :tileHeight="animationHeight" :windowWidth="windowWidth" />
      </div>
    </div>
  </div>
</template>

<script>
import Animation from '@/components/AnimationTile/Animation.vue'
export default {
  name: 'AnimationTile',
  data() {
    return {
      animationHeight: 0,
      windowWidth: 0
      // photo: require("@/assets/logo.png")
    }
  },
  components: {
    Animation
  },
  methods: {
    handleResize () {
      if (this.$refs.animation) {
        this.animationHeight = this.$refs.animation.clientWidth > 575.98 ? this.$refs.animation.clientWidth/2 : this.$refs.animation.clientWidth
      }
      this.windowWidth = window.innerWidth
    }
  },
  mounted() {
    this.animationHeight = this.$refs.animation.clientWidth > 575.98 ? this.$refs.animation.clientWidth/2 : this.$refs.animation.clientWidth
    this.windowWidth = window.innerWidth
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
}
</script>

<style scoped>

@media (min-width: 576px) and (max-width: 991.98px) {
  .text-size-1{
    font-size: 2rem;
  }

  .text-size-2{
    font-size: 1.5rem;
  }
}

@media (min-width: 992px) {
  .text-size-1{
    font-size: 3rem;
  }

  .text-size-2{
    font-size: 2rem;
  }
}


.info-grid{
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
}

.title{
  grid-row-start: 1;
}

.subtitle{
  grid-row-start: 2;
}

.call-to-action{
  grid-row-start: 3;
}

.role-text{
  /* font-family: 'Georgia', Georgia, 'Times New Roman', Times, serif; */
  font-family: 'Redressed', cursive;
  text-shadow: 0px 0px 3px rgb(32, 32, 32), 0 0 1em rgba(4, 100, 33, 0.8);
  font-weight: bold;
  color: white;
  margin: 0;
}

</style>
