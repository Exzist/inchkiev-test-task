<template>
  <main class="main home">
    <section class="home__slider home-slider">
      <div class="home-slider__container">
        <slider></slider>
      </div>
    </section>
  </main>
</template>

<script>
import { MainPage } from "@/components/logic/Pages/MainPage";
import { defineComponent } from "vue";
import Slider from "@/components/ui/Slider/Slider.vue";

export default defineComponent({
  name: "main-page",
  components: { Slider },
  setup(props, { emit }) {
    return MainPage(props, { emit });
  },
});
</script>

<style lang="scss" scoped></style>
