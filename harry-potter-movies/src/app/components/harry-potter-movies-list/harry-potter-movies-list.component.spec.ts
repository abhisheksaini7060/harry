import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarryPotterMoviesListComponent } from './harry-potter-movies-list.component';

describe('HarryPotterMoviesListComponent', () => {
  let component: HarryPotterMoviesListComponent;
  let fixture: ComponentFixture<HarryPotterMoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarryPotterMoviesListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HarryPotterMoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
