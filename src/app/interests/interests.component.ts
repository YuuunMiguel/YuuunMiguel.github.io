import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent {
  interests: Array<any> = [];

  ngOnInit(): void {
    this.interests = [
      { description: "Desarrollo de software" },
      { description: "Videojuegos" },
      { description: "Innovación tecnológica" },
      { description: "Origami" },
      { description: "Karaoke e improvisación" },
      { description: "Música" }
    ];
  }
}
