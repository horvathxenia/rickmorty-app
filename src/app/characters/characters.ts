import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-characters',
  standalone: true,
  templateUrl: './characters.html',
  styleUrls: ['./characters.css']
})
export class Characters implements OnInit {
  characters = signal<any[]>([]);
  currentPage = signal(1);
  search = signal('');
  ngOnInit() {
    this.loadCharacters();
  }

  async loadCharacters() {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.currentPage()}`);
    const data = await response.json();
    this.characters.set(data.results);
  }

  nextPage() {
    this.currentPage.set(this.currentPage() + 1);
    this.loadCharacters();
  }

  previousPage() {
    if (this.currentPage() > 1) {
      this.currentPage.set(this.currentPage() - 1);
      this.loadCharacters();
    }
  }
}