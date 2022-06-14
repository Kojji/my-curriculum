<template>
  <div class="container pt-4">
    <h2 class="my-4">{{$t('InfoCards.Education.PageTitle')}}</h2>
    <div class="accordion" id="education-accordion">
      <h3>{{$t('InfoCards.Education.TitleFirst')}}</h3>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
            {{$t('InfoCards.Education.ItemTitleOne')}}
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#education-accordion">
          <div class="accordion-body education-text">{{$t('InfoCards.Education.ItemTextOne')}}</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
            {{$t('InfoCards.Education.ItemTitleTwo')}}
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#education-accordion">
          <div class="accordion-body education-text">{{$t('InfoCards.Education.ItemTextTwo')}}</div>
        </div>
      </div>
      
      <h3>{{$t('InfoCards.Education.TitleSecond')}}</h3>
      <div style="border-top: 0px;">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              {{$t('InfoCards.Education.ItemTitleThree')}}
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#education-accordion">
            <div class="accordion-body education-text">{{$t('InfoCards.Education.ItemTextThree')}}</div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              {{$t('InfoCards.Education.ItemTitleFour')}}
            </button>
          </h2>
          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#education-accordion">
            <div class="accordion-body education-text">{{$t('InfoCards.Education.ItemTextFour')}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationCard'
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
}

.accordion-button:not(.collapsed){
  background-color: var(--secondary-color);
  color: var(--light-color);
  font-weight: bold;
}

#education-accordion{
  margin-bottom: var(--bottom-margin);
}
</style>
