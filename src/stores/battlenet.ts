import type { BattleNetClient } from '@/services/BattleNetClient';
import { defineStore } from 'pinia';
import { inject } from 'vue';

export const useBattleNetStore = defineStore('battlenet', () => {
  async function mythicKeystoneProfileSeason(realm: string, character: string) {
    const battleNetClient = inject('battleNetClient') as BattleNetClient;
    const response = await battleNetClient.fetchMythicKeystoneProfileSeason(
      realm,
      character,
    );
    return response;
  }

  return { mythicKeystoneProfileSeason };
});
