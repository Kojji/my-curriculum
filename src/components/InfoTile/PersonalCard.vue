<template>
  <div class="container pt-4" id="personal-card">
    <h2 class="my-4">{{$t('InfoCards.Personal.PageTitle')}}</h2>
    <img :src="photo" class="photo-slot mb-3" alt="...">
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
      photo: require("@/assets/photo.jpg")
    }
  }
}
</script>

<style scoped>
@media (max-width: 575.98px) {
  .photo-slot{
    width: 22%;
  }
  .about-me-text p{
    font-size: 14px;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .photo-slot{
    width: 22%;
  }
  .about-me-text p{
    font-size: 16px;
  }
}
@media (min-width: 768px) and (max-width: 991.98px){
  .photo-slot{
    width: 17%;
  }
  .about-me-text p{
    font-size: 18px;
  }
}
@media (min-width: 992px) {
  .photo-slot{
    width: 12%;
  }
  .about-me-text p{
    font-size: 18px;
  }
}

.about-me-text p{
  text-align: justify;
  text-justify: inter-word;
}

.photo-slot{
  border-radius: 50%;
}

#personal-card{
  margin-bottom: var(--bottom-margin);
}
</style>
