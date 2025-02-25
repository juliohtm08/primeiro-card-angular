import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Card {
  titulo: string;
  subtitulo: string;
  imagem: string;
  descricao: string;
  curtidas: number;
  icone: string;
}

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
})
export class CardsComponent {
  cards: Card[] = [
    {
      titulo: 'Amir GOAT SUPREMO',
      subtitulo: 'AMIR feito diferente',
      imagem:
        'https://yt3.googleusercontent.com/YuCnBDa_mJZUbWEfQ6UKHvIKMZYFDthLTMLCjwqnahWLPse1wwS-ESBL_kFNDhRyZPN0SuX5cA=s900-c-k-c0x00ffffff-no-rj',
      descricao: 'Réis Réis',
      curtidas: 0,
      icone: 'favorite',
    },
  ];

  curtir(card: Card): void {
    card.curtidas++;
  }

  compartilhar(card: Card): void {
    alert(`Compartilhando: ${card.titulo}`);
  }
}
