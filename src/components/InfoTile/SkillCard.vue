<template>
  <div class="container pt-4" id="animation-card">
    <h2 class="my-4">{{$t('InfoCards.Skills.Title')}}</h2>
    <hr />
    <div class="row">
			<div class="col-4 col-lg-3">
        <div class="icon-box">
          <h4 class="pt-3">{{$t('InfoCards.Skills.CardOne')}}</h4>
          <div class="row justify-content-center">
            <div :key="skill.name" v-for="skill of cardMainIcons" class="col-sm-6 col-12">
              <div class="p-3">
                <img :src="skill.iconUrl" class="rounded" alt="...">
              </div>
              <p class="icon-text">{{skill.name}}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-8 col-lg-9">
        <p class="content-text">{{$t('InfoCards.Skills.TextOne')}}</p>
        <p class="content-text">{{$t('InfoCards.Skills.TextTwo')}}</p>
        <p class="content-text">{{$t('InfoCards.Skills.TextThree')}}</p>
        <p class="content-text">{{$t('InfoCards.Skills.TextFour')}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillCard',
  data() {
    return {
      cardMainIcons: [
        {
          name: "Node.js",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          alt: "nodejs icon"
        },
        {
          name: "Vue.js",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
          alt: "vuejs icon"
        },
        {
          name: "Firebase",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
          alt: "firebase icon"
        },
        {
          name: "AWS",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
          alt: "amazon web services icon"
        },
        {
          name: "Typescript",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
          alt: "typescript icon"
        },
        // {
        //   name: "Docker",
        //   iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        //   alt: "docker icon"
        // },
      ]
    }
  }

}
</script>

<style scoped>
@media (max-width: 575.98px) {
  .content-text{
    font-size: 14px;
  }
  .icon-text{
    font-size: 14px;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .content-text{
    font-size: 16px;
  }
  .icon-text{
    font-size: 16px;
  }
}

@media (min-width: 768px){
  .content-text{
    font-size: 18px;
  }
  .icon-text{
    font-size: 18px;
  }
}

.content-text{
  text-align: justify;
}
.icon-box{
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.5rem;
}

#skill-card{
  margin-bottom: var(--bottom-margin);
}
</style>
