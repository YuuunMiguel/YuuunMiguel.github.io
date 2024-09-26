import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Array<any> = [];

  ngOnInit(): void {
    this.skills = [
      { description: "Comunicación Verbal y Escrita" },
      { description: "Desarrollo Web" },
      { description: "Trabajo en Equipo" },
      { description: "Relación con el Cliente" },
      { description: "Creatividad" },
    ];
  }
}
