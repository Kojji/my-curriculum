<template>
  <NavBar />
  <router-view />
  <Footer />
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
  --primary-color: #9ab8c9;
  --secondary-color: #6490ac;
  --accent-color: #385E72;
  --bottom-margin: 25px;
}
</style>
