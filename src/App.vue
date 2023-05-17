<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView v-slot="slotProps">
    <transition name="fade" mode="out-in">
      <component :is="slotProps.Component" />
    </transition>
  </RouterView>
</template>

<style>
body {
  background-color: #eaeaea;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 0.3s ease-in;
}
</style>
