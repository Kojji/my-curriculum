<template>
  <div class="home">
    <footer class="text-center text-lg-start text-muted fixed-bottom" style="background-color: var(--opacity-light);">
      <!-- Section: Social media -->
      <section
        class="d-flex justify-content-center p-2 border-bottom"
      >
        <div style="font-size: 1.2rem;color: var(--accent-color);">
          <a href="https://wa.me/+5511934282440" target="_blank" class="mx-1 text-reset round-background">
            <i class="fab fa-whatsapp fa-lg"></i>
          </a>
          <a href="mailto:fernandokojiyama@gmail.com" target="_blank" class="mx-1 text-reset round-background">
            <i class="fas fa-envelope fa-lg"></i>
          </a>
          <a href="https://github.com/Kojji" target="_blank" class="mx-1 text-reset round-background">
            <i class="fab fa-github fa-lg"></i>
          </a>
          <a href="https://www.instagram.com/nandokoji/" target="_blank" class="mx-1 text-reset round-background">
            <i class="fab fa-instagram fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/fernando-koji-yamashiro-56a122220/" target="_blank" class="mx-1 text-reset round-background">
            <i class="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="https://codepen.io/kojji" target="_blank" class="mx-1 text-reset round-background">
            <i class="fab fa-codepen fa-lg"></i>
          </a>

        </div>
      </section>
      <!-- Section: Social media -->

      <!-- Section: Links  -->
      <!-- <section class="">
        <div class="container text-center text-md-start mt-5">
          <div class="row mt-3">
            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3"></i>Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum
                dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </section> -->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      language: 'Português[BR]'
    }
  }
}
</script>

<style scoped>
.round-background{
  /* background-color: var(--light-color); */
  /* padding: 6px 6px 4px 6px; */
  /* border-radius: 50%; */
}
</style>