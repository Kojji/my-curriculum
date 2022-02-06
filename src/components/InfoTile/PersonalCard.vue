<template>
  <div class="container">
    <h1>About Me</h1>
    <img :src="photo" class="photo-slot my-3" alt="...">
    <div class="about-me-text">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras gravida urna ut viverra luctus. Nullam vitae tincidunt urna, eu vulputate nunc. Praesent ultrices mi elit, vel gravida erat eleifend sit amet. Duis tincidunt fermentum mauris, at aliquam nisi sodales ultrices. Duis lobortis, urna a maximus lobortis, orci ipsum tempor purus, eget egestas lacus libero tempus turpis. Duis sit amet ex porttitor, porta nisi dictum, dapibus ipsum. Morbi nisi justo, euismod sed ornare ac, tincidunt sed tellus. In dictum aliquet urna, sit amet luctus risus eleifend ut. Nulla sed vulputate ligula. Praesent id neque varius, bibendum massa quis, convallis urna. Etiam vel aliquam magna. Cras vitae mauris arcu. Sed quis ultrices massa. Morbi vulputate feugiat gravida. Sed ut interdum tortor. Sed elementum vel elit at egestas.
      </p>
      <p>
        Cras aliquam, tellus eu fermentum finibus, tellus lacus rhoncus dolor, vel blandit odio elit id velit. Morbi eu nunc iaculis ligula finibus malesuada a ac nulla. In nec velit nisl. Etiam feugiat laoreet turpis, rhoncus aliquam sem vehicula pharetra. Etiam dapibus ut risus id interdum. Quisque mattis cursus fringilla. Nam ex nisl, pharetra in efficitur eget, dictum a elit. Quisque eu dolor non est porttitor placerat. Cras turpis lacus, tristique sit amet tempor ut, cursus non massa. Curabitur mollis aliquet sapien nec dignissim. Vestibulum at tempor odio, porta luctus leo. Pellentesque et quam sapien. Duis molestie pharetra elit in consequat. Vivamus sodales, ex sit amet blandit egestas, est nisl aliquam justo, id vehicula mauris leo eget lacus.
      </p>
      <p>
        Donec tempus fermentum nibh. Donec eget quam sit amet lectus porttitor porta. Mauris semper volutpat efficitur. In quis volutpat quam. In erat nulla, placerat nec pretium eget, pulvinar vitae eros. Nunc fringilla nibh ultrices dolor tincidunt laoreet. Phasellus varius leo nunc, id lobortis mauris efficitur venenatis. Suspendisse porta elit sed libero lobortis vestibulum.
      </p>
      <p>
        Sed venenatis neque ac turpis laoreet fringilla. Curabitur elementum volutpat ligula non aliquet. Nullam porta condimentum velit, sed accumsan nibh pulvinar a. Curabitur eget lacus vel purus molestie vulputate ut ut erat. Vestibulum faucibus lacinia libero, sit amet hendrerit odio. Fusce vitae odio nec libero condimentum tempor et et purus. Praesent non mollis leo, venenatis euismod nisi. Pellentesque in vehicula neque, quis blandit velit. Cras a lacinia tellus. Mauris odio ipsum, convallis ut massa eget, viverra cursus odio. Donec rutrum, est ut porttitor bibendum, tortor ante mollis ante, malesuada pellentesque tellus diam lacinia mauris. Cras eget quam dictum, eleifend neque sit amet, luctus dolor. Nullam non porta tortor, vel fringilla ligula. Suspendisse mi ex, rutrum sit amet ultrices non, ullamcorper eget odio.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonalCard',
  data() {
    return {
      photo: require("@/assets/logo.png")
    }
  }
}
</script>

<style scoped>
.photo-slot{
  width: 15%;
  border-radius: 50%;
  background: red;
}

.about-me-text p{
  text-align: justify;
  text-justify: inter-word;
}
</style>
