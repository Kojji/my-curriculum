<template>
  <div class="hello">
    <nav class="navbar navbar-light" style="background-color: var(--opacity-light);">
      <div class="container-fluid">
        <span class="navbar-brand portfolio-title">Fernando Koji Yamashiro</span>
        <div class="dropdown btn-group">
          <button class="btn btn-sm dropdown-toggle text-light" style="background-color: var(--accent-color);" type="button" id="dropdownFlag" data-bs-toggle="dropdown" aria-expanded="false">
            {{language}}
          </button>
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
import detectLanguage from "@/assets/languageDetect"
export default {
  name: 'NavBar',
  data() {
    return {
      language: detectLanguage() == 'pt' ? 'Português' : 'English',
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


.portfolio-title{
  /* font-family: 'Georgia', Georgia, 'Times New Roman', Times, serif; */
  color: var(--accent-color) !important;
  font-family: 'Redressed', cursive;
  font-size: 1.5rem;
  font-weight: bold;
  margin-left: 10px;
}
</style>