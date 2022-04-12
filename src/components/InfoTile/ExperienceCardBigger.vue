<template>
  <div class="container pt-4">
    <h2 class="my-4">{{$t('InfoCards.Experience.PageTitle')}}</h2>
		<div class="row">
			<div id="experience-card-list" class="list-group col-4">
				<h4 class="mt-3">{{$t('InfoCards.Experience.SectionOne')}}</h4>
				<a class="list-group-item list-group-item-action" href="#list-item-12">{{$t('InfoCards.Experience.TitleTwelveth')}}</a>
				<a class="list-group-item list-group-item-action" href="#list-item-1">{{$t('InfoCards.Experience.TitleFirst')}}</a>
				<a class="list-group-item list-group-item-action" href="#list-item-2">{{$t('InfoCards.Experience.TitleSecond')}}</a>
				<a class="list-group-item list-group-item-action" href="#list-item-3">{{$t('InfoCards.Experience.TitleThird')}}</a>
				<h4 class="mt-3">{{$t('InfoCards.Experience.SectionTwo')}}</h4>
				<a class="list-group-item list-group-item-action" href="#list-item-4">{{$t('InfoCards.Experience.TitleFourth')}}</a>
				<a class="list-group-item list-group-item-action" href="#list-item-5">{{$t('InfoCards.Experience.TitleFifth')}}</a>
				<a class="list-group-item list-group-item-action" href="#list-item-6">{{$t('InfoCards.Experience.TitleSixth')}}</a>
				<a class="list-group-item list-group-item-action" href="#list-item-7">{{$t('InfoCards.Experience.TitleSeventh')}}</a>
				<a class="list-group-item list-group-item-action" href="#list-item-8">{{$t('InfoCards.Experience.TitleEigth')}}</a>
				<a class="list-group-item list-group-item-action" href="#list-item-9">{{$t('InfoCards.Experience.TitleNineth')}}</a>
				<h4 class="mt-3">{{$t('InfoCards.Experience.SectionThree')}}</h4>
				<a class="list-group-item list-group-item-action" href="#list-item-10">{{$t('InfoCards.Experience.TitleTenth')}}</a>
				<a class="list-group-item list-group-item-action" href="#list-item-11">{{$t('InfoCards.Experience.TitleEleventh')}}</a>

			</div>
			<div data-spy="scroll" data-target="#experience-card-list" data-offset="20" class="scrollspy-example col-8">
				<h4>{{$t('InfoCards.Experience.SectionOne')}}</h4>
				<h5 id="list-item-12">{{$t('InfoCards.Experience.TitleTwelveth')}}</h5>
				<p class="content-item" >{{$t('InfoCards.Experience.TextTwelveth')}}</p>
				<h5 id="list-item-1">{{$t('InfoCards.Experience.TitleFirst')}}</h5>
				<p class="content-item" >{{$t('InfoCards.Experience.TextFirst')}}</p>
				<h5 id="list-item-2">{{$t('InfoCards.Experience.TitleSecond')}}</h5>
				<p class="content-item">{{$t('InfoCards.Experience.TextSecond')}}</p>
				<h5 id="list-item-3">{{$t('InfoCards.Experience.TitleThird')}}</h5>
				<p class="content-item">{{$t('InfoCards.Experience.TextThird')}}</p>
				<h4>{{$t('InfoCards.Experience.SectionTwo')}}</h4>
				<h5 id="list-item-4">{{$t('InfoCards.Experience.TitleFourth')}}</h5>
				<p class="content-item">{{$t('InfoCards.Experience.TextFourth')}}</p>
				<h5 id="list-item-5">{{$t('InfoCards.Experience.TitleFifth')}}</h5>
				<p class="content-item">{{$t('InfoCards.Experience.TextFifth')}}</p>
				<h5 id="list-item-6">{{$t('InfoCards.Experience.TitleSixth')}}</h5>
				<p class="content-item">{{$t('InfoCards.Experience.TextSixth')}}</p>
				<h5 id="list-item-7">{{$t('InfoCards.Experience.TitleSeventh')}}</h5>
				<p class="content-item">{{$t('InfoCards.Experience.TextSeventh')}}</p>
				<h5 id="list-item-8">{{$t('InfoCards.Experience.TitleEigth')}}</h5>
				<p class="content-item">{{$t('InfoCards.Experience.TextEigth')}}</p>
				<h5 id="list-item-9">{{$t('InfoCards.Experience.TitleNineth')}}</h5>
				<p class="content-item">{{$t('InfoCards.Experience.TextNineth')}}</p>
				<h4>{{$t('InfoCards.Experience.SectionThree')}}</h4>
				<h5 id="list-item-10">{{$t('InfoCards.Experience.TitleTenth')}}</h5>
				<p class="content-item">{{$t('InfoCards.Experience.TextTenth')}}</p>
				<h5 id="list-item-11">{{$t('InfoCards.Experience.TitleEleventh')}}</h5>
				<p class="content-item">{{$t('InfoCards.Experience.TextEleventh')}}</p>
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

.list-group-item{
	text-align: left;
}

#experience-accordion{
  margin-bottom: var(--bottom-margin);
}

.content-item{
	text-align: justify;
  text-justify: inter-word;
}
</style>
