import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryRotationComponent } from './gallery-rotation.component';

describe('GalleryRotationComponent', () => {
  let component: GalleryRotationComponent;
  let fixture: ComponentFixture<GalleryRotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryRotationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleryRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
