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

  public round: number = 0;
  public progress: number = 0;
  public roundPhrase: Sentences;

  constructor() {
    this.roundPhrase = this.sentences[this.round];

    console.log(this.roundPhrase);
  }

  ngOnInit() {}

  updateResponse(response: Event): void {
    this.response = (<HTMLInputElement>response.target).value;
    // console.log(this.response);
  }

  verifyResponse(): void {
    // console.log("Verificar resposta: " + this.response);
    if (this.response === this.roundPhrase.phrasePtbr) {
      // Atualiza roda
      this.round++;

      //Progresso
      this.progress = this.progress + 100 / this.sentences.length;

      // Atualiza frase
      this.roundPhrase = this.sentences[this.round];
    }
  }
}
