import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectSection {
  type: "heading" | "paragraph" | "list";
  content: string | string[];
}
@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})

export class ProjectComponent {
  project1Expanded = false;
  project2Expanded = false;
  project3Expanded = false;

}
