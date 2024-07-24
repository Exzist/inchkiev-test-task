<template>
  <swiper
    :effect="'creative'"
    :allowTouchMove="true"
    :loop="true"
    @swiper="onSwiper"
    :creativeEffect="{
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
    :modules="modules"
    class="slider"
  >
    <swiper-slide
      v-for="slide in sliderItems"
      :style="{ backgroundColor: slide.color }"
    >
      <div class="slider-item">
        <div class="slider-item__wrapper">
          <p class="slider-item__text">Lorem ipsum dolor sit amet</p>
          <h2 class="slider-item__title">
            <span class="slider-item__title-text slider-item__title-text_bold"
              >Lorem ipsum</span
            >
            <span class="slider-item__title-text">Lorem ipsum dolor —</span>
            <span class="slider-item__title-text">lorem</span>
            <span class="slider-item__title-text">ipsum !</span>
          </h2>
          <p class="slider-item__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <p class="slider-item__pagination">
            {{
              `${swiperInstance?.realIndex + 1}/${
                swiperInstance?.slides.length
              }`
            }}
          </p>
          <button class="slider-item__button-next" ref="buttonNextInstance">
            Дивитися далі Дивитися далі Дивитися далі
          </button>
          <div class="slider-item__image">
            <img src="/media/svg/slider-image.svg" alt="slider image" />
          </div>
          <div class="slider-item__figure">
            <img src="/media/svg/figure.svg" alt="star figure" />
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
  <button @click="nextSlide()">next</button>
</template>

<script>
import { Slider } from "@/components/logic/Slider/Slider";
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

export default defineComponent({
  name: "slider",
  components: { Swiper, SwiperSlide },
  setup(props, { emit }) {
    return Slider(props, { emit });
  },
});
</script>

<style lang="scss" scoped></style>
