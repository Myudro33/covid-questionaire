<template>
  <div class="flex flex-col mt-24">
    <div class="flex justify-between items-center">
      <img src="../assets/redberry-logo.svg" alt="logo" />
      <h1 class="text-[40px] tracking-widest text-[#232323]">{{ `${page}/4` }}</h1>
    </div>
    <hr class="border-[1.8px] border-[#232323] mt-6" />
  </div>
</template>

<script>
export default {
  props: ["page"],
};
</script>
