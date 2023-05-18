<template>
  <div v-if="message == 'lets_register'" class="mt-10 ml-14">
    <p class="text-xl font-normal">
      რომ არ გადადო, <br />
      ბარემ ახლავე დარეგისტრირდი <br />
      <a class="text-[#1289AE]" href="https://booking.moh.gov.ge/">https://booking.moh.gov.ge/</a>
    </p>
  </div>
  <div v-if="message == 'not_planned'" class="mt-10 ml-14">
    <p class="text-xl font-normal">
      👉
      <a class="text-[#1289AE]" href="https://booking.moh.gov.ge/"> https://booking.moh.gov.ge/</a>
    </p>
  </div>
  <div v-if="message == 'had_already'" class="mt-10 ml-14 text-xl font-normal">
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
export default {
  props: ['message']
}
</script>
