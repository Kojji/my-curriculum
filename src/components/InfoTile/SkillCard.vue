<template>
  <div class="container pt-4" id="animation-card">
    <h2 class="my-4">{{$t('InfoCards.Skills.Title')}}</h2>
    <p class="content-text">{{$t('InfoCards.Skills.TextOne')}}</p>
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
@media (max-width: 575.98px) {
  .content-text{
    font-size: 14px;
  }
}

@media (min-width: 576px) and (max-width: 767.98px) {
  .content-text{
    font-size: 16px;
  }
}

@media (min-width: 768px){
  .content-text{
    font-size: 18px;
  }
}

.content-text{
  text-align: justify;
}

#skill-card{
  margin-bottom: var(--bottom-margin);
}
</style>
