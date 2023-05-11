<template>
  <div class="w-full h-screen flex-col bg-[#EAEAEA] flex items-center overflow-hidden">
    <transition appear>
      <img class="mt-80" src="../assets/postman.svg" alt="logo" />
    </transition>
    <RouterLink v-if="link" to="/personal">
      <h1 class="link text-center tracking-widest font-bold text-3xl mt-24">
        კითხვარის <br />
        დაწყება
      </h1>
    </RouterLink>
  </div>
</template>

<script>
export default {
  data() {
    return {
      link: false
    }
  },
  methods: {
    showLink() {
      setTimeout(() => {
        this.link = true
      }, 1000)
    }
  },
  created() {
    this.showLink()
  }
}
</script>

<style scoped>
.link:hover {
  text-shadow: 2px 0px 0 rgb(191, 190, 190), 3px 0px 0 black;
  cursor: pointer;
}
.v-enter-from {
  scale: 30;
}
.v-enter-active {
  transition: all 0.8s ease-out;
}
.v-enter-to {
  scale: 1;
}
</style>
