<template>
  <div class="container pt-4">
    <h2>{{$t('InfoCards.Experience.PageTitle')}}</h2>
		<div class="row">
			<div id="experience-card-list" class="list-group col-4">
				{{$t('InfoCards.Experience.SectionOne')}}
				<a class="list-group-item list-group-item-action" href="#list-item-1">{{$t('InfoCards.Experience.TitleFirst')}}</a>
				<a class="list-group-item list-group-item-action" href="#list-item-2">{{$t('InfoCards.Experience.TitleSecond')}}</a>
				<a class="list-group-item list-group-item-action" href="#list-item-3">{{$t('InfoCards.Experience.TitleThird')}}</a>
				{{$t('InfoCards.Experience.SectionTwo')}}
				<a class="list-group-item list-group-item-action" href="#list-item-4">{{$t('InfoCards.Experience.TitleFourth')}}</a>
				<a class="list-group-item list-group-item-action" href="#list-item-5">{{$t('InfoCards.Experience.TitleFifth')}}</a>
				<a class="list-group-item list-group-item-action" href="#list-item-6">{{$t('InfoCards.Experience.TitleSixth')}}</a>
				<a class="list-group-item list-group-item-action" href="#list-item-7">{{$t('InfoCards.Experience.TitleSeventh')}}</a>
				<a class="list-group-item list-group-item-action" href="#list-item-8">{{$t('InfoCards.Experience.TitleEigth')}}</a>
				<a class="list-group-item list-group-item-action" href="#list-item-9">{{$t('InfoCards.Experience.TitleNineth')}}</a>
				{{$t('InfoCards.Experience.SectionThree')}}
				<a class="list-group-item list-group-item-action" href="#list-item-10">{{$t('InfoCards.Experience.TitleTenth')}}</a>
				<a class="list-group-item list-group-item-action" href="#list-item-11">{{$t('InfoCards.Experience.TitleEleventh')}}</a>

			</div>
			<div data-spy="scroll" data-target="#experience-card-list" data-offset="20" class="scrollspy-example  col-8">
				{{$t('InfoCards.Experience.SectionOne')}}
				<h4 id="list-item-1">{{$t('InfoCards.Experience.TitleFirst')}}</h4>
				<p>{{$t('InfoCards.Experience.TextFirst')}}</p>
				<h4 id="list-item-2">{{$t('InfoCards.Experience.TitleSecond')}}</h4>
				<p>{{$t('InfoCards.Experience.TextSecond')}}</p>
				<h4 id="list-item-3">{{$t('InfoCards.Experience.TitleThird')}}</h4>
				<p>{{$t('InfoCards.Experience.TextThird')}}</p>
				{{$t('InfoCards.Experience.SectionTwo')}}
				<h4 id="list-item-4">{{$t('InfoCards.Experience.TitleFourth')}}</h4>
				<p>{{$t('InfoCards.Experience.TextFourth')}}</p>
				<h4 id="list-item-5">{{$t('InfoCards.Experience.TitleFifth')}}</h4>
				<p>{{$t('InfoCards.Experience.TextFifth')}}</p>
				<h4 id="list-item-6">{{$t('InfoCards.Experience.TitleSixth')}}</h4>
				<p>{{$t('InfoCards.Experience.TextSixth')}}</p>
				<h4 id="list-item-7">{{$t('InfoCards.Experience.TitleSeventh')}}</h4>
				<p>{{$t('InfoCards.Experience.TextSeventh')}}</p>
				<h4 id="list-item-8">{{$t('InfoCards.Experience.TitleEigth')}}</h4>
				<p>{{$t('InfoCards.Experience.TextEigth')}}</p>
				<h4 id="list-item-9">{{$t('InfoCards.Experience.TitleNineth')}}</h4>
				<p>{{$t('InfoCards.Experience.TextNineth')}}</p>
				{{$t('InfoCards.Experience.SectionThree')}}
				<h4 id="list-item-10">{{$t('InfoCards.Experience.TitleTenth')}}</h4>
				<p>{{$t('InfoCards.Experience.TextTenth')}}</p>
				<h4 id="list-item-11">{{$t('InfoCards.Experience.TitleEleventh')}}</h4>
				<p>{{$t('InfoCards.Experience.TextEleventh')}}</p>

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
.accordion-body{
  text-align: justify;
  text-justify: inter-word;
}

.accordion-button:not(.collapsed){
  background-color: var(--secondary-color);
  color: var(--light-color);
  font-weight: bold;
}

#experience-accordion{
  margin-bottom: var(--bottom-margin);
}
</style>
