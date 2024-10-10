import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingShimmerCardComponent } from './loading-shimmer-card.component';

describe('LoadingShimmerCardComponent', () => {
  let component: LoadingShimmerCardComponent;
  let fixture: ComponentFixture<LoadingShimmerCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [LoadingShimmerCardComponent]
    });
    fixture = TestBed.createComponent(LoadingShimmerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
