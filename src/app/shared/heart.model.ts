export class Heart {
  constructor(
    public full: boolean,
    public urlHeartFull: string = "/assets/coracao_cheio.png",
    public urlHeartEmpty: string = "assets/coracao_vazio.png"
  ) {}

  showHeart(): string {
    if (this.full) {
      return this.urlHeartFull;
    } else {
      return this.urlHeartEmpty;
    }
  }
}
