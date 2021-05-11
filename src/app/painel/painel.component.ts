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
  public response: string = "";

  public round: number = 0;
  public attempts: number = 3;
  public progress: number = 0;
  public roundPhrase: Sentences;

  constructor() {
    this.updateRound();
  }

  ngOnInit() {}

  updateResponse(response: Event): void {
    this.response = (<HTMLInputElement>response.target).value;
  }

  verifyResponse(): void {
    if (this.response === this.roundPhrase.phrasePtbr) {
      // Atualiza roda
      this.round++;

      //Progresso
      this.progress = this.progress + 100 / this.sentences.length;

      // Atualiza frase
      this.updateRound();
    } else {
      this.attempts--;

      if (this.attempts === -1) {
        alert("Você perdeu seus 3 corações");
      }
    }
  }

  updateRound(): void {
    this.roundPhrase = this.sentences[this.round];

    // Limpar a resposta
    this.response = "";
  }
}
