<template>
  <div class="relative -translate-y-10">
    <img class="z-20 relative" src="../assets/covid.svg" alt="ill boy" />
    <transition name="circle" v-if="route === 'vaccination'" appear>
      <img
        class="h-[200px] absolute left-[105px] top-[260px]"
        src="../assets/covid-anim.png"
        alt="red circle"
      />
    </transition>
    <transition v-else appear>
      <img
        class="h-[200px] absolute left-[105px] top-[260px]"
        src="../assets/covid-anim.png"
        alt="red circle"
      />
    </transition>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();
    const route = localStorage.getItem("from");
    router.beforeEach((_, from, next) => {
      localStorage.setItem("from", from.name);
      next();
    });
    return {
      route,
    };
  },
};
</script>

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
.circle-enter-from {
  transform: translate(100px, -200px);
  opacity: 0;
}
.circle-enter-active {
  transition: all 0.3s ease-out;
}
</style>
