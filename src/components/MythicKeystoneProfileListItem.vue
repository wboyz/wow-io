<script setup lang="ts">
import type { MythicDungeon } from '@/types/MythicDungeon';

defineProps<{
  dungeon: MythicDungeon;
}>();
</script>

<template>
  <div
    class="text-center rounded-lg bg-accent-content py-8 px-2 relative shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg group overflow-hidden lg:py-1 xl:py-5 2xl:py-8"
  >
    <div class="w-full mx-auto h-auto overflow-hidden rounded-lg float-left">
      <img
        :src="`/images/dungeons/${dungeon.id}.jpg`"
        :alt="dungeon.name"
        class="w-full h-auto z-0 transition-all duration-300 group-hover:scale-110 absolute top-0 left-0 object-cover"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-black opacity-85"
      ></div>
    </div>
    <div class="relative flex flex-col gap-4 sm:gap-2">
      <div class="text-primary font-bold">{{ dungeon.name }}</div>
      <div class="text-secondary text-3xl font-bold">{{ dungeon.score }}</div>
      <div class="">Best run: 25:14</div>
    </div>
  </div>
</template>
