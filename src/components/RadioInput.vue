<template>
  <div>
    <span class="flex items-center my-5 mx-4">
      <Field :value="modelValue" :rules="rules" v-slot="{ field }" :name="id">
        <input
          class="accent-[#232323] w-6 h-6"
          type="radio"
          v-bind="field"
          :value="value"
          :checked="selected"
          :name="id"
          @change="($event) => $emit('update:modelValue', $event.target.value)"
        />
      </Field>
      <p class="text-[#232323] font-bold text-xl ml-5">{{ labelValue }}</p>
    </span>
  </div>
</template>

<script>
import { Field } from "vee-validate";
export default {
  props: ["modelValue", "id", "rules", "labelValue", "value"],
  data() {
    return {
      selected: localStorage.getItem(this.id) === this.value,
    };
  },
  components: {
    Field,
  },
};
</script>
