export class User {
  public constructor(
    public readonly Id: number,
    public readonly email: string,
    public readonly name: string,
    public readonly nickname: string,
    public readonly isAdmin: boolean,
    public readonly description: string,
  ) {}
}
