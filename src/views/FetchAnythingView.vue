<script lang="ts" setup>
import FetchAnythingCode from '@/components/FetchAnythingCode.vue';
import FetchAnythingForm from '@/components/FetchAnythingForm.vue';
import { ref } from 'vue';

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
