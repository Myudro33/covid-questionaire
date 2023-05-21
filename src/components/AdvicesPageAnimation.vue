<template>
  <div class="relative translate-y-20">
    <img class="z-20 relative" src="../assets/advice.svg" alt="bycicle & boy" />
    <transition appear>
      <img
        class="h-[200px] absolute left-[80px] top-[50px]"
        src="../assets/advice-anim.svg"
        alt="heart"
      />
    </transition>
  </div>
</template>

<style scoped>
.v-enter-from {
  scale: 2;
  opacity: 0.8;
}
.v-enter-active {
  transition: all 0.3s ease-out;
}
</style>
