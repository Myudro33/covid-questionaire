<template>
  <div class="relative -translate-y-10">
    <img class="z-20 relative" src="../assets/covid.svg" alt="" />
    <transition appear>
      <img
        class="h-[200px] absolute left-[105px] top-[260px]"
        src="../assets/covid-anim.png"
        alt=""
      />
    </transition>
  </div>
</template>

<style scoped>
.v-enter-from {
  height: 100px;
  width: 600px;
}
.v-enter-active {
  transition: all 0.3s ease-out;
}
.v-enter-to {
  width: 250px;
}
</style>
