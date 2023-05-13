<template>
  <div class="px-[200px]">
    <navbar :page="1" />
    <div class="w-full h-auto flex justify-between">
      <Form @submit="handleSubmit" :validation-schema="schema" class="flex flex-col">
        <input-component id="firstName" label="სახელი*" />
        <input-component id="lastName" label="გვარი*" />
        <input-component id="email" label="მეილი*" />
        <div class="w-[270px] flex flex-col mt-28">
          <hr class="border-[#000000] mb-5 w-11/12" />
          <p class="text-[#626262]">*-ით მონიშნული ველების შევსება სავალდებულოა</p>
        </div>
        <div class="absolute bottom-12 left-1/2">
          <button type="submit">
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
import * as yup from "yup";
import PersonalPageAnimation from "../components/PersonalPageAnimation.vue";
export default {
  data() {
    const schema = yup.object({
      firstName: yup
        .string()
        .required("სავალდებულოა")
        .min(3, "მინიმუმ 3 სიმბოლო")
        .max(255, "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან"),
      lastName: yup
        .string()
        .required("სავალდებულოა")
        .min(3, "მინიმუმ 3 სიმბოლო")
        .max(255, "სახელის ველი უნდა შედგებოდეს მაქსიმუმ 255 სიმბოლოსგან"),
      email: yup
        .string()
        .matches(/.*\@redberry.ge$/, "უნდა მთავრდებოდეს @redberry.ge-ით")
        .required("სავალდებულო"),
    });
    return {
      schema,
    };
  },
  methods: {
    handleSubmit() {
      this.$router.push({ path: "/" });
    },
  },
  components: { Form, PersonalPageAnimation, Field, ErrorMessage },
};
</script>
