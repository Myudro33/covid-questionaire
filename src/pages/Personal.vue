<template>
  <div class="px-[200px]">
    <navbar :page="1" />
    <div class="w-full h-auto flex justify-between">
      <Form @submit="onSubmit" v-slot="{ meta }" class="flex flex-col">
        <input-component
          :rules="'required|min:3|max:255'"
          v-model="data.firstName"
          id="firstName"
          label="სახელი*"
        />
        <input-component
          :rules="'required|min:3|max:255'"
          v-model="data.lastName"
          id="lastName"
          label="გვარი*"
        />
        <input-component
          :rules="'required|email|redberry_email'"
          v-model="data.email"
          id="email"
          label="მეილი*"
        />
        <div class="w-[270px] flex flex-col mt-28">
          <hr class="border-[#000000] mb-5 w-11/12" />
          <p class="text-[#626262]">*-ით მონიშნული ველების შევსება სავალდებულოა</p>
        </div>
        <div class="absolute bottom-12 left-1/2">
          <button :disabled="!meta.valid" type="submit">
            <img src="../assets/vector.svg" alt="" />
          </button>
        </div>
      </Form>
      <PersonalPageAnimation />
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import PersonalPageAnimation from "../components/PersonalPageAnimation.vue";
export default {
  data() {
    const data = {
      firstName: localStorage.getItem("firstName") || "",
      lastName: localStorage.getItem("lastName") || "",
      email: localStorage.getItem("email") || "",
    };
    return {
      data,
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("personal/storePersonalData", this.data);
      this.$router.push({ path: "/covid-questions" });
    },
  },
  components: { Form, PersonalPageAnimation, Field, ErrorMessage },
};
</script>
