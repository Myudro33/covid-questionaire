<template>
  <div class="w-full h-screen flex-col flex items-center overflow-hidden">
    <transition appear>
      <img class="mt-80 z-30" src="../assets/postman.svg" alt="logo" />
    </transition>
    <div class="w-60 h-24 bg-[#EAEAEA] z-20"></div>
    <transition name="text">
      <RouterLink v-if="link" to="/personal">
        <h1 class="link text-center tracking-widest font-bold text-3xl">
          კითხვარის <br />
          დაწყება
        </h1>
      </RouterLink>
    </transition>
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
.text-enter-from {
  transform: translateY(-100px);
}
.text-enter-active {
  transition: all 0.7s ease-out;
}
.v-enter-from {
  scale: 30;
}
.v-enter-active {
  transition: all 0.5s ease-out;
}
.v-enter-to {
  scale: 1;
}
</style>
