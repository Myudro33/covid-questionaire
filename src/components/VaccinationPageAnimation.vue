<template>
  <div class="relative translate-y-10">
    <img class="z-20 relative" src="../assets/vaccinated.svg" alt="doctor" />
    <transition appear>
      <img
        class="w-[288px] h-[312px] absolute left-[30px] top-[-30px]"
        src="../assets/vaccinated-anim.svg"
        alt="star"
      />
    </transition>
  </div>
</template>

<style scoped>
.v-enter-from {
  left: 0px;
  top: 300px;
  width: 150px;
  height: 150px;
}
.v-enter-active {
  transition: all 0.3s ease-in;
}
.v-enter-to {
  opacity: 0.8;
}
</style>
