<template>
  <div class="animation-container" >
    <div class="layer circle-background" :style="'height: ' + tileHeight/1.4 + 'px; width: ' + tileHeight/1.4 + 'px;'"></div>
    <div class="layer"><img alt="music-background" class="musical-notes musical-background" :style="'height: ' + tileHeight + 'px'" src="https://drive.google.com/uc?export=view&id=1Nt56CbxsyG-jig3ayLQdc7vFDDI_TNP2" /></div>
    <div class="layer"><img alt="octopus-head" class="head-motion" :style="'height: ' + tileHeight + 'px'" src="https://drive.google.com/uc?export=view&id=1OKcDctpCwvTGVlrvJDq582jDaJbSnBE3" /></div>
    <div class="layer"><img alt="octopus-partial-leg-4" class="tentacle-press-4" :style="'height: ' + tileHeight + 'px'" src="https://drive.google.com/uc?export=view&id=1O25Z84HJ1LpqWgk4PisVEV4fMsd8Bg1h" /></div>
    <div class="layer"><img alt="octopus-partial-leg-3" class="tentacle-press-3" :style="'height: ' + tileHeight + 'px'" src="https://drive.google.com/uc?export=view&id=1O3h_o655jfgGbu86ClrkHoOIgGymqGfR" /></div>
    <div class="layer"><img alt="octopus-partial-leg-2" class="tentacle-press-2" :style="'height: ' + tileHeight + 'px'" src="https://drive.google.com/uc?export=view&id=1O6emzQQX90cE0WrQ4u47hF-PXOb41_TI" /></div>
    <div class="layer"><img alt="octopus-partial-leg-1" class="tentacle-press-1" :style="'height: ' + tileHeight + 'px'" src="https://drive.google.com/uc?export=view&id=1O9dTrLMVRbMVnbMa_JsX0-C8iV8Uz-jq" /></div>
    <div class="layer"><img alt="octopus-hat" class="hat-motion" :style="'height: ' + tileHeight + 'px'" src="https://drive.google.com/uc?export=view&id=1OIV7xOqjsbxGpeVGVmzMAJNcBb4Tynny" /></div>
    <div class="layer"><img alt="octopus-bottom-leg-3" :style="'height: ' + tileHeight + 'px'" src="https://drive.google.com/uc?export=view&id=1NxzGRzMYkRjvQHvHImDB8QyaE57bhUeN" /></div>
    <div class="layer"><img alt="octopus-bottom-leg-2" class="tentacle-tap" :style="'height: ' + tileHeight + 'px'" src="https://drive.google.com/uc?export=view&id=1NzyhZpvEnG_s_85piwCvkU6yHJCQ320t" /></div>
    <div class="layer"><img alt="octopus-bottom-leg-1" class="" :style="'height: ' + tileHeight + 'px'" src="https://drive.google.com/uc?export=view&id=1Nw3mgB_es5cTmM1nHG3cEDAji7F5FQmi" /></div>
    <div class="layer"><img alt="octopus-keyboard" class="" :style="'height: ' + tileHeight + 'px'" src="https://drive.google.com/uc?export=view&id=1NlwuNkQQ2TmQJu4ZJQHGzo5JgAmUf7r2" /></div>
    <div class="layer"><img alt="octopus-upper-leg-4" class="tentacle-press-4" :style="'height: ' + tileHeight + 'px'" src="https://drive.google.com/uc?export=view&id=1OBSHX5NYqE8UGpDUXNhdv9WgxrEVQvr5" /></div>
    <div class="layer"><img alt="octopus-upper-leg-3" class="tentacle-press-3" :style="'height: ' + tileHeight + 'px'" src="https://drive.google.com/uc?export=view&id=1OBcOfkBgqtpSy2Zy1joNhswkU4zysQLt" /></div>
    <div class="layer"><img alt="octopus-upper-leg-2" class="tentacle-press-2" :style="'height: ' + tileHeight + 'px'" src="https://drive.google.com/uc?export=view&id=1OHBZs_Lw2mJjVKD4mVTyDlS_uXl1Tvfh" /></div>
    <div class="layer"><img alt="octopus-upper-leg-1" class="tentacle-press-1" :style="'height: ' + tileHeight + 'px'" src="https://drive.google.com/uc?export=view&id=1OHRL4EOHgYi_UVOoJwdURUYaZw1vH9Rq" /></div>
    <div class="layer"><img alt="octopus-musical-notes" class="musical-notes" :style="'height: ' + tileHeight + 'px'" src="https://drive.google.com/uc?export=view&id=1OJ686fSOP8KdXtB99vkgmknfDeqgq52b" /></div>
		<div class="main-text-slot" v-if="windowWidth < 992">
			<div>
				<p class="role-text text-size-1">Fernando Koji Yamashiro</p>
				<p class="role-text text-size-2">{{$t('HomeBanner.Profession')}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Animation',
  props: {
    tileHeight: Number,
    windowWidth: Number
  },
  data() {
    return {
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Redressed&display=swap');

@keyframes color-change {
  0% {
    background: #b2b9ed;
  }
  100% {
    background: #eff0bc;
  }
}

@keyframes foot-tap {
  0%{
    transform: translate(0.5%,-1%);
  }
  100%{
    transform: translate(0,1%);
  }
}

@keyframes hat-motion {
  0%{
    transform: scale(105%, 105%) translate(-2%,-2%);
  }
  50%{
    transform: scale(101%, 101%) translate(0,-1%);
  }
  100%{
    transform: scale(105%, 105%) translate(2%,-2%);
  }
}

@keyframes head-motion {
  0%{
    transform: scale(105%, 105%) translate(-2%,-2%);
  }
  50%{
    transform: scale(101%, 101%) translate(0%,0%);
  }
  100%{
    transform: scale(105%, 105%) translate(2%,-2%);
  }
}

@keyframes musical-notes {
  0%{
    transform: scale(105%, 105%) translate(-2%,-3%);
  }
  50%{
    transform: translate(0%,0%) scale(100%, 100%);
  }
  100%{
    transform: scale(105%, 105%) translate(2%,-3%);
  }
}

@keyframes tentacle-press-1 {
  0%{
    transform: translate(0,-3%);
  }
  12.5%{
    transform: translate(-2%,0.5%);
  }
  25%{
    transform: translate(-2%,-3%);
  }
  37.5%{
    transform: translate(-1.5%,0%);
  }
  50%{
    transform: translate(-1%,-2%);
  }
  62.5%{
    transform: translate(0%,0%);
  }
  75%{
    transform: translate(0%,-1%);
  }
  87.5%{
    transform: translate(1%,0%);
  }
  100%{
    transform: translate(0,-3%);
  }
}

@keyframes tentacle-press-2 {
  0%{
    transform: translate(1%,0%);
  }
  25%{
    transform: translate(0,-2%);
  }
  50%{
    transform: translate(-2%,0%);
  }
  75%{
    transform: translate(1%,-2%);
  }
  100%{
    transform: translate(1%,0%);
  }
}

@keyframes tentacle-press-3 {
  0%{
    transform: translate(-0.5%,0%);
  }
  16.67%{
    transform: translate(0,-1%);
  }
  33.33%{
    transform: translate(-1%,0%);
  }
  50%{
    transform: translate(1%,-2%);
  }
  66.67%{
    transform: translate(3.5%,0%);
  }
  83.33%{
    transform: translate(2%,-2.5%);
  }
  100%{
    transform: translate(-0.5%,0%);
  }
}

@keyframes tentacle-press-4 {
  0%{
    transform: translate(0,-2%);
  }
  25%{
    transform: translate(1%,0%);
  }
  50%{
    transform: translate(0%,-3%);
  }
  75%{
    transform: translate(-2%,0%);
  }
  100%{
    transform: translate(0,-2%);
  }
}
/* 
@media (max-width: 575.98px) {
  

  .layer{
    grid-row-start: 1;
    grid-column-start: 1;
  }
}

@media (min-width: 576px) and (max-width: 991.98px) {
  .animation-container{
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .layer{
    grid-row-start: 1;
    grid-column-start: 2;
  }
}

@media (min-width: 992px) {
  .layer{
    grid-row-start: 1;
    grid-column-start: 2;
  }
} */

.animation-container{
  overflow: hidden;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
}

.circle-background{
  animation: color-change 3s linear alternate infinite;
  border-radius: 50%;
  margin: auto !important; 
}

.layer{
  grid-row-start: 1;
  grid-column-start: 1;
  z-index:2;
  margin-left: 15px;
  /* align-self: flex-end;
  margin-right: 5%; */
}

.hat-motion{
  animation: hat-motion 0.6s ease-in-out infinite alternate;
}

.head-motion{
  animation: head-motion 0.6s ease-in-out infinite alternate;
}

.musical-notes{
  animation: musical-notes 0.8s ease-in-out infinite alternate;
}

.musical-background{
  animation-delay: 0.3s
}

.tentacle-press-1{
  animation: tentacle-press-1 2.4s linear infinite;
}

.tentacle-press-2{
  animation: tentacle-press-2 1.2s linear infinite;
}

.tentacle-press-3{
  animation: tentacle-press-3 1.8s linear infinite;
}

.tentacle-press-4{
  animation: tentacle-press-4 1.2s linear infinite;
}

.tentacle-tap{
  animation: foot-tap 0.3s ease-in-out infinite alternate;
}

.main-text-slot{
  grid-row-start: 1;
  grid-column-start: 1;
	align-self: flex-end;
	z-index: 2;
}

.role-text{
  /* font-family: 'Georgia', Georgia, 'Times New Roman', Times, serif; */
  font-family: 'Redressed', cursive;
  text-shadow: 0px 0px 10px rgb(255, 255, 255), 0 0 0.5em rgba(10, 119, 45, 0.9);
  font-weight: bold;
  color: var(--accent-color);
  margin: 0;
}

.text-size-1{
	font-size: 1.8rem;
}

.text-size-2{
	font-size: 1.5rem;
}

</style>