import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarryPotterMovieDetailsComponent } from './harry-potter-movie-details.component';

describe('HarryPotterMovieDetailsComponent', () => {
  let component: HarryPotterMovieDetailsComponent;
  let fixture: ComponentFixture<HarryPotterMovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarryPotterMovieDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HarryPotterMovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
