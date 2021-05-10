import { Component, OnInit } from "@angular/core";

import { Sentences } from "../shared/sentence.model";
import { Phrases } from "./phrase.mock";

@Component({
  selector: "app-painel",
  templateUrl: "./painel.component.html",
  styleUrls: ["./painel.component.css"],
})
export class PainelComponent implements OnInit {
  public sentences: Array<Sentences> = Phrases;
  public instruction: string = "Traduza a frase:";
  public response: string;

  constructor() {
    console.log(this.sentences);
  }

  ngOnInit() {}

  updateResponse(response: Event): void {
    this.response = (<HTMLInputElement>response.target).value;
    // console.log(this.response);
  }

  verifyResponse(): void {
    console.log("Verificar resposta: " + this.response);
  }
}
