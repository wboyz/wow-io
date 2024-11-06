<script setup lang="ts">
import type { Run } from '@/types/MythicKeystoneProfileSeason/Run';
import { computed } from 'vue';

const props = defineProps<{
  run: Run;
}>();

function formatMilliseconds(ms: number): string {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(3);
  return `${minutes}:${seconds.padStart(6, '0')}`;
}

const duration = computed(() => formatMilliseconds(props.run.duration));
</script>

<template>
  <div
    class="text-center rounded-lg bg-accent-content py-8 px-2 relative shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg group overflow-hidden lg:py-1 xl:py-5 2xl:py-8"
  >
    <div class="w-full mx-auto h-auto overflow-hidden rounded-lg float-left">
      <img
        :src="`/images/dungeons/${run.dungeon.id}.jpg`"
        :alt="run.dungeon.name"
        class="w-full h-auto z-0 transition-all duration-300 group-hover:scale-110 absolute top-0 left-0 object-cover"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black opacity-85"
      ></div>
    </div>
    <div class="relative flex flex-col gap-4 sm:gap-2">
      <div class="text-primary font-bold">{{ run.dungeon.name }}</div>
      <div class="text-secondary text-3xl font-bold">
        {{ run.keystone_level }}
      </div>
      <div class="align-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="inline-block w-6 h-6 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        {{ duration }}
      </div>
    </div>
  </div>
</template>
