import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  education: Array<any> = [];

  ngOnInit(): void {
    let education1 = {
      grado: "Ingeniería de Software",
      universidad: "Universidad Veracruzana",
      semestre: "Séptimo semestre"
    };

    this.education.push(education1);
    console.log(this.education);
  }
}