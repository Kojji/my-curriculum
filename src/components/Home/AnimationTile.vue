<template>
  <div ref="animation" class="animation-tile container mb-4" :style="'height: ' + animationHeight + 'px'">
    <div class="row">
      <div v-if="windowWidth > 991.98" class="col">
        <div class="info-grid">
          <div class="background-image"><img alt="text-background" class="text-background" src="https://drive.google.com/uc?export=view&id=1OPsCZK9Zpbkfc3U0KY8Fzx0HyhH2jbrS" /></div>
          <div class="text-content row">
            <div class="col-9 offset-2">
              <div class="main-text-slot">
                <p class="role-text text-size-1">Fernando Koji Yamashiro</p>
                <p class="role-text text-size-2">{{$t('HomeBanner.Profession')}}</p>
              </div>
              <p class="py-3" style="font-weight: bold;">{{$t('HomeBanner.Text')}}</p>
              <button type="button" class="btn color-button">{{$t('HomeBanner.CallToAction')}}</button>
            </div>
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
  props: {
    windowWidth: Number
  },
  data() {
    return {
      animationHeight: 0
    }
  },
  components: {
    Animation
  },
  computed: {
  },
  methods: {
    handleResize () {
      if (this.$refs.animation) {
        this.animationHeight = this.$refs.animation.clientWidth > 575.98 ? this.$refs.animation.clientWidth/2 : this.$refs.animation.clientWidth
      }
    }
  },
  mounted() {
    this.animationHeight = this.$refs.animation.clientWidth > 575.98 ? this.$refs.animation.clientWidth/2 : this.$refs.animation.clientWidth
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
    font-size: 1.5rem;
  }

  .text-size-2{
    font-size: 1.25rem;
  }
}

@media (min-width: 992px) {
  .text-size-1{
    font-size: 2rem;
  }

  .text-size-2{
    font-size: 1.5rem;
  }
}



.info-grid{
  display: grid;
  align-items: center;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
  height: 100%;
}

.background-image{
  grid-row-start: 1;
  grid-column-start: 1;
}

.text-background{
  background-color: var(--opposite-color);
  height: 70%;
  width: 80%;
  margin-left: 10%;
}

.text-content{
  grid-row-start: 1;
  grid-column-start: 1;
  /* align-self: center; */
  text-align: justify;
  text-justify: inter-word;
}

.color-button{
  background-color: var(--primary-color);
  color: white;
}

.role-text{
  /* font-family: 'Georgia', Georgia, 'Times New Roman', Times, serif; */
  font-family: 'Redressed', cursive;
  font-weight: bold;
  color: var(--accent-color);
  margin: 0;
}

</style>
