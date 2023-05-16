<template>
  <label-component v-if="label" :label="id" :title="label" />
  <Field
    class="w-[513px] h-[50px] px-5 border border-[#232323] text-lg mt-4"
    :id="id"
    :name="id"
    type="text"
    :rules="rules"
    :placeholder="placeholder"
    :value="modelValue"
    @input="changeValue"
  />
  <ErrorMessage class="text-[#F15524] ml-4" :name="id" />
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
export default {
  props: ["modelValue", "id", "placeholder", "label", "rules"],
  components: {
    Field,
    ErrorMessage,
  },
  methods: {
    changeValue($event) {
      this.$emit("update:modelValue", $event.target.value);
      this.$store.dispatch("personal/storeLocalData", {
        name: $event.target.name,
        value: $event.target.value,
      });
    },
  },
};
</script>
