<template>
  <div class="container pt-4" id="personal-card">
    <h2>{{$t('InfoCards.Personal.PageTitle')}}</h2>
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
@media (max-width: 767.98px) {
  .photo-slot{
    width: 22%;
  }
}
@media (min-width: 768px) and (max-width: 991.98px){
  .photo-slot{
    width: 17%;
  }
}
@media (min-width: 992px) {
  .photo-slot{
    width: 12%;
  }
}

.about-me-text p{
  text-align: justify;
  text-justify: inter-word;
}

.photo-slot{
  border-radius: 50%;
  background: red;
}

#personal-card{
  margin-bottom: var(--bottom-margin);
}
</style>
