import type { MythicKeystoneProfileSeason } from '@/types/MythicKeystoneProfileSeason/MythicKeystoneProfileSeason';
import type { KyInstance } from 'ky';

export class BattleNetClient {
  private static readonly season: number = 13;
  private static readonly namespace: string = 'profile-eu';
  private static readonly locale: string = 'en_US';
  private static readonly baseUrl: string = 'https://eu.api.blizzard.com';

  constructor(private readonly client: KyInstance) {}

  fetchMythicKeystoneProfileSeason(realm: string, character: string) {
    const queryString = this.buildQueryString();
    const urlPath = this.buildUrl(realm, character);

    return this.client
      .get(`${urlPath}?${queryString}`)
      .json<MythicKeystoneProfileSeason>();
  }

  fetchAnything(url: string, namespace: string): Promise<object> {
    const queryString = new URLSearchParams();
    queryString.append('namespace', namespace);
    queryString.append('locale', BattleNetClient.locale);
    return this.client
      .get(`${BattleNetClient.baseUrl}/${url}?${queryString}`)
      .json();
  }

  private buildUrl(realm: string, character: string) {
    return `${BattleNetClient.baseUrl}/profile/wow/character/${realm}/${character}/mythic-keystone-profile/season/${BattleNetClient.season}`;
  }

  private buildQueryString() {
    const queryString = new URLSearchParams();
    queryString.append('namespace', BattleNetClient.namespace);
    queryString.append('locale', BattleNetClient.locale);
    return queryString;
  }
}
