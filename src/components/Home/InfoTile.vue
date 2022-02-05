<template>
  <div class="container">
    <div class="glass menu">
      <!-- <div class="glass-window"> -->
      <div>
        <ul class="nav justify-content-center nav-tabs">
          <li class="nav-item" id="Experience" @click="horizontalMenuState = 'Experience'"><a class="nav-link">Experiences</a></li>
          <li class="nav-item" id="Personal" @click="horizontalMenuState = 'Personal'"><a class="nav-link">Personal</a></li>
          <li class="nav-item" id="Skills" @click="horizontalMenuState = 'Skill'"><a class="nav-link">Skills</a></li>
          <li class="nav-item" id="Education" @click="horizontalMenuState = 'Education'"><a class="nav-link">Education</a></li>
        </ul>
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

.glass-window{
  width:100px;
  margin:auto;
  background-color:red;
  overflow:hidden;
  border-radius: 10%;
}

.horizontal-menu{
  transition: all .8s;
}

.information{
  min-height: 30vh;
}


</style>
