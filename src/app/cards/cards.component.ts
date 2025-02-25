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
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CardsComponent {
  cards: Card[] = [
    {
      titulo: 'Melhor time do mundo',
      subtitulo: 'Corinthians',
      imagem: 'https://a.espncdn.com/i/teamlogos/soccer/500/874.png',
      descricao: 'Esse time é o melhor do mundo.',
      curtidas: 0,
      icone: 'favorite'
    },
    {
      titulo: 'Pior time do mundo',
      subtitulo: 'Palmeiras',
      imagem: 'https://logodownload.org/wp-content/uploads/2015/05/palmeiras-logo-4.png',
      descricao: 'Esse time é o pior do mundo, e não tem mundial.',
      curtidas: 0,
      icone: 'star'
    }
  ];

  curtir(card: Card): void {
    card.curtidas++;
  }

  compartilhar(card: Card): void {
    alert(`Compartilhando: ${card.titulo}`);
  }
}
