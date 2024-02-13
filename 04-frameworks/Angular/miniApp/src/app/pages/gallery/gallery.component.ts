import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryCarouselComponent } from './components/gallery-carousel/gallery-carousel.component';
import { GalleryRotationComponent } from './components/gallery-rotation/gallery-rotation.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule,GalleryRotationComponent,  GalleryCarouselComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  isGalleryActive: boolean = true;

  changeGallery(): void {
    this.isGalleryActive = !this.isGalleryActive;
  }
}
