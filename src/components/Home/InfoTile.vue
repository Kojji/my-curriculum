<template>
  <div class="hello">
    <div class="glass menu">
      <!-- <div class="glass-window"> -->
      <div>
        <li class="horizontal-menu">
          <ul id="Experience" @click="horizontalMenuState = 'Experience'">Experience</ul>
          <ul id="Personal" @click="horizontalMenuState = 'Personal'">Personal</ul>
          <ul id="Skills" @click="horizontalMenuState = 'Skills'">Skills</ul>
          <ul id="Education" @click="horizontalMenuState = 'Education'">Education</ul>
        </li>
      </div>
    </div>
    <div class="information">
      <div>{{horizontalMenuState}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoTile',
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
.glass{

}

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
</style>
