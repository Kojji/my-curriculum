<template>
  <div class="container pt-4">
    <h2 class="my-4">{{$t('InfoCards.Education.PageTitle')}}</h2>
		<hr />
		<div class="row">
			<div id="experience-card-list" class="list-group col-4">
				<div class="icon-box">
					<h4 class="mt-3">{{$t('InfoCards.Education.TitleFirst')}}</h4>
					<a class="list-group-item list-group-item-action" href="#list-item-1">{{$t('InfoCards.Education.ItemTitleOne')}}</a>
					<a class="list-group-item list-group-item-action" href="#list-item-2">{{$t('InfoCards.Education.ItemTitleTwo')}}</a>
					<h4 class="mt-3">{{$t('InfoCards.Education.TitleSecond')}}</h4>
					<a class="list-group-item list-group-item-action" href="#list-item-3">{{$t('InfoCards.Education.ItemTitleThree')}}</a>
					<a class="list-group-item list-group-item-action" href="#list-item-4">{{$t('InfoCards.Education.ItemTitleFour')}}</a>
				</div>
			</div>
			<div data-spy="scroll" data-target="#experience-card-list" data-offset="20" class="scrollspy-example col-8" id="content">
				<h4 class="mt-3 mb-2">{{$t('InfoCards.Education.TitleFirst')}}</h4>
				<h5 id="list-item-1">{{$t('InfoCards.Education.ItemTitleOne')}}</h5>
				<p class="content-item">{{$t('InfoCards.Education.ItemTextOne')}}</p>
				<h5 id="list-item-2">{{$t('InfoCards.Education.ItemTitleTwo')}}</h5>
				<p class="content-item">{{$t('InfoCards.Education.ItemTextTwo')}}</p>
				<hr />
				<h4 class="mt-3 mb-2">{{$t('InfoCards.Education.TitleSecond')}}</h4>
				<h5 id="list-item-3">{{$t('InfoCards.Education.ItemTitleThree')}}</h5>
				<p class="content-item">{{$t('InfoCards.Education.ItemTextThree')}}</p>
				<h5 id="list-item-4">{{$t('InfoCards.Education.ItemTitleFour')}}</h5>
				<p class="content-item">{{$t('InfoCards.Education.ItemTextFour')}}</p>
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
.list-group-item{
	text-align: left;
}

.content-item{
  font-size: 18px;
	text-align: justify;
}
.icon-box{
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 0.5rem;
}
</style>
