<template>
  <div class="container pt-4" id="animation-card">
    <h2 class="my-4">{{$t('InfoCards.AnimationCard.Title')}}</h2>

    <div class="animation-gallery row">
      <div class="card col-12 my-2 py-1">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page">{{$t('InfoCards.AnimationCard.NavMessage')}}</a>
          </li>
        </ul>  
        <video @mouseover="playOnHover($refs.beachVid)" @mouseleave="pauseOnLeave($refs.beachVid)" ref="beachVid">
          <source :src="beachWavesVideo" type="video/mp4">
        </video>
        <div class="card-body">
          <h5 class="card-title">Beach Waves</h5>
          <p class="card-text"><a href="https://codepen.io/kojji/pen/QWOJJGQ" target="_blank" class="link-info">[codepen]</a> - {{$t('InfoCards.AnimationCard.TextOne')}}</p>
        </div>
        
      </div>
      <div class="card col-12 my-2 py-1">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page">{{$t('InfoCards.AnimationCard.NavMessage')}}</a>
          </li>
        </ul>
        <video @mouseover="playOnHover($refs.cityLightsVid)" @mouseleave="pauseOnLeave($refs.cityLightsVid)" ref="cityLightsVid">
          <source :src="cityLightsVideo" type="video/mp4">
        </video>
        <div class="card-body">
          <h5 class="card-title">City lights</h5>
          <p class="card-text"><a href="https://codepen.io/kojji/pen/zYPyPJV" target="_blank" class="link-info">[codepen]</a> - {{$t('InfoCards.AnimationCard.TextTwo')}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimationCard',
  data() {
    return {
      beachWavesVideo: require("@/assets/videos/shortVer.mp4"),
      cityLightsVideo: require("@/assets/videos/city_lights.mp4")
    }
  },
  methods: {
    playOnHover(element) {
      element.play()
    },
    pauseOnLeave(element) {
      element.pause()
    }
  }
}
</script>

<style scoped>
</style>
