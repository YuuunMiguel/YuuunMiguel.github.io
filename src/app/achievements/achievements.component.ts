import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent {
  achievements: Array<any> = [];

  ngOnInit(): void {
    this.achievements = [
      { description: "Certificación en Desarrollo de Software" },
      { description: "Participación en Hackathon Nacional" },
      { description: "Proyecto de Investigación sobre IA" },
      { description: "Voluntariado en proyectos comunitarios" }
    ];
  }
}
