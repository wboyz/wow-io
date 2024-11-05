<script setup lang="ts">
import MythicKeystoneProfileListItem from '@/components/MythicKeystoneProfileListItem.vue';
import type { MythicDungeon } from '@/types/MythicDungeon';

defineProps<{
  dungeons: Array<MythicDungeon>;
}>();
</script>

<template>
  <div class="mt-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
    <MythicKeystoneProfileListItem
      v-for="dungeon in dungeons"
      :dungeon="dungeon"
      :key="dungeon.id"
    />
  </div>
</template>
