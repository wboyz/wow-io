<script lang="ts" setup>
definePageMeta({
  layout: 'authenticated',
});
const response = ref<string>('');

const fetched = (res: string) => {
  response.value = res;
};
</script>

<template>
  <main
    class="lg:container mx-auto px-6 mt-6 flex flex-1 flex-col w-full gap-16"
  >
    <FetchAnythingForm @fetched="fetched" />
    <FetchAnythingCode :code="response" />
  </main>
</template>
