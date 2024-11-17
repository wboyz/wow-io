import { Token } from '@/models/Token';
import { BattleNetClient } from '@/services/BattleNetClient';
import ky from 'ky';

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig();
  let token: Token | null;
  const tokenString = useCookie<Token>('token', { sameSite: true });

  if (!tokenString.value || Token.fromObject(tokenString.value).expired()) {
    const clientId = config.battleNetClientId;
    const clientSecret = config.battleNetClientSecret;
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
    tokenString.value = token;
  } else {
    token = Token.fromObject(tokenString.value);
  }

  const http = ky.create({
    headers: {
      Authorization: `Bearer ${token.access_token}`,
    },
  });

  const battleNetClient = new BattleNetClient(http);

  return {
    provide: {
      battleNetClient: battleNetClient,
    },
  };
});
