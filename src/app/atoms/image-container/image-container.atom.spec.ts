import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageContainerAtom } from './image-container.atom';

describe('ImageContainerAtom', () => {
  let component: ImageContainerAtom;
  let fixture: ComponentFixture<ImageContainerAtom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageContainerAtom ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageContainerAtom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
