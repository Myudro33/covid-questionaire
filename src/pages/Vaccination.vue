<template>
  <div class="px-[200px]">
    <navbar :page="3" />
    <div class="w-full h-auto flex justify-between">
      <Form @submit="onSubmit" v-slot="{ meta }" class="w-[700px] mt-11">
        <label-component :label="'covid'" :title="'უკვე აცრილი ხარ?*'" />
        <div>
          <radio-input
            :rules="'required'"
            v-model="vaccinated"
            id="vaccinated"
            labelValue="კი"
            value="yes"
          />
          <radio-input v-model="vaccinated" id="vaccinated" labelValue="არა" value="no" />
          <ErrorMessage class="text-[#F15524]" name="vaccinated" />
        </div>
        <div class="mt-12" v-if="vaccinated === 'yes'">
          <label-component :label="'vaccinated'" :title="'აირჩიე რა ეტაპზე ხარ?*'" />
          <radio-input
            :rules="'required'"
            v-model="vaccination_stage"
            id="vaccination_stage"
            labelValue="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
            value="first_dosage_and_registered_on_the_second"
          />
          <radio-input
            v-model="vaccination_stage"
            id="vaccination_stage"
            labelValue="სრულად აცრილი ვარ"
            value="fully_vaccinated"
          />
          <radio-input
            v-model="vaccination_stage"
            id="vaccination_stage"
            labelValue="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
            value="first_dosage_and_not_registered_yet"
          />
          <ErrorMessage class="text-[#F15524]" name="vaccination_stage" />
        </div>
        <div class="mt-12" v-if="vaccinated === 'no'">
          <label-component :label="'register'" :title="'რას ელოდები?*'" />
          <radio-input
            :rules="'required'"
            v-model="waiting_for"
            id="waiting_for"
            labelValue="დარეგისტრირებული ვარ და ველოდები რიცხვს"
            value="registered_and_waiting"
          />
          <radio-input
            v-model="waiting_for"
            id="waiting_for"
            labelValue="არ ვგეგმავ"
            value="not_planned"
          />
          <radio-input
            v-model="waiting_for"
            id="waiting_for"
            labelValue="გადატანილი მაქვს და ვგეგმავ აცრას"
            value="had_already"
          />
          <ErrorMessage class="text-[#F15524]" name="waiting_for" />
        </div>
        <Feedback
          v-if="
            vaccinated === 'yes' &&
            vaccination_stage === 'first_dosage_and_not_registered_yet'
          "
          :message="'lets_register'"
        />
        <Feedback
          v-if="vaccinated === 'no' && waiting_for === 'not_planned'"
          :message="'not_planned'"
        />
        <Feedback
          v-if="vaccinated === 'no' && waiting_for === 'had_already'"
          :message="'had_already'"
        />
        <div class="absolute bottom-12 left-1/2 w-28 flex justify-between">
          <button @click="redirectBack">
            <img class="rotate-180" src="../assets/vector.svg" alt="" />
          </button>
          <button type="submit">
            <img src="../assets/vector.svg" alt="" />
          </button>
        </div>
      </Form>
      <VaccinationPageAnimation />
    </div>
  </div>
</template>

<script>
import { Form, ErrorMessage } from "vee-validate";
import Feedback from "../components/Feedback.vue";
import VaccinationPageAnimation from "../components/VaccinationPageAnimation.vue";
export default {
  components: { Form, ErrorMessage, Feedback, VaccinationPageAnimation },
  data() {
    return {
      vaccinated: localStorage.getItem("vaccinated") || null,
      vaccination_stage: localStorage.getItem("vaccination_stage") || null,
      waiting_for: localStorage.getItem("waiting_for") || null,
    };
  },
  watch: {
    vaccinated: (value) => {
      localStorage.setItem("vaccinated", value);
    },
    vaccination_stage: (value) => {
      localStorage.setItem("vaccination_stage", value);
    },
    waiting_for: (value) => {
      localStorage.setItem("waiting_for", value);
    },
  },
  methods: {
    redirectBack() {
      this.$router.push({ path: "/covid-questions" });
    },
    onSubmit() {
      this.$router.push({ path: "/advices" });
      this.$store.dispatch("vaccination/hadVaccine", this.vaccinated);
      if (this.vaccinated === "yes") {
        this.$store.dispatch("vaccination/vaccinationStage", this.vaccination_stage);
      } else {
        this.$store.dispatch("vaccination/waiting", this.waiting_for);
      }
    },
  },
};
</script>
