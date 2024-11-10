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

const hideOnBlur = () => {
  setTimeout(() => {
    searchStarted.value = false;
  }, 100);
};
</script>

<template>
  <div class="relative">
    <input
      type="text"
      class="input input-bordered w-full max-w-xs"
      v-model="search"
      placeholder="Realm"
      @focus="searchStarted = true"
      @blur="hideOnBlur"
    />
    <ul
      class="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-lg overflow-y-auto"
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
  </div>
</template>
