import { Component, OnInit } from '@angular/core';
import { galleryList } from './tools';
import { GalleryItem } from './models';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  imageList: GalleryItem[] = [...galleryList];
  selectedImage: GalleryItem = this.imageList[0];
  currentIndex: number = 0;
  imgCurrentIndex: number = 0
  isPlaying: boolean = false;
  interval: any;
  itemsPerPage: number = 3;

  constructor() { }

  ngOnInit(): void {
  }

  selectImage(image: GalleryItem): void {
    this.selectedImage = image;
    this.imgCurrentIndex = this.imageList.indexOf(image);
  }

  next(): void {
    if (this.currentIndex < this.imageList.length - 1) {
      this.currentIndex++;
    }
  }

  previous(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  play(): void {
    this.isPlaying = true;
    this.interval = setInterval(() => {
      if (this.imgCurrentIndex < this.imageList.length - 1) {
        this.imgCurrentIndex++;
        this.selectImage(this.imageList[this.imgCurrentIndex]);
      }else{
        clearInterval(this.interval);
        this.isPlaying = false;
      }
    }, 2000);
  }

  stop(): void {
    clearInterval(this.interval);
    this.isPlaying = false;
  }

  increaseSize(): void {
    // Implementa el código para aumentar el tamaño de la imagen seleccionada
  }

  decreaseSize(): void {
    // Implementa el código para disminuir el tamaño de la imagen seleccionada
  }

  isFirstGroup(): boolean {
    return this.currentIndex === 0;
  }
  isLastGroup(): boolean {
    return this.currentIndex + this.itemsPerPage >= this.imageList.length;
  }

}
