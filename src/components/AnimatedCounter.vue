<template>
  <div ref="counterSection">
    <h1 class="counter-number">{{ displayNumber }}</h1>
  </div>
</template>

<script>
import { CountUp } from "countup.js";

export default {
  name: "AnimatedCounter",
  props: {
    endValue: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      displayNumber: 0,
      hasCounted: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const section = this.$refs.counterSection;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (!this.hasCounted && rect.top < windowHeight) {
        this.startCount();
        this.hasCounted = true;
      }
    },
    startCount() {
      const countUp = new CountUp(this.$refs.counterSection, this.endValue, {
        duration: this.duration,
      });
      if (!countUp.error) {
        countUp.start(() => {
          this.displayNumber = countUp.endVal;
        });
      } else {
        console.error(countUp.error);
      }
    },
  },
};
</script>
