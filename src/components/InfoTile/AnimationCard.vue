<template>
  <div class="container pt-4" id="animation-card">
    <h2 class="my-4">{{$t('InfoCards.AnimationCard.Title')}}</h2>

    <div class="animation-gallery row">
      <div class="card col-12 my-2 py-1">
        <div class="card-body pb-0">
          <h5 class="card-title"><a href="https://codepen.io/kojji/pen/QWOJJGQ" target="_blank" class="link-info">Beach Waves</a></h5>
        </div>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page">{{$t('InfoCards.AnimationCard.NavMessage')}}</a>
          </li>
        </ul>  
        <video @mouseover="playOnHover($refs.beachVid)" @mouseleave="pauseOnLeave($refs.beachVid)" ref="beachVid">
          <source :src="beachWavesVideo" type="video/mp4">
        </video>
        
      </div>
      <div class="card col-12 my-2 py-1">
        <div class="card-body pb-0">
          <h5 class="card-title"><a href="https://codepen.io/kojji/pen/zYPyPJV" target="_blank" class="link-info">City lights</a></h5>
        </div>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page">{{$t('InfoCards.AnimationCard.NavMessage')}}</a>
          </li>
        </ul>
        <video @mouseover="playOnHover($refs.cityLightsVid)" @mouseleave="pauseOnLeave($refs.cityLightsVid)" ref="cityLightsVid">
          <source :src="cityLightsVideo" type="video/mp4">
        </video>
        
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
@media (max-width: 575.98px) {
  .nav-link{
    font-size: 14px;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .nav-link{
    font-size: 16px;
  }
}

@media (min-width: 768px){
  .nav-link{
    font-size: 18px;
  }
}
.link-info {
  color: black; 
}
a:link {
  text-decoration: none;
}
a:hover {
  color: lightskyblue; 
}
</style>
