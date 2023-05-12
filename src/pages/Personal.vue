<template>
  <div class="px-[200px]">
    <navbar :page="1" />
    <div class="w-full h-auto flex justify-between">
      <form class="flex flex-col">
        <label-component label="name" title="სახელი*" />
        <input-component id="name" model="firstName" placeholder="იოსებ" />
        <label-component label="last" title="გვარი*" />
        <input-component id="last" model="lastName" placeholder="ჯუღაშვილი" />
        <label-component label="email" title="მეილი*" />
        <input-component id="email" model="email" placeholder="fbi@redberry.ge" />
        <div class="w-[270px] flex flex-col mt-28">
          <hr class="border-[#000000] mb-5 w-11/12" />
          <p class="text-[#626262]">*-ით მონიშნული ველების შევსება სავალდებულოა</p>
        </div>
      </form>
      <div class="relative -translate-y-10">
        <img class="z-20 relative" src="../assets/personal.svg" alt="" />
        <transition appear>
          <img
            class="z-10 absolute top-[230px] left-32"
            src="../assets/personal-anim.svg"
            alt=""
          />
        </transition>
      </div>
      <div class="absolute bottom-12 left-1/2">
      <img src="../assets/vector.svg" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
.v-enter-from {
  left: 0;
  top: 300px;
}
.v-enter-active {
  transition: all 0.5s ease-out;
}
</style>
