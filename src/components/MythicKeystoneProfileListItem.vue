<script setup lang="ts">
import type { MythicDungeon } from '@/types/MythicDungeon';

defineProps<{
  dungeon: MythicDungeon;
}>();
</script>

<template>
  <div class="text-center shadow rounded-lg bg-accent-content p-6">
    <div>
      <div class="avatar online">
        <div class="w-16 rounded-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
      </div>
    </div>
    <div class="text-primary">{{ dungeon.name }}</div>
    <div class="text-secondary text-3xl font-bold">{{ dungeon.score }}</div>
    <div class="">Best run: 25:14</div>
  </div>
</template>
