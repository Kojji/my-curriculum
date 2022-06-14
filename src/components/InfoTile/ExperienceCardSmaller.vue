<template>
  <div class="container pt-4">
    <h2 class="my-4">{{$t('InfoCards.Experience.PageTitle')}}</h2>
    <div class="accordion" id="experience-accordion">
      <h3>{{$t('InfoCards.Experience.SectionOne')}}</h3>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThirteen">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
            {{$t('InfoCards.Experience.TitleThirteenth')}}
          </button>
        </h2>
        <div id="collapseThirteen" class="accordion-collapse collapse show" aria-labelledby="headingThirteen" data-bs-parent="#experience-accordion">
          <div class="accordion-body">{{$t('InfoCards.Experience.TextThirteenth')}}</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwelve">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
            {{$t('InfoCards.Experience.TitleTwelveth')}}
          </button>
        </h2>
        <div id="collapseTwelve" class="accordion-collapse collapse" aria-labelledby="headingTwelve" data-bs-parent="#experience-accordion">
          <div class="accordion-body">{{$t('InfoCards.Experience.TextTwelveth')}}</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            {{$t('InfoCards.Experience.TitleFirst')}}
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#experience-accordion">
          <div class="accordion-body">{{$t('InfoCards.Experience.TextFirst')}}</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            {{$t('InfoCards.Experience.TitleSecond')}}
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#experience-accordion">
          <div class="accordion-body">{{$t('InfoCards.Experience.TextSecond')}}</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
            {{$t('InfoCards.Experience.TitleThird')}}
          </button>
        </h2>
        <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#experience-accordion">
          <div class="accordion-body">{{$t('InfoCards.Experience.TextThird')}}</div>
        </div>
      </div>

      <h3>{{$t('InfoCards.Experience.SectionTwo')}}</h3>
      <div style="border-top: 0px;">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              {{$t('InfoCards.Experience.TitleFourth')}}
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#experience-accordion">
            <div class="accordion-body">{{$t('InfoCards.Experience.TextFourth')}}</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
              {{$t('InfoCards.Experience.TitleFifth')}}
            </button>
          </h2>
          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#experience-accordion">
            <div class="accordion-body">{{$t('InfoCards.Experience.TextFifth')}}</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingSix">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
              {{$t('InfoCards.Experience.TitleSixth')}}
            </button>
          </h2>
          <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#experience-accordion">
            <div class="accordion-body">{{$t('InfoCards.Experience.TextSixth')}}</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingSeven">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
              {{$t('InfoCards.Experience.TitleSeventh')}}
            </button>
          </h2>
          <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#experience-accordion">
            <div class="accordion-body">{{$t('InfoCards.Experience.TextSeventh')}}</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingEight">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
              {{$t('InfoCards.Experience.TitleEigth')}}
            </button>
          </h2>
          <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#experience-accordion">
            <div class="accordion-body">{{$t('InfoCards.Experience.TextEigth')}}</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingNine">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
              {{$t('InfoCards.Experience.TitleNineth')}}
            </button>
          </h2>
          <div id="collapseNine" class="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#experience-accordion">
            <div class="accordion-body">{{$t('InfoCards.Experience.TextNineth')}}</div>
          </div>
        </div>
      </div>

      <h3>{{$t('InfoCards.Experience.SectionThree')}}</h3>
      <div style="border-top: 0px;">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTen">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
              {{$t('InfoCards.Experience.TitleTenth')}}
            </button>
          </h2>
          <div id="collapseTen" class="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#experience-accordion">
            <div class="accordion-body">{{$t('InfoCards.Experience.TextTenth')}}</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingEleven">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
              {{$t('InfoCards.Experience.TitleEleventh')}}
            </button>
          </h2>
          <div id="collapseEleven" class="accordion-collapse collapse" aria-labelledby="headingEleven" data-bs-parent="#experience-accordion">
            <div class="accordion-body">{{$t('InfoCards.Experience.TextEleventh')}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceCard'
}
</script>

<style scoped>
@media (max-width: 575.98px) {
  .accordion-body{
    font-size: 14px;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .accordion-body{
    font-size: 16px;
  }
}

@media (min-width: 768px){
  .accordion-body{
    font-size: 18px;
  }
}
.accordion-body{
  text-align: justify;
  text-justify: inter-word;
}

.accordion-button:not(.collapsed){
  background-color: var(--light-color);
  color: var(--accent-color);
  font-weight: bold;
}

#experience-accordion{
  margin-bottom: var(--bottom-margin);
}
</style>
