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
<div class="card glass bg-base-100 shadow-lg transition-shadow duration-300 cursor-pointer hover:shadow-xl group">
  <figure class="overflow-hidden">
    <img
      :src="`/images/dungeons/${run.dungeon.id}.jpg`"
      class="transition-all duration-300 group-hover:scale-110"
      :alt="run.dungeon.name" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">
      {{ run.dungeon.name }}
      <div class="badge badge-secondary">{{ run.keystone_level }}</div>
    </h2>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">{{ duration }}</div>
    </div>
  </div>
</div>
</template>
