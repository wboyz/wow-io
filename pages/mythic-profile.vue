<script setup lang="ts">
import type { Run } from '@/types/MythicKeystoneProfileSeason/Run';

definePageMeta({
  layout: 'authenticated',
});

const battleNetStore = useBattleNetStore();
const { loading, error } = storeToRefs(battleNetStore);

const runs = ref<Run[]>([]);
const realm = ref('');
const character = ref('');

async function search(r: string, c: string) {
  realm.value = r;
  character.value = c;
  const response = await battleNetStore.mythicKeystoneProfileSeason(r, c);

  runs.value = response?.best_runs ?? [];
}
</script>

<template>
  <main class="lg:container mx-auto px-6 mt-6 flex flex-1 flex-col w-full">
    <div class="flex flex-row-reverse justify-between">
      <MythicKeystoneProfileForm @submit="search" />

      <ProfileCard
        v-if="realm && character"
        :realm="realm"
        :character="character"
      />
    </div>

    <LoadingSpinner v-if="loading" />

    <MythicKeystoneAlert class="mt-6" :error="error" v-if="!loading" />

    <MythicKeystoneProfileList :runs="runs" v-if="!loading && !error" />
  </main>
</template>
