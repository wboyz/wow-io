<script setup lang="ts">
import MythicKeystoneProfileListItem from '@/components/MythicKeystoneProfileListItem.vue';
import type { Run } from '@/types/MythicKeystoneProfileSeason/Run';
import { computed } from 'vue';

const props = defineProps<{
  runs: Array<Run>;
}>();

const bestRuns = computed(() =>
  Object.values(
    props.runs.reduce(
      (acc, run) => {
        if (acc[run.dungeon.id] === undefined) {
          acc[run.dungeon.id] = run;
        } else if (
          acc[run.dungeon.id].map_rating.rating < run.map_rating.rating
        ) {
          acc[run.dungeon.id] = run;
        }

        return acc;
      },
      {} as Record<number, Run>,
    ),
  ).sort((a, b) => b.map_rating.rating - a.map_rating.rating),
);
</script>

<template>
  <div class="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
    <MythicKeystoneProfileListItem
      v-for="(run, index) in bestRuns"
      :run="run"
      :key="index"
    />
  </div>
</template>
