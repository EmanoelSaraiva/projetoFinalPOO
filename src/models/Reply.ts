export class Reply {
  public userId: string;
  public content: string;

  constructor(userId: string, content: string) {
    this.userId = userId;
    this.content = content;
  }
}
