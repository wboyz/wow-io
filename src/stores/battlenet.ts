import type { BattleNetClient } from '@/services/BattleNetClient';
import { defineStore } from 'pinia';
import { inject, ref } from 'vue';

export const useBattleNetStore = defineStore('battlenet', () => {
  const loading = ref(false);
  const battleNetClient = inject('battleNetClient') as BattleNetClient;

  async function mythicKeystoneProfileSeason(realm: string, character: string) {
    loading.value = true;
    const response = await battleNetClient.fetchMythicKeystoneProfileSeason(
      realm,
      character,
    );
    loading.value = false;
    return response;
  }

  return { mythicKeystoneProfileSeason, loading };
});
