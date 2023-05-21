<template>
  <div class="w-screen h-screen bg-[#232323] flex flex-col justify-center items-center">
    <transition name="heading" appear>
      <h1 v-if="heading" class="text-[64px] font-bold tracking-[.4em] text-[#ffffff]">მადლობა</h1>
    </transition>
    <transition name="star" appear>
      <img
        v-if="bigStar"
        class="absolute right-[58%] top-[38%] w-14 h-14"
        src="../assets/star.svg"
        alt="star"
      />
    </transition>
    <transition name="littleStar" appear>
      <img
        v-if="bigStar"
        class="absolute left-[58%] bottom-[40%] w-11 h-11"
        src="../assets/star.svg"
        alt="star"
      />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heading: false,
      bigStar: false
    }
  },
  methods: {
    showHeading() {
      setTimeout(() => {
        this.heading = true
      }, 600)
      setTimeout(() => {
        this.bigStar = true
      }, 1000)
    }
  },
  created() {
    this.showHeading()
  }
}
</script>

<style scoped>
.heading-enter-from {
  opacity: 0.5;
  transform: translateY(-10px);
}
.heading-enter-active {
  transition: all 0.3s ease-out;
}
.star-enter-from {
  opacity: 0;
  translate: 50px 80px;
}
.star-enter-active {
  transition: all 0.1s ease-out;
}
.littleStar-enter-from {
  opacity: 0;
  translate: -50px -80px;
}
.littleStar-enter-active {
  transition: all 0.1s ease-out;
}
</style>
