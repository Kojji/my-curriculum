<template>
  <div class="container pt-4" id="animation-card">
    <h2 class="my-4">{{$t('InfoCards.Skills.Title')}}</h2>
    <h4>{{$t('InfoCards.Skills.TextOne')}}</h4>
    <hr />
    <h3>Uso e Estudo mais aprofundados</h3>
    <div class="section">Express</div>
    <div class="section">Firebase</div>
    <div class="section">Github</div>
    <div class="section">Quasar</div>
    <div class="section">Vuetify</div>
    <h3>Implementações e Leituras Simples</h3>
    <div class="section">Azure</div>
    <div class="section">Aws</div>
    <div class="section">Google Cloud</div>
    <div class="section">Docker</div>
    <div class="section">Adonisjs</div>
    <div class="section">CakePHP</div>
    <h3>Outros Conhecimentos</h3>
    <div class="section">shotcut</div>
    <div class="section">photoshop</div>
    <div class="section">gimp</div>
    <div class="section">excel</div>
  </div>
</template>

<script>
export default {
  name: 'SkillCard'
}
</script>

<style scoped>
#skill-card{
  margin-bottom: var(--bottom-margin);
}
</style>
