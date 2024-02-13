import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[rotate]',
  standalone: true
})
export class RotateDirective {

  @Input('rotate') initialRotation: number = 0;
  @Input() step: number = 10;

  private currentRotation: number = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit() {
    this.currentRotation = this.initialRotation;
    this.rotateElement(this.currentRotation);
  }

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    const rotateBackwards = event.shiftKey;
    if (rotateBackwards) {
      this.currentRotation -= this.step;
    } else {
      this.currentRotation += this.step;
    }
    this.rotateElement(this.currentRotation);
  }

  private rotateElement(degrees: number) {
    this.renderer.setStyle(this.el.nativeElement, 'transform', `rotate(${degrees}deg)`);
  }
}
