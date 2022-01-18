import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpageCarouselComponent } from './frontpage-carousel.component';

describe('FrontpageCarouselComponent', () => {
  let component: FrontpageCarouselComponent;
  let fixture: ComponentFixture<FrontpageCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontpageCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontpageCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
