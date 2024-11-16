export class Token {
  private expires_at: number;

  private constructor(
    public access_token: string,
    public token_type: string,
    public expires_in: number,
    public sub: string,
    expires_at?: number,
  ) {
    this.expires_at = expires_at ? expires_at : Date.now() + expires_in * 1000;
  }

  static fromTokenResponse(token: Token): Token {
    return new Token(
      token.access_token,
      token.token_type,
      token.expires_in,
      token.sub,
    );
  }

  static fromJson(json: string): Token {
    const obj = JSON.parse(json);
    return new Token(
      obj.access_token,
      obj.token_type,
      obj.expires_in,
      obj.sub,
      obj.expires_at,
    );
  }

  toJson(): string {
    return JSON.stringify({
      access_token: this.access_token,
      token_type: this.token_type,
      expires_in: this.expires_in,
      expires_at: this.expires_at,
      sub: this.sub,
    });
  }

  expired(expirationWindowInSeconds: number = 5): boolean {
    return (
      this.expires_at - (Date.now() + expirationWindowInSeconds * 1000) <= 0
    );
  }
}
