<template>
  <TheAdvice :stage="message" />
  <div
    v-if="message == 'had_covid_and_planning_to_be_vaccinated'"
    class="mt-10 ml-14 text-xl font-normal"
  >
    <p>
      ახალი პროტოკოლით კოვიდის გადატანიდან 1 <br />
      თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.
    </p>
    <p class="mt-5">
      👉 რეგისტრაციის ბმული <br />
      <a class="text-[#1289AE]" href="https://booking.moh.gov.ge/"> https://booking.moh.gov.ge/</a>
    </p>
  </div>
</template>

<script>
import TheAdvice from './TheAdvice.vue'
export default {
  props: ['message'],
  components: { TheAdvice }
}
</script>
