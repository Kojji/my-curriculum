<template>
  <div class="container">
    <div class="glass menu">
      <!-- <div class="glass-window"> -->
      <div>
        <ul class="horizontal-menu">
          <li id="Experience" @click="horizontalMenuState = 'Experience'">Experiences</li>
          <li id="Personal" @click="horizontalMenuState = 'Personal'">Personal</li>
          <li id="Skills" @click="horizontalMenuState = 'Skill'">Skills</li>
          <li id="Education" @click="horizontalMenuState = 'Education'">Education</li>
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all .6s;
}
.horizontal-menu li{
  cursor: pointer;
  list-style-type: none;
}

.information{
  min-height: 30vh;
}


</style>
