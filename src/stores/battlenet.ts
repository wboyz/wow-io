import type { MythicKeystoneProfile } from '@/types/MythicKeystoneProfile/MythicKeystoneProfile';
import type { MythicKeystoneProfileSeason } from '@/types/MythicKeystoneProfileSeason/MythicKeystoneProfileSeason';
import { type KyInstance } from 'ky';
import { defineStore } from 'pinia';
import { inject } from 'vue';

export const useBattlenetStore = defineStore('battlenet', () => {
  async function getBestRunes() {
    const $http: KyInstance = inject('$http')!;
    const response = await $http
      .get(
        'profile/wow/character/ravencrest/eeteron/mythic-keystone-profile?namespace=profile-eu&locale=en_US',
      )

      .json<MythicKeystoneProfile>();

    // const r2 = await $http
    //   .get(
    //     `data/wow/mythic-keystone/period/${response.current_period.period.id}?namespace=dynamic-eu&locale=en_US`,
    //   )
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   .json<any>();

    const r2 = await $http
      .get(
        `profile/wow/character/ravencrest/eeteron/mythic-keystone-profile/season/13?namespace=profile-eu&locale=en_US`,
      )

      .json<MythicKeystoneProfileSeason>();

    console.log(response);

    return response;
  }

  return { getProfile: getBestRunes };
});
