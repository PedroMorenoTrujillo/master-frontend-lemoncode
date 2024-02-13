import { Component } from '@angular/core';
import { RotateDirective } from 'app/pipes/rotate.directive';
import { GalleryItem } from '../../models';
import { galleryList } from '../../tools';

@Component({
  selector: 'app-gallery-rotation',
  standalone: true,
  imports: [RotateDirective],
  templateUrl: './gallery-rotation.component.html',
  styleUrl: './gallery-rotation.component.scss'
})
export class GalleryRotationComponent {
  image: GalleryItem = galleryList[0]
}
