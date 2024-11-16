<script setup lang="ts">
import type { Rating } from '@/types/MythicKeystoneProfileSeason/Rating';
import { computed } from 'vue';

const props = defineProps<{
  rating: Rating;
}>();

const roundedRating = computed(() => Math.round(props.rating.rating));

const ratingColor = computed(
  () =>
    `rgba(${props.rating.color.r},${props.rating.color.g},${props.rating.color.b},${props.rating.color.a})`,
);
const borderColor = computed(() => `border-color: ${ratingColor.value}; `);
</script>
<template>
  <div
    v-if="rating.rating > 0"
    class="badge badge-outline p-4 text-lg font-bold gap-2"
    :style="borderColor"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :fill="`rgba(${props.rating.color.r},${props.rating.color.g},${props.rating.color.b},${props.rating.color.a})`"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      :stroke="ratingColor"
      class="inline-block h-5 w-5 stroke-current"
      :style="`color: ${ratingColor}`"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>

    {{ roundedRating }}
  </div>
</template>
