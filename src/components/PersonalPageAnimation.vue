<template>
  <div class="relative -translate-y-10">
    <img class="z-20 relative" src="../assets/personal.svg" alt="" />
    <transition appear>
      <img class="z-10 absolute top-[230px] left-32" src="../assets/personal-anim.svg" alt="" />
    </transition>
  </div>
</template>

<style scoped>
.v-enter-from {
  left: 0;
  top: 300px;
}
.v-enter-active {
  transition: all 0.4s ease-out;
}
</style>
