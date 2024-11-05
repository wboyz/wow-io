<script setup lang="ts">
import { ref } from 'vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import MythicProfileForm from '@/components/MythicKeystoneProfileForm.vue';
import MythicProfileList from '@/components/MythicKeystoneProfileList.vue';
import type { MythicDungeon } from '@/types/MythicDungeon';

const dungeons: Array<MythicDungeon> = [
  {
    id: 1,
    name: 'The Stonevault',
    score: 110,
    keyNumber: 4,
  },
  {
    id: 2,
    name: 'The Stonevault',
    score: 200,
    keyNumber: 4,
  },
  {
    id: 3,
    name: 'The Stonevault',
    score: 300,
    keyNumber: 4,
  },
  {
    id: 4,
    name: 'The Stonevault',
    score: 200,
    keyNumber: 3,
  },
  {
    id: 5,
    name: 'The Stonevault',
    score: 150,
    keyNumber: 5,
  },
  {
    id: 6,
    name: 'The Stonevault',
    score: 101,
    keyNumber: 8,
  },
  {
    id: 7,
    name: 'The Stonevault',
    score: 200,
    keyNumber: 74,
  },
  {
    id: 8,
    name: 'The Stonevault',
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
