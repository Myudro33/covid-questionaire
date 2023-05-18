<template>
  <div class="px-[200px] h-[2000px]">
    <navbar :page="4" />
    <div class="w-full flex justify-between">
      <Form @submit="onSubmit" v-slot="{ meta }" class="w-[700px] mt-11 relative">
        <AdvicesHeading />
        <div class="mt-10">
          <label-component
            :label="'frequency'"
            :title="'რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*'"
          />
          <radio-input
            :rules="'required'"
            v-model="frequency"
            id="frequency"
            labelValue="კვირაში ორჯერ"
            value="twice_a_week"
          />
          <radio-input
            v-model="frequency"
            id="frequency"
            labelValue="კვირაში ერთხელ"
            value="once_a_week"
          />
          <radio-input
            v-model="frequency"
            id="frequency"
            labelValue="ორ კვირაში ერთხელ"
            value="once_in_a_two_weeks"
          />
          <radio-input
            v-model="frequency"
            id="frequency"
            labelValue="თვეში ერთხელ"
            value="once_in_a_month"
          />
          <ErrorMessage class="text-[#F15524]" name="frequency" />
        </div>
        <div class="mt-10">
          <label-component
            :label="'work_from_office'"
            :title="'კვირაში რამდენი დღე ისურვებდი ოფისიდან მუშაობას?*'"
          />
          <radio-input
            :rules="'required'"
            v-model="work_from_office"
            id="work_from_office"
            labelValue="1"
            value="1"
          />
          <radio-input v-model="work_from_office" id="work_from_office" labelValue="2" value="2" />
          <radio-input v-model="work_from_office" id="work_from_office" labelValue="3" value="3" />
          <radio-input v-model="work_from_office" id="work_from_office" labelValue="4" value="4" />
          <radio-input v-model="work_from_office" id="work_from_office" labelValue="5" value="5" />
          <ErrorMessage class="text-[#F15524]" name="work_from_office" />
        </div>
        <div class="mt-10">
          <label-component :label="'about_meet'" :title="'რას ფიქრობ ფიზიკურ შეკრებებზე?'" />
          <textarea
            v-model="about_meet"
            class="h-[184px] w-full bg-transparent border border-[#232323] mt-5 p-3 text-2xl"
          ></textarea>
        </div>
        <div class="mt-10">
          <label-component
            :label="'environment'"
            :title="'რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას შეცვლიდი?'"
          />
          <textarea
            v-model="environment"
            class="h-[184px] w-full bg-transparent border border-[#232323] mt-5 p-3 text-2xl"
          ></textarea>
        </div>
        <button
          :disabled="!meta.valid"
          type="submit"
          class="bg-[#208298] disabled:bg-[#20829880] disabled:cursor-not-allowed text-white text-lg font-bold rounded-[42px] w-44 h-14 my-10 absolute right-0 mt-14"
        >
          დასრულება
        </button>
      </Form>
      <AdvicesPageAnimation />
      <div class="absolute bottom-[-780px] left-1/2 w-28 flex justify-between">
        <button type="button" @click="redirectBack">
          <img class="rotate-180" src="../assets/vector.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Form, ErrorMessage } from 'vee-validate'
import AdvicesHeading from '../components/AdvicesHeading.vue'
import AdvicesPageAnimation from '../components/AdvicesPageAnimation.vue'
export default {
  components: { Form, AdvicesPageAnimation, ErrorMessage, AdvicesHeading },
  data() {
    return {
      frequency: localStorage.getItem('frequency') || null,
      work_from_office: localStorage.getItem('work_from_office') || null,
      about_meet: localStorage.getItem('about_meet') || null,
      environment: localStorage.getItem('environment') || null
    }
  },
  watch: {
    frequency: (value) => {
      localStorage.setItem('frequency', value)
    },
    work_from_office: (value) => {
      localStorage.setItem('work_from_office', value)
    },
    about_meet: (value) => {
      localStorage.setItem('about_meet', value)
    },
    environment: (value) => {
      localStorage.setItem('environment', value)
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('advices/nonFormalMeetings', this.frequency)
      this.$store.dispatch('advices/daysFromOffice', this.work_from_office)
      this.$store.dispatch('advices/aboutMeetings', this.about_meet)
      this.$store.dispatch('advices/yourOpinion', this.environment)
      this.$store.dispatch('advices/postData', this.$store._state.data)
    },
    redirectBack() {
      this.$router.push({ path: '/vaccination' })
    }
  }
}
</script>
