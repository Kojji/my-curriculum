<template>
  <div class="container" id="personal-card">
    <h1>{{$t('InfoCards.Personal.TitleFirst')}}</h1>
    <img :src="photo" class="photo-slot my-3" alt="...">
    <div class="about-me-text">
      <p>
        {{$t('InfoCards.Personal.ParagraphFirst')}}
      </p>
      <p>
        {{$t('InfoCards.Personal.ParagraphSecond')}}
      </p>
      <p>
        {{$t('InfoCards.Personal.ParagraphThird')}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalCard',
  data() {
    return {
      photo: require("@/assets/logo.png")
    }
  }
}
</script>

<style scoped>
.about-me-text p{
  text-align: justify;
  text-justify: inter-word;
}

.photo-slot{
  width: 15%;
  border-radius: 50%;
  background: red;
}

#personal-card{
  margin-bottom: var(--bottom-margin);
}
</style>
