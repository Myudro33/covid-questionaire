<template>
  <input
    :id="id"
    :v-model="model"
    class="w-[513px] h-[50px] px-5 border border-[#232323] text-lg"
    type="text"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  props: ["id", "model", "placeholder"],
};
</script>
