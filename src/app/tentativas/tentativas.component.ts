import { Component, OnInit, OnChanges, Input } from "@angular/core";
import { Heart } from "../shared/heart.model";

@Component({
  selector: "app-tentativas",
  templateUrl: "./tentativas.component.html",
  styleUrls: ["./tentativas.component.css"],
})
export class TentativasComponent implements OnInit, OnChanges {
  @Input() public attempts: number;

  public hearts: Array<Heart> = [
    new Heart(true),
    new Heart(true),
    new Heart(true),
  ];

  constructor() {}

  ngOnChanges() {
    if (this.attempts !== this.hearts.length) {
      this.hearts[this.attempts].full = false;
    }
  }

  ngOnInit() {}
}
