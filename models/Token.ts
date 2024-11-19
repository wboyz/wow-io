export class Token {
  private readonly expires_at: number;

  private constructor(
    public access_token: string,
    public token_type: string,
    public expires_in: number,
    public sub: string,
    expires_at?: number,
  ) {
    this.expires_at = expires_at ?? Date.now() + expires_in * 1000;
  }

  static fromTokenResponse(token: Token): Token {
    return new Token(
      token.access_token,
      token.token_type,
      token.expires_in,
      token.sub,
    );
  }

  static fromObject(json: Token): Token {
    return new Token(
      json.access_token,
      json.token_type,
      json.expires_in,
      json.sub,
      json.expires_at,
    );
  }

  expired(expirationWindowInSeconds: number = 5): boolean {
    return (
      this.expires_at - (Date.now() + expirationWindowInSeconds * 1000) <= 0
    );
  }
}
