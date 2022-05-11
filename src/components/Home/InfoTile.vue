<template>
  <div>
    <div class="container">
      <!-- <div class="glass-window"> -->
      <div class="row">
        <!-- <div class="justify-content-center horizontal-menu"> -->
          <div :class="horizontalMenuState == 'Personal'? 'col item selected' : 'col item'" id="Personal" @click="horizontalMenuState = 'Personal'">
            <a>{{$t('HorizontalMenu.PersonalItem')}}</a>
          </div>
          <div :class="horizontalMenuState == 'Experience'? 'col item selected' : 'col item'" id="Experience" @click="horizontalMenuState = 'Experience'">
            <a>{{$t('HorizontalMenu.ExperienceItem')}}</a>
          </div>
          <div :class="horizontalMenuState == 'Skill'? 'col item selected' : 'col item'" id="Skills" @click="horizontalMenuState = 'Skill'">
            <a>{{$t('HorizontalMenu.SkillItem')}}</a>
          </div>
          <div :class="horizontalMenuState == 'Education'? 'col item selected' : 'col item'" id="Education" @click="horizontalMenuState = 'Education'">
            <a>{{$t('HorizontalMenu.EducationItem')}}</a>
          </div>
          <div :class="horizontalMenuState == 'Animation'? 'col item selected' : 'col item'" id="Animation" @click="horizontalMenuState = 'Animation'">
            <a>{{$t('HorizontalMenu.AnimationItem')}}</a>
          </div>
        <!-- </div> -->
      </div>
    </div>
    <div class="information">
      <EducationCardSmaller v-if="horizontalMenuState == 'Education' && windowWidth < 992" />
      <EducationCardBigger v-if="horizontalMenuState == 'Education' && windowWidth > 991.98" />
      <ExperienceCardSmaller v-if="horizontalMenuState == 'Experience' && windowWidth < 992" />
      <ExperienceCardBigger v-if="horizontalMenuState == 'Experience' && windowWidth > 991.98" />
      <PersonalCard v-if="horizontalMenuState == 'Personal'" />
      <SkillCard v-if="horizontalMenuState == 'Skill'" />
      <AnimationCard v-if="horizontalMenuState == 'Animation'" />
    </div>
  </div>
</template>

<script>
import EducationCardBigger from '@/components/InfoTile/EducationCardBigger.vue'
import EducationCardSmaller from '@/components/InfoTile/EducationCardSmaller.vue'
import ExperienceCardSmaller from '@/components/InfoTile/ExperienceCardSmaller.vue'
import ExperienceCardBigger from '@/components/InfoTile/ExperienceCardBigger.vue'
import PersonalCard from '@/components/InfoTile/PersonalCard.vue'
import SkillCard from '@/components/InfoTile/SkillCard.vue'
import AnimationCard from '@/components/InfoTile/AnimationCard.vue'
export default {
  name: 'InfoTile',
  components: {
    AnimationCard,
    EducationCardSmaller,
    EducationCardBigger,
    ExperienceCardSmaller,
    ExperienceCardBigger,
    PersonalCard,
    SkillCard
  },
  props: {
    windowWidth: Number
  },
  data() {
    return{
      horizontalMenuState: "Personal",
    }
  },
  mounted() {
    this.horizontalMenuState = "Personal"
  },
}
</script>

<style scoped>

@media (max-width: 575.98px) {
  .item a{
    font-size: 11px;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .item a{
    font-size: 13px;
  }
}

/* @media (min-width: 768px) and (max-width: 991.98px) { 
  .link{font-size: 20px;}
} */

.glass-window{
  width:100px;
  margin:auto;
  background-color:red;
  overflow:hidden;
  border-radius: 10%;
}

.horizontal-menu{
  margin-bottom: 5px;
}

.item{
  transition: all .3s;
  padding: 15px 0;
  border-style: solid;
  cursor: pointer;
  border-width: 1px;
}

.item a{
  font-weight: bold;
}

.item:hover{
  /* padding: 20px 0; */
  background-color: var(--light-color);
  border-color: var(--accent-color);
  color: var(--accent-color) !important;
}

.information{
  min-height: 30vh;
}

.selected{
  padding: 15px 0;
  background-color: var(--accent-color);
  border-color: var(--light-color);
  color: var(--light-color);
  /* cursor: not-allowed; */
}

</style>
