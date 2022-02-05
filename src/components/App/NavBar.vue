<template>
  <div class="hello">
    <nav class="navbar navbar-light" style="background-color: rgba(0, 0, 0, 0.05);">
      <div class="container-fluid">
        <a class="navbar-brand">Fernando Koji Yamashiro</a>
        <div class="dropdown btn-group">
          <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownFlag" data-bs-toggle="dropdown" aria-expanded="false">
            {{language}}
          </button>
          <!-- <button class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" type="button" id="dropdownFlag" data-bs-toggle="dropdown" aria-expanded="false">
            <span class="visually-hidden">Toggle Dropdown</span>
          </button> -->
          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" @click="changeLocale('pt'), language = 'Português'">Português</a></li>
            <li><a class="dropdown-item" @click="changeLocale('en'), language = 'English'">English</a></li>
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
      language: 'English'
    }
  },
  methods: {
    changeLocale(location) {
      this.$i18n.locale = location
    }
  }
}
</script>

<style scoped>
.navbar {padding: 2px !important}
</style>