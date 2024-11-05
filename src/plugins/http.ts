import { Token } from '@/models/Token';
import { BattleNetClient } from '@/services/BattleNetClient';
import ky from 'ky';
import type { App } from 'vue';

export default {
  install: async (app: App) => {
    let token: Token | null;
    const tokenString = localStorage.getItem('token');
    if (tokenString) {
      token = Token.fromJson(tokenString);
    } else {
      const clientId = import.meta.env.VITE_BATTLENET_CLIENT_ID as string;
      const clientSecret = import.meta.env
        .VITE_BATTLENET_CLIENT_SECRET as string;
      const body = new FormData();
      body.append('grant_type', 'client_credentials');
      const tokenResponse = await ky
        .post('https://oauth.battle.net/token', {
          headers: {
            Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`),
          },
          body,
        })
        .json<Token>();
      token = Token.fromTokenResponse(tokenResponse);
      localStorage.setItem('token', token.toJson());
    }

    const http = ky.create({
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    });

    const battleNetClient = new BattleNetClient(http);
    app.provide('battleNetClient', battleNetClient);
  },
};
