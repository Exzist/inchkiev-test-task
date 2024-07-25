<template>
  <swiper
    :effect="'creative'"
    :allowTouchMove="true"
    :loop="true"
    @swiper="onSwiper"
    :speed="1000"
    :modules="modules"
    class="slider"
    :creativeEffect="{
      limitProgress: 2,
      prev: {
        translate: ['6%', 0, 0],
      },
      next: {
        translate: ['3.2%', 0, 0],
      },
    }"
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
          <button class="slider-item__button-next" @click="nextSlide()">
            <img src="/media/svg/arrow.svg" alt="arrow icon" />
            <p class="slider-item__button-next-text" ref="buttonTextInstance">
              Дивитися далі &nbsp;Дивитися далі &nbsp;Дивитися далі&nbsp;
            </p>
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
