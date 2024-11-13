<script lang="ts" setup>
import realms from '@/data/realms';
import type { Realm } from '@/types/Realm';
import { computed, ref } from 'vue';

const emit = defineEmits<(e: 'selected', response: string) => void>();

const search = ref('');

const searchStarted = ref(false);

const selectOption = (option: Realm) => {
  searchStarted.value = false;
  search.value = option.name;
  emit('selected', option.slug);
};

const filteredRealms = computed(() => {
  return realms.filter(realm =>
    realm.name.toLowerCase().includes(search.value.toLowerCase()),
  );
});

const height = computed(() => {
  return `max-height: ${Math.min(filteredRealms.value.length, 4) * 4}rem`;
});
</script>

<template>
  <label
    for="realm"
    class="relative input input-bordered flex items-center gap-2"
  >
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
      v-model="search"
      placeholder="Realm"
      id="realm"
      @input="searchStarted = true"
      autocomplete="off"
    />
    <ul
      class="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg overflow-y-auto top-12 left-0"
      :style="height"
      v-show="searchStarted"
    >
      <li
        v-for="option in filteredRealms"
        :key="option.slug"
        @click="selectOption(option)"
        class="cursor-pointer p-2 hover:bg-gray-200 realm-option"
      >
        {{ option.name }}
      </li>
    </ul>
  </label>
</template>
