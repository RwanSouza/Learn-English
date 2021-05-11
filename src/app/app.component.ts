import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  public gameProgress: boolean = true;
  public typeEnd: string;

  endGame(type: string): void {
    this.gameProgress = false;
    this.typeEnd = type;
  }

  restartGame(): void {
    this.gameProgress = true;
    this.endGame = undefined;
  }
}
