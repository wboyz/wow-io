<script setup lang="ts">
import type { Run } from '@/types/MythicKeystoneProfileSeason/Run';
import MythicMapScoreBadge from './MythicMapScoreBadge.vue';
import MythicMapScoreDuration from './MythicMapScoreDuration.vue';

defineProps<{ run: Run }>();
</script>

<template>
  <div
    class="card glass bg-base-100 shadow-lg transition-shadow duration-300 cursor-pointer hover:shadow-xl group"
  >
    <figure class="overflow-hidden">
      <img
        :src="`/images/dungeons/${run.dungeon.id}.jpg`"
        class="transition-all duration-300 group-hover:scale-110"
        :alt="run.dungeon.name"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title justify-between font-bold">
        <span class="text-shadow">{{ run.dungeon.name }}</span>
        <div class="badge badge-warning text-lg p-3">
          {{ run.keystone_level }}
        </div>
      </h2>
      <div class="card-actions justify-between mt-4">
        <MythicMapScoreDuration :duration="run.duration" />
        <MythicMapScoreBadge :rating="run.map_rating" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-shadow {
  text-shadow: 1px 2px 2px black;
}
</style>
