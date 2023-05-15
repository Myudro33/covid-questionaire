<template>
  <div class="px-[200px]">
    <navbar :page="2" />
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
            v-model="vaccined"
            id="vaccined"
            labelValue="კი"
            value="yes"
          />
          <radio-input v-model="vaccined" id="vaccined" labelValue="არა" value="no" />
        </div>
      </div>
      <ErrorMessage class="text-[#F15524] my-4" :name="'vaccined'" />
      <div v-if="vaccined === 'no' && covid === 'yes'" class="mt-11 h-22 flex flex-col">
        <label-component
          :label="'antibody'"
          :title="'მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*'"
        />
        <input-component
          placeholder="დდ/თთ/წწ"
          :rules="'required|date'"
          v-model="date"
          id="had_covid_date"
        />
      </div>
      <div v-if="vaccined === 'yes' && covid === 'yes'" class="mt-11 flex flex-col">
        <label-component
          :label="'antibody'"
          :title="'თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და ანტისხეულების რაოდენობა*'"
        />
        <input-component placeholder="რიცხვი" v-model="test_number" id="test_number" />
        <input-component
          placeholder="ანტისხეულების რაოდენობა"
          v-model="antibody"
          id="antibody"
        />
      </div>
      <div class="absolute bottom-12 left-1/2 w-24 flex justify-between">
        <button @click="redirectBack">
          <img class="rotate-180" src="../assets/vector.svg" alt="" />
        </button>
        <button :disabled="!meta.valid" type="submit">
          <img src="../assets/vector.svg" alt="" />
        </button>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, ErrorMessage } from "vee-validate";
export default {
  components: { Form, ErrorMessage },
  data() {
    return {
      covid: localStorage.getItem("had_covid") || null,
      vaccined: localStorage.getItem("vaccined") || null,
      date: localStorage.getItem("date") || null,
      test_number: localStorage.getItem("vaccinated_date") || null,
      antibody: localStorage.getItem("antibody") || null,
    };
  },
  watch: {
    covid: (value) => {
      localStorage.setItem("had_covid", value);
    },
    vaccined: (value) => {
      localStorage.setItem("vaccined", value);
    },
  },
  methods: {
    onSubmit() {
      this.$router.push({ path: "/vaccine" });
    },
    redirectBack() {
      this.$router.push({ path: "/personal" });
    },
  },
};
</script>

<style scoped>
input[type="radio"] {
  width: 23px;
  height: 23px;
  accent-color: #232323;
  margin: 10px;
}
</style>
