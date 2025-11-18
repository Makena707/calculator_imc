import { Component } from '@angular/core';
import { CardHeader } from "./components/card-header/card-header";
import { CardForm } from "./components/card-form/card-form";

@Component({
  selector: 'app-card',
  imports: [CardHeader, CardForm],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card { }
