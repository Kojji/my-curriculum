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
          <div :class="horizontalMenuState == 'Education'? 'col item selected' : 'col item'" id="Education" @click="horizontalMenuState = 'Education'">
            <a>{{$t('HorizontalMenu.AnimationItem')}}</a>
          </div>
        <!-- </div> -->
      </div>
    </div>
    <div class="information">
      <EducationCard v-if="horizontalMenuState == 'Education'" />
      <ExperienceCard v-if="horizontalMenuState == 'Experience'" />
      <PersonalCard v-if="horizontalMenuState == 'Personal'" />
      <SkillCard v-if="horizontalMenuState == 'Skill'" />
    </div>
  </div>
</template>

<script>
import EducationCard from '@/components/InfoTile/EducationCard.vue'
import ExperienceCard from '@/components/InfoTile/ExperienceCard.vue'
import PersonalCard from '@/components/InfoTile/PersonalCard.vue'
import SkillCard from '@/components/InfoTile/SkillCard.vue'
export default {
  name: 'InfoTile',
  components: {
    EducationCard,
    ExperienceCard,
    PersonalCard,
    SkillCard
  },
  data() {
    return{
      horizontalMenuState: "Personal"
    }
  },
  mounted() {
    this.horizontalMenuState = "Personal"
  }
}
</script>

<style scoped>

@media (max-width: 575.98px) {
  .item a{
    font-size: 11px;
  }
  .item:hover{
    padding: 4px 4px;
    margin: 0px 2px;
  }
  .selected{
    padding: 4px 4px !important;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .item a{
    font-size: 13px;
  }
  .item:hover{
    padding: 6px 7px;
    margin: 0px 2px;
  }
  .selected{
    padding: 6px 7px !important;
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
  background-color: var(--primary-color);
  color: black !important;
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
