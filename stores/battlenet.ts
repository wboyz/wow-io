import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useBattleNetStore = defineStore('battlenet', () => {
  const loading = ref(false);
  const error = ref<string | null>(null);
  const { $battleNetClient } = useNuxtApp();

  async function mythicKeystoneProfileSeason(realm: string, character: string) {
    loading.value = true;
    error.value = null;

    try {
      const response = await $battleNetClient.fetchMythicKeystoneProfileSeason(
        realm,
        character,
      );
      return response;
    } catch (exception) {
      loading.value = false;

      if (exception instanceof Error) {
        error.value = exception.message;
        console.error('Fetch error:', exception.message);
        throw error;
      } else {
        error.value = 'Unknown error occurred';
        console.error(exception);
      }

      return { best_runs: [] };
    } finally {
      loading.value = false;
    }
  }

  return { mythicKeystoneProfileSeason, loading, error };
});
