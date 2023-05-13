<template>
  <label-component :label="id" :title="label" />
  <Field
    class="w-[513px] h-[50px] px-5 border border-[#232323] text-lg"
    :id="id"
    :name="id"
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    @input="($event) => $emit('update:modelValue', $event.target.value)"
  />
  <ErrorMessage class="text-[#F15524] ml-4" :name="id" />
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
export default {
  props: ["modelValue", "id", "placeholder", "label"],
  components: {
    Field,
    ErrorMessage,
  },
};
</script>
