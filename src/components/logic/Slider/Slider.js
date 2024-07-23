import { EffectCreative } from "swiper/modules";
import { ref } from "vue";

export function Slider(props, { emit }) {
  const modules = [EffectCreative];
  const sliderItems = [
    { color: "#027D84" },
    { color: "#4A989A" },
    { color: "#AFB3B4" },
  ];

  const swiperInstance = ref();

  const onSwiper = (swiper) => {
    swiperInstance.value = swiper;
  };

  const nextSlide = () => {
    swiperInstance.value.slideNext();
  };

  return { modules, swiperInstance, nextSlide, onSwiper, sliderItems };
}
