<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  duration: number;
}>();

function formatMilliseconds(ms: number): string {
  const minutes = Math.floor(ms / 60000);
  const seconds = ((ms % 60000) / 1000).toFixed(3);
  return `${minutes}:${seconds.padStart(6, '0')}`;
}

const duration = computed(() => formatMilliseconds(props.duration));
</script>

<template>
  <div class="badge badge-accent p-4 gap-2 text-lg font-bold">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="inline-block h-5 w-5 stroke-current"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
    {{ duration }}
  </div>
</template>
