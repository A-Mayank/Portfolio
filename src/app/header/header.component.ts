import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  styles: [`
    :host {
      display: block;
      color:rgb(245, 245, 245); /* Replace with your desired color */
      width: 100%;
      height: 100%;
    }
  `]
})
export class HeaderComponent {
  constructor(private router: Router) { }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
currentIndex: number = 0;
  slides = [0, 1, 2, 3]; // Replace with the number of slides in your slider

  moveSlide(direction: number) {
    const slidesCount = this.slides.length;

    // Update the current index
    this.currentIndex = (this.currentIndex + direction + slidesCount) % slidesCount;

    // Update slider position
    const slider = document.querySelector('.slider-window') as HTMLElement;
    const translateX = -this.currentIndex * 100; // 100% for each slide
    slider.style.transform = `translateX(${translateX}%)`;
  }

  goToSlide(index: number) {
    this.currentIndex = index;

    // Update slider position
    const slider = document.querySelector('.slider-window') as HTMLElement;
    const translateX = -this.currentIndex * 100; // 100% for each slide
    slider.style.transform = `translateX(${translateX}%)`;
  }
}
