<template>
  <div class="hello">
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">Fernando Koji Yamashiro</a>
        <div class="dropdown">
          <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownFlag" data-bs-toggle="dropdown" aria-expanded="false">
            {{language}}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownFlag1">
            <li><a class="dropdown-item" @click="language = 'Português[BR]'">Português[BR]</a></li>
            <li><a class="dropdown-item" @click="language = 'English[US]'">English[US]</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      language: 'Português[BR]'
    }
  }
}
</script>

<style scoped>
.navbar {padding: 2px !important}
</style>