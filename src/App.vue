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
  --light-color: #f7ecf7;
  --opacity-light: rgba(207, 190, 233, 0.8);
  --primary-color: #8269c9;
  --secondary-color: #618cc4;
  --opposite-color: #e9e8a3bb;
  --accent-color: #204153;
  --bottom-margin: 25px;
}
</style>
