import type { Token } from '@/types/Token';
import ky from 'ky';
import { defineStore } from 'pinia';

export const useBattlenetStore = defineStore('battlenet', () => {
  const clientId = import.meta.env.VITE_BATTLENET_CLIENT_ID as string;
  const clientSecret = import.meta.env.VITE_BATTLENET_CLIENT_SECRET as string;
  const body = new FormData();
  body.append('grant_type', 'client_credentials');
  async function token() {
    const response = await ky
      .post('https://oauth.battle.net/token', {
        headers: {
          Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`),
        },
        body,
      })
      .json<Token>();

    return response;
  }

  return { token };
});
