<template>
  <div class="text-xl font-normal mt-10 ml-14">
    <p v-if="stage === 'lets_register'">
      რომ არ გადადო, <br />
      ბარემ ახლავე დარეგისტრირდი <br />
      <a class="text-[#1289AE]" href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
    </p>
    <p v-else-if="stage === 'not_planning'">
      👉
      <a class="text-[#1289AE]" href="https://booking.moh.gov.ge/"> https://booking.moh.gov.ge/</a>
    </p>
  </div>
</template>

<script>
export default {
  props: ['stage']
}
</script>
