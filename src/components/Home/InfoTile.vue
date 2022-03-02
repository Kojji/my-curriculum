<template>
  <div>
    <div class="glass menu">
      <!-- <div class="glass-window"> -->
      <div class="flex">
        <div class="nav justify-content-center horizontal-menu">
          <div :class="horizontalMenuState == 'Personal'? 'item selected' : 'item'" id="Personal" @click="horizontalMenuState = 'Personal'">
            <a>{{$t('HorizontalMenu.PersonalItem')}}</a>
          </div>
          <div :class="horizontalMenuState == 'Experience'? 'item selected' : 'item'" id="Experience" @click="horizontalMenuState = 'Experience'">
            <a>{{$t('HorizontalMenu.ExperienceItem')}}</a>
          </div>
          <div :class="horizontalMenuState == 'Skill'? 'item selected' : 'item'" id="Skills" @click="horizontalMenuState = 'Skill'">
            <a>{{$t('HorizontalMenu.SkillItem')}}</a>
          </div>
          <div :class="horizontalMenuState == 'Education'? 'item selected' : 'item'" id="Education" @click="horizontalMenuState = 'Education'">
            <a>{{$t('HorizontalMenu.EducationItem')}}</a>
          </div>
        </div>
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
  .item{
    padding: 1px 4px;
    margin: 3px 2px;
  }
  .item a{
    font-size: 10px;
  }
  .item:hover{
    padding: 4px 4px;
    margin: 0px 2px;
  }
  .selected{
    padding: 4px 4px !important;
    margin: 0px 2px !important;
  }
}

@media (max-width: 767.98px) {
  .item{
    padding: 3px 7px;
    margin: 3px 2px;
  }
  .item a{
    font-size: 13px;
  }
  .item:hover{
    padding: 6px 7px;
    margin: 0px 2px;
  }
  .selected{
    padding: 6px 7px !important;
    margin: 0px 2px !important;
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
  padding: 10px 15px;
  margin: 5px 4px;
  border-style: solid;
  cursor: pointer;
  border-width: 1px;
}

.item a{
  font-weight: bold;
}

.item:hover{
  margin: 0px 4px;
  padding: 15px 15px;
  background-color: var(--primary-color);
  color: black !important;
}

.information{
  min-height: 30vh;
}

.selected{
  padding: 15px 15px !important;
  margin: 0px 4px !important;
  background-color: var(--accent-color);
  border-color: var(--light-color);
  color: var(--light-color);
  /* cursor: not-allowed; */
}

</style>
