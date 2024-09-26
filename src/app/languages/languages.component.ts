import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent {
  languages: Array<any> = [];

  ngOnInit(): void {
    this.languages = [
      { name: "Español", level: "Nativo" },
      { name: "Inglés", level: "Avanzado" },
      { name: "Francés", level: "Intermedio" }
    ];
  }
}
