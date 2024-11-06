<script setup lang="ts">
import MythicKeystoneProfileListItem from '@/components/MythicKeystoneProfileListItem.vue';
import type { Run } from '@/types/MythicKeystoneProfileSeason/Run';

defineProps<{
  runs: Array<Run>;
}>();
</script>

<template>
  <div class="mt-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
    <MythicKeystoneProfileListItem
      v-for="(run, index) in runs"
      :run="run"
      :key="index"
    />
  </div>
</template>
