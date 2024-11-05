<script setup lang="ts">
import { ref } from 'vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import MythicProfileForm from '@/components/MythicKeystoneProfileForm.vue';
import MythicProfileList from '@/components/MythicKeystoneProfileList.vue';
import type { MythicDungeon } from '@/types/MythicDungeon';

const dungeons: Array<MythicDungeon> = [
  {
    id: 376,
    name: 'The Necrotic Wake',
    score: 110,
    keyNumber: 4,
  },
  {
    id: 353,
    name: 'Siege of Boralus',
    score: 200,
    keyNumber: 4,
  },
  {
    id: 505,
    name: 'The Dawnbreaker',
    score: 300,
    keyNumber: 4,
  },
  {
    id: 507,
    name: 'Grim Batol',
    score: 200,
    keyNumber: 3,
  },
  {
    id: 501,
    name: 'The Stonevault',
    score: 150,
    keyNumber: 5,
  },
  {
    id: 502,
    name: 'City of Threads',
    score: 101,
    keyNumber: 8,
  },
  {
    id: 503,
    name: 'Ara-Kara, City of Echoes',
    score: 200,
    keyNumber: 74,
  },
  {
    id: 375,
    name: 'Mists of Tirna Scithe',
    score: 234,
    keyNumber: 6,
  },
];

const loaded = ref(false);
</script>

<template>
  <main class="lg:container mx-auto px-6 mt-6 flex flex-1 flex-col w-full">
    <MythicProfileForm />

    <LoadingSpinner v-if="!loaded" />

    <MythicProfileList :dungeons="dungeons" v-if="loaded" />
  </main>
</template>
