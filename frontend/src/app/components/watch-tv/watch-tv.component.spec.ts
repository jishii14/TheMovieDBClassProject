import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchTVComponent } from './watch-tv.component';

describe('WatchTVComponent', () => {
  let component: WatchTVComponent;
  let fixture: ComponentFixture<WatchTVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatchTVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatchTVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
