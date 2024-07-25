import { EffectCreative, EffectCards } from "swiper/modules";
import { ref } from "vue";

export function Slider(props, { emit }) {
  const modules = [EffectCreative, EffectCards];
  const sliderItems = [
    { color: "#027D84" },
    { color: "#4A989A" },
    { color: "#AFB3B4" },
  ];

  const swiperInstance = ref();
  const buttonTextInstance = ref();

  const onSwiper = (swiper) => {
    swiperInstance.value = swiper;
    buttonTextInstance.value.forEach((el) => {
      el.innerHTML = buttonTextInstance.value[0].innerText
        .split("")
        .map(
          (char, i) =>
            `<span style="transform:rotate(${
              i * (360 / buttonTextInstance.value[0].innerText.split("").length)
            }deg)">${char}</span>`
        )
        .join("");
    });
  };

  const nextSlide = () => {
    swiperInstance.value.slideNext();
  };

  // const pagination = {
  //   type: "custom",
  //   renderCustom: function (swiper, current, total) {
  //     return current + "/" + total;
  //   },
  // };

  return {
    modules,
    swiperInstance,
    nextSlide,
    onSwiper,
    sliderItems,
    buttonTextInstance,
  };
}
