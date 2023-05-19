<template>
  <label class="text-[22px] text-[#232323] font-bold mt-[47px]" :for="label">{{ title }}</label>
</template>

<script>
export default {
  props: ['label', 'title']
}
</script>
