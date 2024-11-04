<script setup lang="ts">
import { useTemplateRef, onMounted } from 'vue';

const inputRef = useTemplateRef('realm');

onMounted(() => {
  inputRef.value?.focus();
});
</script>
<template>
  <form action="" class="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <label class="input input-bordered flex items-center gap-2" for="realm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-4 w-4 opacity-70"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M5.25 14.25h13.5m-13.5 0a3 3 0 0 1-3-3m3 3a3 3 0 1 0 0 6h13.5a3 3 0 1 0 0-6m-16.5-3a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3m-19.5 0a4.5 4.5 0 0 1 .9-2.7L5.737 5.1a3.375 3.375 0 0 1 2.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 0 1 .9 2.7m0 0a3 3 0 0 1-3 3m0 3h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Zm-3 6h.008v.008h-.008v-.008Zm0-6h.008v.008h-.008v-.008Z"
        />
      </svg>

      <input
        type="text"
        class="h-12 w-full"
        placeholder="Realm"
        id="realm"
        name="realm"
        ref="realm"
      />
    </label>

    <label class="input input-bordered flex items-center gap-2" for="character">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="h-4 w-4 opacity-70"
      >
        <path
          d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"
        />
      </svg>
      <input
        type="text"
        class="h-12 w-full"
        placeholder="Character"
        id="character"
        name="character"
      />
    </label>

    <button class="btn btn-outline btn-primary w-full">Get</button>
  </form>
</template>
