<script setup lang="ts">
import { ref } from 'vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import MythicProfileForm from '@/components/MythicKeystoneProfileForm.vue';
import MythicProfileList from '@/components/MythicKeystoneProfileList.vue';
import { useBattleNetStore } from '@/stores/battlenet';
import type { Run } from '@/types/MythicKeystoneProfileSeason/Run';
import { storeToRefs } from 'pinia';

const battleNetStore = useBattleNetStore();
const { loading } = storeToRefs(battleNetStore);
const runs = ref<Run[]>([]);

async function search(realm: string, character: string) {
  const response = await battleNetStore.mythicKeystoneProfileSeason(
    realm,
    character,
  );

  runs.value = response.best_runs;
}
</script>

<template>
  <main class="lg:container mx-auto px-6 mt-6 flex flex-1 flex-col w-full">
    <MythicProfileForm @submit="search" />

    <LoadingSpinner v-if="loading" />

    <MythicProfileList :runs="runs" v-if="!loading" />
  </main>
</template>
