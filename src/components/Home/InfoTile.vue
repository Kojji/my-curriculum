<template>
  <div>
    <div class="glass menu">
      <!-- <div class="glass-window"> -->
      <div>
        <div class="nav justify-content-center horizontal-menu">
          <div :class="horizontalMenuState == 'Experience'? 'item selected' : 'item'" id="Experience" @click="horizontalMenuState = 'Experience'">
            <a>Experiences</a>
          </div>
          <div :class="horizontalMenuState == 'Personal'? 'item selected' : 'item'" id="Personal" @click="horizontalMenuState = 'Personal'">
            <a>Personal</a>
          </div>
          <div :class="horizontalMenuState == 'Skill'? 'item selected' : 'item'" id="Skills" @click="horizontalMenuState = 'Skill'">
            <a>Skills</a>
          </div>
          <div :class="horizontalMenuState == 'Education'? 'item selected' : 'item'" id="Education" @click="horizontalMenuState = 'Education'">
            <a>Education</a>
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
      horizontalMenuState: "Experience"
    }
  },
  mounted() {
    this.horizontalMenuState = "Experience"
  }
}
</script>

<style scoped>

@media (max-width: 575.98px) {
  /* .horizontal-menu{padding: 2px;} */
  .link{font-size: 10px;}
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .link{font-size: 15px;}
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
  transition: all .8s;
  margin-bottom: 5px;
}

.item{
  padding: 10px 15px;
  margin: 5px 4px;
  border-style: solid;
  cursor: pointer;
}

.item a{
  font-weight: bold;
}

.item:hover{
  padding: 15px 15px;
  margin: 0px 4px;
}

.information{
  min-height: 30vh;
}

.link{
  
}

.selected{
  padding: 15px 15px !important;
  margin: 0px 4px !important;
  background:red;
  background-color: rgba(0, 0, 0, 0.1);
}


</style>
