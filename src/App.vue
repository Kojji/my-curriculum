<template>
  <div>
    <NavBar />
    <router-view style="margin-bottom: 100px;"/>
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/App/NavBar.vue'
import Footer from '@/components/App/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root{
  --light-color: #ecf2f7;
  --opacity-light: rgba(207, 190, 233, 0.8);
  --primary-color: #ae8dd8;
  --secondary-color: #618cc4;
  --accent-color: #204153;
  --bottom-margin: 25px;
}
</style>
