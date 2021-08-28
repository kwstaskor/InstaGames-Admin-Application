import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingUserRatingsComponent } from './rating-user-ratings.component';

describe('RatingUserRatingsComponent', () => {
  let component: RatingUserRatingsComponent;
  let fixture: ComponentFixture<RatingUserRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingUserRatingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingUserRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
