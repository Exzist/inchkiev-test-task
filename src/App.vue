<template>
  <main-page />
</template>

<script>
import { defineComponent } from "vue";
import MainPage from "./components/ui/Pages/MainPage.vue";

export default defineComponent({
  components: { MainPage },
});
</script>

<style lang="scss">
@import "src/assets/scss/style.scss";
@import "swiper/scss";
@import "swiper/scss/effect-creative";
@import "swiper/scss/effect-cards";
</style>
