<template>
  <div class="px-[200px]">
    <navbar :page="2" />
    <div class="w-full h-auto flex justify-between">
      <Form @submit="onSubmit" v-slot="{ meta }" class="w-[600px] mt-11">
        <label-component :label="'covid'" :title="'გაქვს გადატანილი Covid-19?*'" />
        <div>
          <radio-input
            :rules="'required'"
            v-model="covid"
            id="had_covid"
            labelValue="კი"
            value="yes"
          />
          <radio-input v-model="covid" id="had_covid" labelValue="არა" value="no" />
          <radio-input
            v-model="covid"
            id="had_covid"
            labelValue="ახლა მაქვს"
            value="have_right_now"
          />
        </div>
        <ErrorMessage class="text-[#F15524] my-4" :name="'had_covid'" />
        <div v-if="covid === 'yes'" class="mt-11">
          <label-component
            :label="'antibody'"
            :title="'ანტისხეულების ტესტი გაქვს გაკეთებული?*'"
          />
          <div>
            <radio-input
              :rules="'required'"
              v-model="antibody_test"
              id="antibody_test"
              labelValue="კი"
              value="yes"
            />
            <radio-input
              v-model="antibody_test"
              id="antibody_test"
              labelValue="არა"
              value="no"
            />
          </div>
        </div>
        <ErrorMessage class="text-[#F15524] my-4" :name="'antibody_test'" />
        <div
          v-if="antibody_test === 'no' && covid === 'yes'"
          class="mt-11 h-22 flex flex-col"
        >
          <label-component
            :label="'antibody'"
            :title="'მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*'"
          />
          <div class="ml-4 w-[513px]">
            <input-component
              placeholder="დდ/თთ/წწ"
              :rules="'required|date'"
              v-model="date"
              id="had_covid_date"
            />
          </div>
        </div>
        <div
          v-if="antibody_test === 'yes' && covid === 'yes'"
          class="mt-11 flex flex-col"
        >
          <label-component
            :label="'antibody'"
            :title="'თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*'"
          />
          <div class="ml-4">
            <input-component
              :rules="'date'"
              placeholder="რიცხვი"
              v-model="test_number"
              id="test_number"
            />
            <input-component
              placeholder="ანტისხეულების რაოდენობა"
              v-model="antibody"
              id="antibody"
            />
          </div>
        </div>
        <div class="absolute bottom-12 left-1/2 w-28 flex justify-between z-50">
          <button type="button" @click="redirectBack">
            <img class="rotate-180" src="../assets/vector.svg" alt="vector" />
          </button>
          <button :disabled="!meta.valid" type="submit">
            <img v-if="meta.valid" src="../assets/vector.svg" alt="vector" />
            <img
              v-else
              class="cursor-not-allowed"
              src="../assets/vector-gray.svg"
              alt="vector"
            />
          </button>
        </div>
      </Form>
      <CovidPageAnimation />
    </div>
  </div>
</template>

<script>
import { Form, ErrorMessage } from "vee-validate";
import CovidPageAnimation from "../components/CovidPageAnimation.vue";
export default {
  components: { Form, ErrorMessage, CovidPageAnimation },
  data() {
    return {
      covid: localStorage.getItem("had_covid") || null,
      antibody_test: localStorage.getItem("antibody_test") || null,
      date: localStorage.getItem("had_covid_date") || null,
      test_number: localStorage.getItem("test_number") || null,
      antibody: localStorage.getItem("antibody") || null,
    };
  },
  watch: {
    covid: (value) => {
      localStorage.setItem("had_covid", value);
    },
    antibody_test: (value) => {
      localStorage.setItem("antibody_test", value);
    },
  },
  methods: {
    onSubmit() {
      this.$router.push({ name: "vaccination" });
      this.$store.dispatch("covid_questions/hadCovid", this.covid);
      if (this.covid === "yes") {
        this.$store.dispatch("covid_questions/hadAntibodyTest", this.antibody_test);
        if (this.antibody_test === "yes") {
          this.$store.dispatch("covid_questions/antibodies", this.antibody);
          this.$store.dispatch("covid_questions/testDate", this.test_number);
        } else {
          this.$store.dispatch("covid_questions/sicknessDate", this.date);
        }
      }
    },
    redirectBack() {
      this.$router.push({ name: "personal" });
    },
  },
};
</script>
